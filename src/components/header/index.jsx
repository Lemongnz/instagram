import { HeaderApp, Icons, InputSearch, Insta, SearchIcon } from "./styles";
import { MdHomeFilled } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const breackpoint = 768;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth); //
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <HeaderApp width={width}>
      <Insta to="/" rel="noreferrer noopener">
        Instagram
      </Insta>
      {width > breackpoint ? (
        <InputSearch>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </InputSearch>
      ) : (
        <></>
      )}
      <Icons>
        <NavLink to="/" rel="noreferrer noopener">
          <MdHomeFilled />
        </NavLink>
        <NavLink to="/new-post" rel="noreferrer noopener">
          <BiMessageSquareAdd />
        </NavLink>
      </Icons>
    </HeaderApp>
  );
}
