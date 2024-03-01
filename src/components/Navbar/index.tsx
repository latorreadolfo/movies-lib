import React, { useContext } from "react";
import {
  Nav,
  NavbarWrapper,
  NavLogo,
  NavIcon,
  LightBulbIcon,
  RightSideWrapper,
  SearchInput,
  SearchIcon,
} from "./styles";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "styled-components";
import { Button } from "../../styles/globalStyles";

interface Props {
  toggleTheme(): void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  const lightBulbIcon = theme?.title === "light" ? <BiMoon /> : <BiSun />;

  return (
    <Nav>
      <NavbarWrapper>
        <NavLogo to="/">
          <NavIcon />
          easy
          <h2 style={{ fontWeight: "bold" }}>FLIX</h2>
        </NavLogo>
        <RightSideWrapper>
          <LightBulbIcon onClick={toggleTheme}>{lightBulbIcon}</LightBulbIcon>
          <SearchInput type="text" placeholder="Search for a title" />
          <Button type="submit">
            <SearchIcon />
          </Button>
        </RightSideWrapper>
      </NavbarWrapper>
    </Nav>
  );
};

export default Navbar;
