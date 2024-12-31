import service from "../appwrite/databases";
import { useState, useEffect, React } from "react";
import { Container } from "../components/container/Container";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16">
        <Container>
          <div className="flex flex-col items-center justify-center text-center space-y-4 h-full">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
              🚪 Login to Unlock Amazing Content! ✨
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Sign in to explore curated posts just for you.
            </p>
            <button className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-600 transition"
             onClick={() => navigate("/login")}>
              Login Now
            </button>
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-16">
        <Container>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
              📰 No Posts Available Yet
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Add a post to showcase your creativity!
            </p>
            <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:bg-green-600 transition">
              Add Post
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          🌟 Explore Amazing Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="transform hover:scale-105 transition duration-200">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
