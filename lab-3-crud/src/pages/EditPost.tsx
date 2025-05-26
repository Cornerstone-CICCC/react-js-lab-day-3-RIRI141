import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from '../BlogContext';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, dispatch } = useBlog();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setPublished(post.published);
    }
  }, [post]);

  if (!post) {
    return <div>Sorry I can't find post</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!title.trim() || !content.trim()) {
    //   toast.error('ENter title and content');
    //   return;
    // }

    const updatedPost = {
      ...post,
      title: title.trim(),
      content: content.trim(),
      published,
    };

    dispatch({ type: "UPDATE", payload: updatedPost });
    navigate(`/blog/${post.id}`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold  ">Edit Post</h1>

      <div className="flex justify-center items-center ">
        <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="mr-2"
                />
                Publish
              </label>
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => navigate(`/blog/${post.id}`)}
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;
