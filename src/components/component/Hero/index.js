import React, {useEffect} from 'react'
import Video from '../videos/video.mp4';
import Aos from 'aos'
import "aos/dist/aos.css"
import { HeroContainer, 
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements';

export const homeObjSix = {
    id:'home'
}

const HeroElements = ({id}) => {
        useEffect(() => {
            Aos.init({ duration:4000 });
        }, [])
    return (
        <HeroContainer id = {id}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
            </HeroBg>
            <HeroContent data-aos = 'zoom-in'>
                <HeroH1>Explore with</HeroH1>
                <HeroP>OFF THE BEATEN TRACK</HeroP>
            </HeroContent>
            
        </HeroContainer>
    )
}
export default HeroElements;
