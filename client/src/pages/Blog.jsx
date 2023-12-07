import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { QUERY_POST } from '../utils/queries';

const Blog = () => {
  const { loading, data } = useQuery(QUERY_POST);
  const post = data?.post || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              post={post}
              title="Some Feed for Post(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Blog;


