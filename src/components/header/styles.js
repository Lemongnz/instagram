import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const HeaderApp = styled.header`
  position: fixed;
  height: 60px;
  display: grid;
  grid-template-columns: ${({ width }) =>
    width > 768 ? "1fr 1fr 1fr" : "1fr 1fr"};
  font-size: calc(10px + 2vmin);
  border-bottom: 1px solid #ccc;
  margin: 0;
  padding: 5px 15px;
  width: 100%;
  background-color: #fff;

  a {
    color: #000;
    text-decoration: none;
  }
`;

export const Insta = styled(NavLink)`
  font-family: "Satisfy", cursive;
  font-size: calc(15px + 2vmin);
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #000;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 280px;

  input {
    width: 100%;
    height: 35px;
    border: 0;
    padding-left: 50px;
    background: rgb(239, 239, 239);
    border-radius: 5px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 10px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #000;
    font-size: calc(15px + 2vmin);
    margin-left: 10px;
    cursor: pointer;
  }
`;
