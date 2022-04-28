import React , {useEffect}from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH3
} from './serviceElements'
import img1 from "../../images/agency.png"
import img2 from "../../images/secure.jpeg"
import img3 from "../../images/chat.jpeg"

export const homeObjfive = {
    id:'services'
}

const Services = ({id}) => {
    useEffect(() => {
        Aos.init({ duration:3000 });
    }, [])
    return (
        <>
        <ServicesContainer id = {id}>
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper data-aos = "fade-up">
                <ServicesCard>
                    <ServicesIcon src = {img1} alt = ""></ServicesIcon>
                    <ServicesH3>Register as a Tourism Agency</ServicesH3>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {img3} alt = ""></ServicesIcon>
                    <ServicesH3>Chat Between Tourist</ServicesH3>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {img2} alt = ""></ServicesIcon>
                    <ServicesH3>Secure System</ServicesH3>
                </ServicesCard>
            </ServicesWrapper>
            </ServicesContainer> 
        </>
    )
}

export default Services
