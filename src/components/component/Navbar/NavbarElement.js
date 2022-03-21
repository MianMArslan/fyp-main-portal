import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#FFFFFF" : "#FFFFFF")};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 40px;
`;
export const NavLinks = styled(LinkS)`
  color: #000000;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #fb9e00;
    border-radius: 50px;
    transition: 0.2s ease-in-out;
  }
  &.active {
    border-bottom: 3px solid #fb9e00;
  }
`;

export const NavLink = styled(LinkS)`
   color: #000000;
   flex: 1,
   flexDirection: 'column',
   alignItems: 'flex-end',
   height: 100%;
   cursor: pointer;
   &:hover {
      background-color: #fb9e00;
      border-radius: 50px;
      transition: 0.2s ease-in-out;
  }
  &.active{
   border-bottom: 3px solid blue;
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
   border-radius: 40px;
   background:#fcdc00;
   white-space: nowrap;
   padding: 10px 22px;
   color: #010606;
   font-size: 14px;
   font-weight: bold;
   outline: none;
   border; none;
   cursor: pointer;
   margin-left: 10px;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   &:hover{
      transition: all 0.2s ease-in-out;
      background: #fb9e00;
      color: #010606;
   }
`;
