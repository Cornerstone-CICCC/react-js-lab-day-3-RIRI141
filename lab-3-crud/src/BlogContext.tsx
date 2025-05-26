import { BlogContext } from "./BlogReducer";
import { useContext } from "react";

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (context === undefined) {
      throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
  };