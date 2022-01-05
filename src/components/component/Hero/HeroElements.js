import styled from 'styled-components';

export const HeroContainer = styled.div`
    background:#FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 540px;
    position: relavite;
    z-index: 1
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({lightText}) => (lightText ? '#ff7d00' : '#f7ff00')};
`;

export const HeroH1 = styled.h1`
    color: #fccb00:
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;

`;
export const HeroP = styled.p`
    margin top:30%;
    color: #fff;
    font-size: 68px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`