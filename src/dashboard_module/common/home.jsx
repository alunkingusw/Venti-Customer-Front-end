/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import EndPoints from '../../Api/baseUrl/endPoints';
import { FaHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { Error } from '../../components/toasts';
import InputEmoji from 'react-input-emoji';
import { X, Heart, MessageCircle, Send, Bookmark, Smile } from 'lucide-react';

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [textAreaContent, setTextAreaContent] = useState('');
  const [commentModal, setCommentModal] = useState(false);
  const [comments, setComments] = useState([])
  const [posties, setPosties] = useState([])
  const [postUser, setPostUser] = useState([])

  const fetchPosts = useCallback(async () => {
    try {
      const { data } = await EndPoints.posts.fetch_all_posts();
      const postsWithLikedStatus = data.posts.map(posts => ({ ...posts, liked: false }));
      setAllPosts(postsWithLikedStatus);
    } catch (error) {
      Error('Error fetching posts:', error.response.error.error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleLike = async (postId) => {
    try {
      const { data } = await EndPoints.posts.like_post(postId);
      setAllPosts(prevPosts =>
        prevPosts.map(post =>
          post._id === postId
            ? {
              ...post,
              likes: post.likes.includes(data._id)
                ? post.likes.filter(id => id !== data._id)
                : [...post.likes, data.userId]
            }
            : post
        )
      );
    } catch (error) {
      Error('Error liking post:', error?.response?.data?.error);
    }
  };

  const isLiked = (post) => {
    const currentUserId = 'current-user-id';
    return post.likes.includes(currentUserId);
  };

  const handleComments = async (id) => {
    try {
      const { data } = await EndPoints.posts.comment_post(id, { text: textAreaContent });
      if (data.status == 200) {
        setTextAreaContent('');
        fetchPosts();
      }
    } catch (error) {
      Error(error.response.data.error);
    }
  };

  const view_comments = async (id) => {
    setCommentModal(true)
    try {
      const { data } = await EndPoints.posts.fetch_post(id)
      if (data.status == 200) {
        setComments(data.posts.comments)
        setPosties(data.posts)
        setPostUser(data.posts.user)
      }
    } catch (error) {
      Error(error.response.data.error)
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto pt-6 pb-8">
        {allPosts.map((post, index) => (
          <div key={index} className="border border-gray-200 rounded-lg mb-8">
            <div className="flex items-center p-4">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                <img
                  className="w-full h-full object-cover"
                  src={post.user?.profilePicture || "https://via.placeholder.com/150"}
                  alt={post.user?.username || "User"}
                />
              </div>
              <span className="font-semibold text-sm">{post.user?.username || "Username"}</span>
            </div>
            <img className="w-full" src={post.imageUrl} alt="Post" />
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div className="flex space-x-4">
                  <button onClick={() => handleLike(post._id)}>
                    {isLiked(post)
                      ? <FaHeart className="text-2xl cursor-pointer text-red-500" />
                      : <GoHeartFill className="text-2xl cursor-pointer text-red-500 hover:text-red-500" />
                    }
                  </button>
                  <button onClick={() => view_comments(post._id)}>
                    <FaRegComment className="text-2xl cursor-pointer hover:text-blue-500" />
                  </button>
                  <FaRegPaperPlane className="text-2xl cursor-pointer hover:text-blue-500" />
                </div>
                <FaRegBookmark className="text-2xl cursor-pointer hover:text-yellow-500" />
              </div>
              <p className="font-semibold text-sm mb-2">{post.likes.length || 0} likes</p>
              <p className="text-sm mb-2">
                <span className="font-semibold mr-2">{post.user?.username || "Username"}</span>
                {post.caption}
              </p>
              <p className="text-gray-500 text-xs mb-2">View all {post.comments?.length || 0} comments</p>
              <p className="text-gray-400 text-xs uppercase">{formatDate(post.createdAt)}</p>
            </div>
            <div className="border-t border-gray-200 p-4 relative">
              <div className="flex items-center">
                <InputEmoji
                  background='transparent'
                  color={
                    '#fff'
                  }
                  theme="auto"
                  className="input-emoji dark:bg-transparent"
                  value={textAreaContent}
                  onChange={setTextAreaContent}
                  placeholder="Type a message"
                />
                <button type="button" onClick={() => handleComments(post._id)} className="text-blue-500 font-semibold text-sm ml-2">Post</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {commentModal && (
        <div className="fixed inset-0 z-[1055] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none bg-black/50">
          <div className="relative w-full max-w-6xl max-h-[90vh] mx-4">
            <div className="relative rounded-lg bg-white shadow-lg dark:bg-gray-800">
              <button type="button" onClick={() => setCommentModal(false)} className="absolute top-4 right-4  hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
                <X className="w-6 h-6 font-bold" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className='hidden sm:block'>
                <div className="flex h-[80vh] max-h-[800px]">
                  <div className="w-1/2">
                    <img src={posties.imageUrl} alt="" className="h-full w-full object-fill" />
                  </div>
                  <div className="w-1/2 flex flex-col">
                      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                        <img src={postUser.profilePicture} alt="" className="w-10 h-10 rounded-full mr-3" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{postUser.username}</span>
                      </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {comments.map((comment, index) =>(
                      <div key={index} className="flex items-center">
                        <img src="https://picsum.photos/200/300?grayscale" alt="" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                          <span className="font-medium text-gray-800 dark:text-gray-200">username</span>
                          <p className="text-gray-600 dark:text-gray-400">{comment.text}</p>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between mb-4">
                        <div className="flex space-x-4">
                          <button className="text-gray-800 dark:text-white hover:text-red-500">
                            <Heart size={24} />
                          </button>
                          <button className="text-gray-800 dark:text-white">
                            <MessageCircle size={24} />
                          </button>
                        </div>
                      </div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white mb-2">1200 likes</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-4">2 days ago</p>
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        {/* <Smile size={24} className="text-gray-400" /> */}
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          className="flex-1 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button
                          className={`font-semibold text-blue-500 hover:text-blue-600`}>
                          Post
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className='sm:hidden'>
                <div className="h-[80vh] max-h-[800px]">
                  <div className="w-full flex flex-col">
                    <div className="items-center p-4 border-b border-gray-200 dark:border-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">Comments</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {comments.map((comment, index) =>(
                      <div key={index} className="flex items-center">
                        <img src="https://picsum.photos/200/300?grayscale" alt="" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                          <span className="font-medium text-gray-800 dark:text-gray-200">username</span>
                          <p className="text-gray-600 dark:text-gray-400">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between mb-4">
                        <div className="flex space-x-4">
                          <button className="text-gray-800 dark:text-white hover:text-red-500">
                            <Heart size={24} />
                          </button>
                          <button className="text-gray-800 dark:text-white">
                            <MessageCircle size={24} />
                          </button>
                        </div>
                      </div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white mb-2">1,234 likes</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-4">2 days ago</p>
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        {/* <Smile size={24} className="text-gray-400" /> */}
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          className="flex-1 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button
                          className={`font-semibold text-blue-500 hover:text-blue-600`}>
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default Home;
