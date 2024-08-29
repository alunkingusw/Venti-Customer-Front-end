/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';
import { Error } from '../../../components/toasts';
import EndPoints from '../../../Api/baseUrl/endPoints';
import InputEmoji from 'react-input-emoji';

const Creator_home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [textAreaContent, setTextAreaContent] = useState('');

  const fetchPosts = useCallback(async () => {
    try {
      const { data } = await EndPoints.posts.fetch_all_posts();
      const postsWithLikedStatus = data.posts.map(posts => ({ ...posts, liked: false }));
      setAllPosts(postsWithLikedStatus);
    } catch (error) {
      console.error('Error fetching posts:', error);
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
                      : <FaRegHeart className="text-2xl cursor-pointer hover:text-red-500" />
                    }
                  </button>
                  <FaRegComment className="text-2xl cursor-pointer hover:text-blue-500" />
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
                  className="input-emoji"
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
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default Creator_home;