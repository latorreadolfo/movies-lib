import React from "react";
import { Nav, NavbarWrapper, NavLogo, NavIcon } from "./styles";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarWrapper>
          <NavLogo to="/">
            <NavIcon />
            dreamFLIX
          </NavLogo>
        </NavbarWrapper>
      </Nav>
    </>
  );
}

export default Navbar;
