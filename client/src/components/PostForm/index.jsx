import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POST, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = () => {
 const [postTitle, setPostTitle] = useState('');
 const [postBody, setPostBody] = useState('');
 const [characterCount, setCharacterCount] = useState(0);

 const [addPost, { error }] = useMutation(ADD_POST, {
  refetchQueries: [
    QUERY_POST,
    'getPost',
    QUERY_ME,
    'me'
  ]
 });

 const handleFormSubmit = async (event) => {
  event.preventDefault();

  console.log("click")

  try {
    
    const { data } = await addPost({
      variables: {
        postTitle,
        postBody,
        postAuthor: Auth.getProfile().data.username,
      },
    });

    console.log(data)

    setPostBody('');
    setPostTitle('');
  } catch (err) {
    console.error(err);
  }
 };

 const handleChange = (event) => {
  const { name, value } = event.target;

  if (name === 'postBody' && value.length <= 280) {
    setPostBody(value);
    setCharacterCount(value.length);
  } else if (name === 'postTitle') {
    setPostTitle(value);
  }
 };

 return (
  <div>
    {/* <h3>Empowering the community through knowledge sharing</h3> */}

    {Auth.loggedIn() ? (
      <>
        <p
          className={`m-0 ${
            characterCount === 280 || error ? 'text-danger' : ''
          }`}
        >
          Character Count: {characterCount}/280
        </p>
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              name="postTitle"
              placeholder="Post Title"
              value={postTitle}
              className="form-input w-100"
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            />
            <textarea
              name="postBody"
              placeholder="Here's a new post..."
              value={postBody}
              className="form-input w-100"
              style={{ lineHeight: '1.5', resize: 'vertical' }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-primary btn-block py-3" type="submit">
              Add Post
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      </>
    ) : (
      <p>
        You need to be logged in to share your knowledge. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    )}
  </div>
 );
};

export default PostForm;