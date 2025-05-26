import { useBlog } from '../BlogContext';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const { posts } = useBlog();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Blogs</h1>
        <Link
          to="/blog/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add new Post
        </Link>
      </div>
      
      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">
              {post.content.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 text-xs rounded ${
                post.published
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {post.published ? 'Already posted' : 'Draft'}
              </span>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                See Post deteil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;