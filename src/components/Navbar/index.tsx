import React, { useContext } from "react";
import { Nav, NavbarWrapper, NavLogo, NavIcon, LightBulbIcon } from "./styles";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "styled-components";

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
        <LightBulbIcon onClick={toggleTheme}>{lightBulbIcon}</LightBulbIcon>
      </NavbarWrapper>
    </Nav>
  );
};

export default Navbar;
