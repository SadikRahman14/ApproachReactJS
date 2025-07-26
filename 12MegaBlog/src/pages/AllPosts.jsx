import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config.appwrite.js";
import authService from "../appwrite/auth.appwrite.js";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const user = await authService.getCurrentUser();
      if (!user) {
        console.log("User not logged in. Cannot fetch posts.");
        setLoading(false);
        return;
      }

      try {
        const result = await appwriteService.getPosts();
        if (result) {
          setPosts(result.documents);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
