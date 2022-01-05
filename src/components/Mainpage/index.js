import React from "react";
import img1 from "../images/off the beaten track.png";
import { MainpageContainer } from "./MainpageElements";
//import { MainpageContainer } from "./MainpageElements";
const styles = {
    container: {
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};
const Mainpage = () => {
    return (
        <>
        <MainpageContainer>
               <img src={img1} alt = " " style = {styles.container}/>
        </MainpageContainer>
            
          </>  
    )
}

export default Mainpage;

/*<BtnWrap>
                        <Button to = 'home'/>
                    </BtnWrap>*/