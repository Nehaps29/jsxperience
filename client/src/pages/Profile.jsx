import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import PostForm from '../components/PostForm';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { DELETE_POST, UPDATE_POST1 } from '../utils/mutations'; 
import Auth from '../utils/auth';
import '../components/profile/profile.css'
import { Card, CardHeader, CardBody, Heading, Divider, Box, Input, Textarea, Code } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const Profile = (quotedata) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });


  const user = data?.me || data?.user || {};

  const posts = user.posts || [];
  const [deletePost] = useMutation(DELETE_POST);
  const [updatePost] = useMutation(UPDATE_POST1);
  const [editPost, setEditPost] = useState({ id: null, title: '', body: '' });
  const [isEditing, setIsEditing] = useState(false);
  const handleDeletePost = async (postId) => {
    try {
      const { data } = await deletePost({
        variables: { postId },
      });
  
      console.log('Post deleted:', data.deletePost);
      window.location.reload();
     
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  const handleEditPost = (postId, title, body) => {
    setEditPost({ id: postId, title, body });
    setIsEditing(true);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditPost({ id: null, title: '', body: '' });
  };
 
  const getRandomQuote= (arr) => arr[Math.floor(Math.random() * arr.length)];
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    // Check if data is not empty before calling getRandomQuote

    if (quotedata.quotedata && quotedata.quotedata.length > 0) {
      const quote = getRandomQuote(quotedata.quotedata);
      setRandomQuote(quote);
      
    }
    else {
      console.log('Quotedata is empty or not an array');
    }
  }, [quotedata]);
 
  const handleUpdatePost = async () => {
    try {
      const { id, title, body } = editPost;
      const { data } = await updatePost({
        variables: { postId: id,  postTitle: title, postBody: body  },
      });
      
      console.log('Post updated:', data.updatePost);
     
      setEditPost({ id: null, title: '', body: '' });
      setIsEditing(false);
      
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3 col-12">
        <h2 className="col-12 col-md-10 bg-primary text-light p-3 mb-5 text-center profiletext">
           {user.username}'s Profile
        </h2>
      <div className="col-12 text-center" >
        <Heading>Plant Fun Fact</Heading>
      </div>
      <div className="col-12 text-center pb-5" >
         
        <Code>{randomQuote}</Code>
        </div>  
        <Divider orientation='horizontal' />
        <div className="text-center col-12 pt-3">
        <Heading>My Posts</Heading>
        </div>
        <div className="col-12 col-md-10 mb-5 ">
          {posts.map((post) => (
            
            <div key={post._id}>
              <Card boxShadow='dark-lg' p='6' rounded='md' bg='white'>
              {isEditing && editPost.id === post._id ? (
                <div>
                  <Card>
                  <Input
                  
                    type="text"
                    value={editPost.title}
                    onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                  />
                
                  
                  <Textarea
                    value={editPost.body}
                    onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
                  />
                  
                  <button className="update-button" onClick={handleUpdatePost}>Update</button>
                  <button className="cancel-button"onClick={handleCancelEdit}>Cancel</button>
                  </Card>
                </div>
              ) : (
                <div>
                  <CardHeader><Heading size='md'>{post.postTitle}</Heading></CardHeader>
                  
                  <CardBody>{post.postBody}</CardBody>
                  <hr />
                </div>
              )}
              <button
                className="edit-button"
                onClick={() => handleEditPost(post._id, post.postTitle, post.postBody)}
              >
                Edit <EditIcon />
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeletePost(post._id)}
              >
                Delete <DeleteIcon />
              </button>

              </Card>
              
            </div>
          ))}
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px #1A1A1A' }}
          >
            <PostForm />
          </div>
        )}
      </div>

    </div>
  );
  
};

export default Profile;
