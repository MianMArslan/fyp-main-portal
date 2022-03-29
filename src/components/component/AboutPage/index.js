import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Column2, 
    ImgWrap,
    InfoRow,
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    Img,
    Column1,
    TopLine,
    Subtitle, 
    Heading
} from './AboutElements'

import img1 from '../../images/off the beaten track.png';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'OFF THE BEATEN TRACK',
    headline: 'ABOUT US',
    description: 
    'One of the leading and well-reputed tour operators in Pakistan. We have quite fascinating and experience team to memorable your tour with us. We are offering a wide range of tour itineraries relating to sheer adventure, Exquisite culture, Mystical tours, Study tours, Hunting tours,Jeep Safari tours, Expeditions tours, Special Interest tours, Festival tours and Historical tours all around the country.',
    buttonLabel: 'Get started',
    imgStart: false,
    dark: true,
    primary: true,
    darkText: false
}


const Aboutpage = ({
    lightBg,
    lightText,
    id,
    imgStart,
    headline,
    topLine,
    description,
    darkText
}) => {
    useEffect(() => {
        Aos.init({ duration:3000 });
    }, [])
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}> 
                    <Column1>
                    <TextWrapper data-aos = "zoom-in">
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText = {lightText}>{headline}</Heading>
                        <Subtitle darkText = {darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap data-aos = "zoom-in" >
                    <Img src = {img1} alt = ''/>
                    </ImgWrap>
                    </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Aboutpage
