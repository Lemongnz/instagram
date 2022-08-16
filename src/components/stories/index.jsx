import Story from "../story";
import { StoriesContainer } from "./styles";

const mockStories = [
  {
    id: 1,
    img: "https://picsum.photos/id/1/60",
    name: "dev1",
  },
  {
    id: 26,
    img: "https://picsum.photos/id/2/60",
    name: "dev2",
  },
  {
    id: 29,
    img: "https://picsum.photos/id/3/60",
    name: "dev2",
  },
  {
    id: 23,
    img: "https://picsum.photos/id/4/60",
    name: "dev3",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/5/60",
    name: "dev7",
  },
  {
    id: 8,
    img: "https://picsum.photos/id/6/60",
    name: "dev21",
  },
];

export default function Stories() {
  return (
    <StoriesContainer>
      {mockStories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </StoriesContainer>
  );
}
