import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffba46;

    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width:480px){
        height:1300px;
    }
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 0px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

` 

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    max-height: 290px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px
    margin-bottom: 10px;
` 
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 100px;
    margin-bottom: 24px;
    
    @media screen and (max-width: 480px){
        font-size: 2rem
    }

`

export const ServicesH3 = styled.h3`
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align:center;
    
`
