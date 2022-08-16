import Stories from "../../components/stories";
import Wall from "../../components/wall";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Stories />
      <Wall />
    </HomeContainer>
  );
}
