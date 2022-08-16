import usePost from "../../hook/usePost";
import Card from "../card";

export default function Wall() {
  const { posts } = usePost();

  return (
    <div>
      {posts.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
