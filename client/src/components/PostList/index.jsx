import { Link } from 'react-router-dom';

const PostList = ({
  post,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!post) {
    return <h3>No Post Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {post &&
        post.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this post on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/post/${post._id}`}
            >
              Join the discussion on this post.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;