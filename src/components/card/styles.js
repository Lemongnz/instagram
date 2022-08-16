import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #fff;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 6px 1rem;

  .left-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

export const CardImg = styled.div``;

export const RedHeart = styled.button`
  color: red;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 0.3rem;

  &:hover {
    color: #b05454;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 0.3rem;

  &:hover {
    color: #6b6b6b;
  }
`;

export const CardIcons = styled.div`
  font-size: 1.5rem;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const CardDescription = styled.div`
  padding: 5px 1rem;

  span {
    font-weight: 700;
    font-size: 15px;
    margin-right: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    display: inline;
  }
`;
