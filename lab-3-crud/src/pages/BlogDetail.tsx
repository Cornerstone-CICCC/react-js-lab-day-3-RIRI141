
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBlog } from '../BlogContext';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { posts, dispatch } = useBlog();
  
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <div>Sorry I can't find post</div>;
  }

  const handleDelete = () => {
    if (window.confirm("Do you want to Delete this post?")) {
      dispatch({ type: "DELETE", payload: post.id });
      navigate("/blog");
    }
  };

  return (
    <div className="" >
      <div className="mb-4">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          ← GO back to Blog List
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        
        <div className="mb-4">
          <span className={`px-2 py-1 text-xs rounded ${
            post.published
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {post.published ? 'Already posted' : 'Draft'}
          </span>
        </div>
        
        <div className="prose max-w-none mb-6">
          <p className="whitespace-pre-wrap">{post.content}</p>
        </div>
        
        <div className="flex space-x-2">
          <Link
            to={`/blog/edit/${post.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;