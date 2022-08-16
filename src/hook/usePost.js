import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function usePost() {
  const { posts, setPosts } = useContext(PostContext);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const editPost = (id, post) => {
    const newPosts = posts
      .map((p) => {
        if (p.id === id) {
          return { ...p, ...post };
        }
        return p;
      })
      .filter((p) => p.id !== id);
    setPosts(newPosts);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return {
    addPost,
    editPost,
    deletePost,
    posts,
  };
}
