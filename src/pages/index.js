import React, {useState} from 'react';
import SideBar from '../components/component/SideBar';
import Navbar from '../components/component/Navbar';
import Hero from '../components/component/Hero';
import Services from '../components/component/Services';
import Destination from '../components/component/Destinations';
import Deals from '../components/component/Deals';
import Aboutpage from '../components/component/AboutPage';
import { homeObjOne} from '../components/component/AboutPage';
import Footer from '../components/component/footer/footer';
import { homeObjtwo } from '../components/component/Deals';
import { homeObjthree } from '../components/component/Destinations';
import { homeObjfour } from '../components/component/footer/footer';
import { homeObjfive } from '../components/component/Services';
import { homeObjSix } from '../components/component/Hero';





const Home = () => {
    
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => {
    setIsOpen(!isOpen)
    }


    return (
        <>

        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}  />
        <Hero {...homeObjSix}/>
        <Services {...homeObjfive}/>
        <Destination {...homeObjthree}/>
        <Deals {...homeObjtwo}/>
        <Aboutpage {...homeObjOne} />
        <Footer {...homeObjfour}/>  
        </>
    )
    }
export default Home;