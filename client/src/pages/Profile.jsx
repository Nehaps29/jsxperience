import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PostForm from '../components/PostForm';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {

  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data?.user);

  const user = data?.me || data?.user || {};
  
  const posts = user.posts || [];
  console.log(user);

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
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-primary text-light p-3 mb-5">
          Your Posts
        </h2>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px #1A1A1A' }}
          >
            <PostForm />
          </div>
        )}
{/*
        <div className="col-12 col-md-10 mb-5">
          <PostList
            post={user.post}
            title={`${user.username}'s posts...`}
            showTitle={false}
            showUsername={false}
          />
        </div> */}
        <br/>
        <div className="col-12 col-md-10 mb-5">
        {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.postTitle}</h3>
          {/* <p>Author: {post.postAuthor}</p> */}
          <p>{post.postBody}</p>
          <hr />
        </div>
      ))}
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
