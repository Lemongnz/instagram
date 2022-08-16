import styled from "styled-components";

export const StoryContainer = styled.div`
  font-size: 0.9rem;
  border: 0;
  background-color: transparent;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  background: rgb(255, 201, 0);
  background: linear-gradient(
    36deg,
    rgb(255, 201, 0) 13%,
    rgb(255, 0, 95) 73%,
    rgb(255, 9, 237) 100%
  );
  padding: 5px;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: 2px solid #fff;
  }
`;
