import React, { useState } from "react";

export const PostContext = React.createContext();

const MOCK_CARD = [
  {
    id: 1,
    user: {
      name: "dev33",
      avatar: "https://picsum.photos/id/237/40",
    },
    image: "https://picsum.photos/id/93/450",
    likes: 53,
    description: "Momentos de inspiracion",
  },
  {
    id: 2,
    user: {
      name: "dev8",
      avatar: "https://picsum.photos/id/2/40",
    },
    image: "https://picsum.photos/id/183/450",
    likes: 12,
    description: "Por el camino",
  },
  {
    id: 5,
    user: {
      name: "solpozzi",
      avatar: "https://picsum.photos/id/45/40",
    },
    image: "https://picsum.photos/id/1025/450",
    likes: 125,
    description: "cubita 😍",
  },
];

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(MOCK_CARD);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}
