import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const Blog = () => {
  
  const { loading, error, data } = useQuery(QUERY_POST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const posts = data.posts || [];
  console.log(data);

  return (
    <div>
      <h1 className="flex-row justify-center">Posts</h1>
      <h3 className="flex-row justify-center">Empowering the community through knowledge sharing!</h3>
      <div
          className="flex-row justify-center"
          style={{ border: '1px #1A1A1A' }}
        >
       
      </div>
      <br />
      <div>
      {posts.map((post) => (
        <div key={post._id} className="card mb-3">
          <h3 className="card-header bg-primary text-light p-2 m-0">{post.postTitle}</h3>
          <p className="text-black"> {post.postBody}</p>
          <p className="card-body bg-light p-2">Author: {post.postAuthor}</p>
          <hr />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Blog;


