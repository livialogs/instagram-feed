import Image from "next/image";
import PostItem from "@/components/PostItem";

const posts = Array.from({ length: 20 }, (_, i) => ({
  username: `user${i + 1}`,
  avatarUrl: `https://i.pravatar.cc/150?img=${i + 1}`,
  imageUrl: `https://picsum.photos/seed/post${i + 1}/600/400`,
  numberOfLikes: Math.floor(Math.random() * 1000),
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${i + 1}`,
}));

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Feed do Instagram</h1>
      <div className="flex flex-col items-center">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </main>
  );
}