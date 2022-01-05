import React , {useEffect}from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesH3,
ServicesP
} from './serviceElements'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"

const Services = ({id}) => {
    useEffect(() => {
        Aos.init({ duration:3000 });
    }, [])
    return (
        <>
        <ServicesContainer id = {id}>
            <ServicesH1>Services</ServicesH1>
            <ServicesH2>OFF THE BEATEN TRACK</ServicesH2>
            <ServicesWrapper data-aos = "fade-up">
                <ServicesCard>
                    <ServicesIcon src = {img1} alt = ""></ServicesIcon>
                    <ServicesH3>S K A R D U</ServicesH3>
                    <ServicesP>T O U R</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {img2} alt = ""></ServicesIcon>
                    <ServicesH3>T R A N S P O R T</ServicesH3>
                    <ServicesP>T O U R</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {img3} alt = ""></ServicesIcon>
                    <ServicesH3>H U N Z A</ServicesH3>
                    <ServicesP>T O U R</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            </ServicesContainer> 
        </>
    )
}

export default Services
