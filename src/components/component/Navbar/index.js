import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
  MobileIcon,
  NavBtnLink,
  NavBtn,
} from "./NavbarElement";
import img1 from "../../images/off the beaten track.png";
import Search from "../searchbar/search";
const styles = {
  NavbarAvater: {
    width: "130px",
    height: "70px",
    borderradius: "0%",
    cursor: "pointer",
  },
};

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "Black" }}>
        <Nav scrollNav={scrollNav}>
          <img
            src={img1}
            style={styles.NavbarAvater}
            alt="logo of the website"
          />
          <NavbarContainer>
            <Search />
            <NavLinks to="/"></NavLinks>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  HOME
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  SERVICES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="destination"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  DESTINATION
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="deals"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  DEALS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  CONTACT
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  ABOUT
                </NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink to="/Formlogin">Log IN</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/signup">SIGN UP</NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
