import React from 'react'
import { SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SideBarElements'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
                </Icon> 
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to = 'home' onClick={toggle}>HOME</SidebarLink>
                        <SidebarLink to = 'about' onClick={toggle}>ABOUT</SidebarLink>
                        <SidebarLink to = 'services' onClick={toggle}>SERVICES</SidebarLink>
                        <SidebarLink to = 'destination' onClick={toggle}>DESTINATION</SidebarLink>
                        <SidebarLink to = 'deals' onClick={toggle}>DEALS</SidebarLink>
                        <SidebarLink to = 'contact' onClick={toggle}>CONTACT</SidebarLink>

                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to = '/login' onClick={toggle}>LOG IN</SidebarRoute>
                    </SideBtnWrap>
                    <SideBtnWrap>
                        <SidebarRoute to = '/signup' onClick={toggle}>SIGN UP</SidebarRoute>
                    </SideBtnWrap>

                </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
