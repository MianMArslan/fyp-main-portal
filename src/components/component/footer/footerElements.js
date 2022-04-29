import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const Socialmedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialmediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-dirextion: column;
    }
`

export const Sociallogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const WebsiteRight = styled.small`
    color: #fff;
    margin-bottom: 16px;

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        margin-left: -90px
    }
   
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
export const Mainfooter = styled.div`
    color: white;
    background: #666666;
    padding-top: 1rem;
    position: absolute;
    margin-bottom: 0;
    width: 100%;
`
export const FContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 5vh;
    max-width: 100%;
`
export const FContent = styled.div`
    flex:1;
    marign-right:30%;
    margin-left:40%;
`