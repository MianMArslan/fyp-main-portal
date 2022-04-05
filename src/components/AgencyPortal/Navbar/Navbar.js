import React from "react";
import './Navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import img1 from '../../images/off the beaten track.png'
import img2 from "../../images/img4.jpg";

export default function NavbarAgency(){

    return(
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navleft">
                    <img src = {img1} className="navbarAvater"></img>
                </div>
                <div className="navright">
                    <div className="navbarIconContainer">
                    <NotificationsNoneIcon />
                    <span className="navbarBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                    <LanguageIcon />
                    <span className="navbarBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                    <SettingsIcon />
                    </div>
                    <img src = {img2} className="navAvater"></img>
                </div>
            </div>
        </div>
    )
}