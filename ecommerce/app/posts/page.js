"use client"
import Link from 'next/link';
import { useState, useEffect, cache } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "force-cache"});
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error al cargar los posts: {error.message}</p>
      ) : (
        <div>
          <h1>Posts</h1>
          {posts.map((post) => (
            <div key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Posts;