import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  font-family: "Trebuchet MS", sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(BiCameraMovie)`
  margin-right: 0.5rem;
  font-size: 70px;
`;

export const LightBulbIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
