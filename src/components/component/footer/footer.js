import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FContainer,
  FContent,
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  Sociallogo,
  Socialmedia,
  SocialmediaWrap,
  Mainfooter,
  WebsiteRight,
} from "./footerElements";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = ({ id }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <Socialmedia>
          <SocialmediaWrap>
            <Sociallogo to="/" onClick={toggleHome}>
              OFF THE BEATEN TRACK
            </Sociallogo>
            <SocialIcons>
              <SocialIconLink href="/" target="blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="blank" aria-label="Gmail">
                <SiGmail />
              </SocialIconLink>
              <SocialIconLink href="/" target="blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="blank" aria-label="Phone">
                <FaPhone />
              </SocialIconLink>
            </SocialIcons>
          </SocialmediaWrap>
        </Socialmedia>
      </FooterWrap>
      <Mainfooter>
        <FContainer>
          <FContent>
            <WebsiteRight>
              &copy; All Rights Reserved. {new Date().getFullYear()} Powered by
              vTechServe
            </WebsiteRight>
          </FContent>
        </FContainer>
      </Mainfooter>
    </FooterContainer>
  );
};

export default Footer;
