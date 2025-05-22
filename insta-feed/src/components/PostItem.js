"use client";

import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

export default function PostItem({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.numberOfLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-md shadow-sm mb-6 w-full max-w-md">
      {/* Topo */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <img
              src={post.avatarUrl}
              alt={post.username}
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          </div>
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-blue-500 text-xs font-semibold">Follow</button>
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Imagem */}
      <img src={post.imageUrl} alt="Post" className="w-full object-cover max-h-[500px]" />

      {/* Ações */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex gap-4">
          <button onClick={toggleLike}>
            {liked ? (
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            ) : (
              <Heart className="w-6 h-6 text-gray-800" />
            )}
          </button>
          <MessageCircle className="w-6 h-6 text-gray-800" />
          <Send className="w-6 h-6 text-gray-800" />
        </div>
        <Bookmark className="w-6 h-6 text-gray-800" />
      </div>

      {/* Curtidas e descrição */}
      <div className="px-4 pb-4">
        <span className="text-sm font-semibold block mb-1">{likes} curtidas</span>
        <p className="text-sm"><span className="font-semibold">{post.username}</span> {post.description}</p>
      </div>
    </div>
  );
}
