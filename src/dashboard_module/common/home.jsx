/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import EndPoints from '../../Api/baseUrl/endPoints';
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";
import { Error } from '../../components/toasts';
import InputEmoji from 'react-input-emoji';

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [textAreaContent, setTextAreaContent] = useState('');
  const [commentModal, setCommentModal] = useState(false);

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
    const {data} = await EndPoints.posts.fetch_post(id)
    console.log(data)
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
            <button type="button" onClick={()=>setCommentModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="flex h-[80vh] max-h-[800px]">
              <div className="w-1/2">
                <img src="https://picsum.photos/id/1/800/800" alt="" className="h-full w-full object-cover" />
              </div>

              <div className="w-1/2 flex flex-col">
                <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                  <img src="https://picsum.photos/id/237/200/300" alt="" className="w-10 h-10 rounded-full mr-3" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">username</span>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div className="flex items-center">
                    <img src="https://picsum.photos/200/300?grayscale" alt="" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">username</span>
                      <p className="text-gray-600 dark:text-gray-400">This is a comment on the image.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src="https://picsum.photos/200/300?grayscale" alt="" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">username</span>
                      <p className="text-gray-600 dark:text-gray-400">Another comment on the image.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <input type="text" className="w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-full px-4 py-2 focus:outline-none" placeholder="Add a comment..." />
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
