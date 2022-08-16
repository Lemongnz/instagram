import { ImgWrapper, StoryContainer } from "./styles";

export default function Story({ story }) {
  return (
    <StoryContainer key={story.id}>
      <ImgWrapper>
        <img src={story.img} alt="" />
      </ImgWrapper>
      <p>{story.name}</p>
    </StoryContainer>
  );
}
