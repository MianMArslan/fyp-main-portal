import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { DealsContainer,
DealsH1,
DealsWrapper,
DealsCard,
DealsIcon,
DealsH2,
DealsH3,
DealsP,
Button,
DealBtnLink
} from './DealsElements'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"


export const homeObjtwo = {
    id:'deals'
}

const Deals = ({id}) => {
    useEffect(() => {
        Aos.init({ duration:3000 });
    }, [])
    return (
        <>
        <DealsContainer id = {id}>
            <DealsH1>Hot Deals</DealsH1>
            <DealsH2>OFF THE BEATEN TRACK</DealsH2>
            <DealsWrapper data-aos = 'fade-up'>
                <DealsCard>
                    <DealsIcon src = {img1} alt = ""></DealsIcon>
                    <DealsH3>S K A R D U</DealsH3>
                    <DealsP>T O U R</DealsP>
                    <Button>
                        <DealBtnLink to="/Login">Book Now</DealBtnLink>
                        </Button>
                </DealsCard>
                <DealsCard>
                    <DealsIcon src = {img2} alt = ""></DealsIcon>
                    <DealsH3>T R A N S P O R T</DealsH3>
                    <DealsP>T O U R</DealsP>
                    <Button>
                        <DealBtnLink to="/Login">Book Now</DealBtnLink>
                        </Button>  
                    </DealsCard>
                <DealsCard>
                    <DealsIcon src = {img3} alt = ""></DealsIcon>
                    <DealsH3>H U N Z A</DealsH3>
                    <DealsP>T O U R</DealsP>
                    <Button>
                        <DealBtnLink to="/Login">Book Now</DealBtnLink>
                        </Button>
                </DealsCard>
            </DealsWrapper>
            </DealsContainer> 
        </>
    )
}

export default Deals