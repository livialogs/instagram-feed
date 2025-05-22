"use client";
import React, { useState } from "react";
import { Heart } from 'lucide-react';

export default function PostItem({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.numberOfLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded shadow p-4 mb-6 max-w-md w-full mx-auto">
      <div className="flex items-center mb-2">
        <img
          src={post.avatarUrl}
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-bold">{post.username}</span>
      </div>

      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full h-64 object-cover rounded mb-2"
      />

      {/* Curtida */}
      <button onClick={handleLike} className="flex items-center space-x-2 mb-1">
        {liked ? (
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
        ) : (
          <Heart className="w-6 h-6 text-gray-700" />
        )}
        <span className="text-sm">{likes} curtidas</span>
      </button>

      <p className="text-sm">
        <span className="font-semibold">{post.username}</span> {post.description}
      </p>
    </div>
  );
}