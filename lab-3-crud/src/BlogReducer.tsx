import React, { createContext, useReducer, type ReactNode } from 'react';
import type { BlogPost, BlogAction } from './types/blog'

interface BlogContextType {
  posts: BlogPost[];
  dispatch: React.Dispatch<BlogAction>;
}

export const BlogContext = createContext<BlogContextType>({
  posts: [],
  dispatch: () => {}
});

const blogReducer = (state: BlogPost[], action: BlogAction): BlogPost[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      );
    case 'DELETE':
      return state.filter(post => post.id !== action.payload);
    case 'TOGGLE_PUBLISH':
      return state.map(post =>
        post.id === action.payload
          ? { ...post, published: !post.published }
          : post
      );
    default:
      return state;
  }
};

const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My First Blog Post',
    content: 'Hello World',
    published: true,
  },
  {
    id: '2',
    title: 'Learning React',
    content: 'I am currently learning React. It is very interesting!',
    published: false,
  },
];

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(blogReducer, initialPosts);

  return (
    <BlogContext.Provider value={{ posts, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
