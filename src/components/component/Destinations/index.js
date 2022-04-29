import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { DestinationContainer,
DestinationH1,
DestinationWrapper,
DestinationP,
DestinationIcon,
DestinationH3,
DestinationH2,
DestinationCard
} from './destinationElements'
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

export const homeObjthree = {
    id:'destination'
}

const Destination = ({id}) => {
        useEffect(() => {
            Aos.init({ duration:2000 });
        }, [])

        
    return (
        <>
             <DestinationContainer id ={id}>
            <DestinationH1>Destination</DestinationH1>
            <DestinationH2>OFF THE BEATEN TRACK</DestinationH2>
            <DestinationWrapper data-aos = "fade-up">
                <DestinationCard>
                    <DestinationIcon src = {img1} alt = "travel img"></DestinationIcon>
                    <DestinationH3>S K A R D U</DestinationH3>
                    <DestinationP>T O U R</DestinationP>
                    
                </DestinationCard>
                <DestinationCard>
                    <DestinationIcon src = {img2} alt = ""></DestinationIcon>
                    <DestinationH3>T R A N S P O R T</DestinationH3>
                    <DestinationP>T O U R</DestinationP>
                </DestinationCard>
                <DestinationCard>
                    <DestinationIcon src = {img3} alt = ""></DestinationIcon>
                    <DestinationH3>H U N Z A</DestinationH3>
                    <DestinationP>T O U R</DestinationP>
                </DestinationCard>
            </DestinationWrapper>
            </DestinationContainer> 
        </>
    )
}

export default Destination
