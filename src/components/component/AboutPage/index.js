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
