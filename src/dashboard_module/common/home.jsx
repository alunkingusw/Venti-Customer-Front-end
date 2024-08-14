/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import EndPoints from '../../Api/baseUrl/endPoints';
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';
import { Error } from '../../components/toasts';
import { useForm } from 'react-hook-form';
import EmojiPicker from 'emoji-picker-react';
import { CiFaceSmile } from "react-icons/ci";

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [allPosts, setAllPosts] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [textAreaContent, setTextAreaContent] = useState('');

  const fetch_posts = async () => {
    try {
      const { data } = await EndPoints.posts.fetch_all_posts();
      // Add a 'liked' property to each post
      const postsWithLikedStatus = data.map(post => ({ ...post, liked: false }));
      setAllPosts(postsWithLikedStatus);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetch_posts();
  }, []);

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
      fetch_posts();
    } catch (error) {
      Error('Error liking post:', error?.response?.data?.error);
    }
  };

  const isLiked = (post) => {
    const currentUserId = 'current-user-id';
    return post.likes.includes(currentUserId);
  };

  const pickEmoji = () => {
    setShowEmojiPicker(prev => !prev);
  };

  const onEmojiClick = (emojiData) => {
    setTextAreaContent(prevContent => prevContent + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handle_comments = async (id, values) => {
    try {
      const { data } = await EndPoints.posts.comment_post(id, values);
      if (data.status === 200) {
        reset();
        fetch_posts();
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
                <button
                  onClick={pickEmoji}
                  type="button"
                  className="text-gray-700 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 transition duration-300"
                >
                  <CiFaceSmile className="w-5 h-5" />
                  <span className="sr-only">Add emoji</span>
                </button>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-grow text-sm p-2 ml-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("comment", { required: true })}
                  value={textAreaContent}
                  onChange={(e) => setTextAreaContent(e.target.value)}
                />
                <button type="submit" onClick={() => handleSubmit(handle_comments(post._id))} className="text-blue-500 font-semibold text-sm ml-2">Post</button>
              </div>
              {showEmojiPicker && (
                <div className="absolute bottom-12 left-0 z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 transition-transform transform scale-95">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}
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

export default Home;
