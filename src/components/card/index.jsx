import {
  Button,
  CardContainer,
  CardDescription,
  CardHeader,
  CardIcons,
  CardImg,
  ImgWrapper,
  RedHeart,
} from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import { BiPaperPlane } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Card({ card }) {
  const [heart, setHeart] = useState(false);
  const [like, setLike] = useState(0);

  useEffect(() => {
    setLike(card.likes);
  }, [card.likes]);

  const addLike = () => {
    setLike(like + 1);
    setHeart(true);
  };

  return (
    <CardContainer>
      <CardHeader>
        <div className="left-side">
          <ImgWrapper>
            <img src={card.user.avatar} alt="Imagen" />
          </ImgWrapper>
          <p>{card.user.name}</p>
        </div>
        <BsThreeDots />
      </CardHeader>
      <CardImg>
        <img src={card.image} alt="Imagen" />
      </CardImg>
      <CardIcons>
        {heart ? (
          <RedHeart onClick={addLike}>
            <AiFillHeart />
          </RedHeart>
        ) : (
          <Button>
            <AiOutlineHeart onClick={addLike} />
          </Button>
        )}
        <Button>
          <TbMessageCircle2 />
        </Button>
        <Button>
          <BiPaperPlane />
        </Button>
        <p>{like} likes</p>
      </CardIcons>
      <CardDescription>
        <span>{card.user.name}</span>
        <p>{card.description}</p>
      </CardDescription>
    </CardContainer>
  );
}
