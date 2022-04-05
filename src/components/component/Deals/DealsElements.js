import styled from "styled-components";

export const DealsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#ffba46;
    @media screen and (max-width: 768px){
        height:1100px;
    }
    @media screen and (max-width:480px){
        height:1300px;
    }
`
export const DealsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
` 

export const DealsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const DealsIcon = styled.img`
    height: 160px;
    width: 160px
    margin-bottom: 10px;
` 
export const DealsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 24px;
    margin-top: 120px;
    @media screen and (max-width: 480px){
        font-size: 2rem
    }
`

export const DealsH2 = styled.h2`
    font-size: 1.5rem;
    color: #ffa000;
    margin-bottom: 40px;
`
export const DealsH3 = styled.h3`
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
    
`
export const DealsP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-top: -20px;
    margin-bottom: 20px;
`

export const Button = styled.button`
    background-color: #fcdc00;
    width: 100px;
    align-items:"center";
    color: white;
    padding: 10px 15px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color:#ffa000;
    }
`

export const DealsH4 = styled.h2`
    color:#aed581;
    font-size: 1.5rem;
    position: absolute;
    margin-top: 5px;
    margin-bottom: 40px;
    text-align:center;
    background-color: white;
    
`
export const DealsH5 = styled.h2`
    font-size: 1rem;
    position: absolute;
    margin-top: 35px;
    margin-bottom: 40px;
    background-color: white;
    
`
export const Badgespan = styled.span`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -5px;
    right: 75%;
    background-color: red;
    color: white;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px
`