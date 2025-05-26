import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../BlogContext';
import { v4 as uuidv4 } from 'uuid';


const AddPost  = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  
  const { dispatch } = useBlog();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost = {
      id: uuidv4(),
      title: title.trim(),
      content: content.trim(),
      published,
    };

    dispatch({ type: 'ADD', payload: newPost });
    navigate('/blog');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New Post</h1>
      <div className='flex justify-center items-center'>
        <div className='w-full'>
      <form onSubmit={handleSubmit} className="max-w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded  focus:ring-blue-500"
            placeholder="Enter post title"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full p-2 border rounded focus:ring-blue-500"
            placeholder="Enter post content"
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
            To publish
          </label>
        </div>
        
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Make a post
          </button>
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default AddPost;