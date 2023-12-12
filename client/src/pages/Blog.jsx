import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import { QUERY_SINGLE_POST } from '../utils/queries';
import CommentForm from '../components/CommentForm'; 
import PostCard from '../components/PostCard';

const Blog = () => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  // const [selectedPostId, setSelectedPostId] = useState(null);
 
  const { loading, error, data } = useQuery(QUERY_POST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const posts = data.posts || [];
  console.log(data);

  

  return (
    <div>
      <h1 className="flex-row justify-center">Posts</h1>
      <h3 className="flex-row justify-center">See What Your Fellow Fleurs Are Chatting About</h3>
      <div
          className="flex-row justify-center"
          style={{ border: '1px #1A1A1A' }}
        >
       
      </div>
      <br />
      <div>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
      </div>
       

    </div>
  );
};

export default Blog;


