import React from 'react';
import { ContainerSidebar, SidebarContent } from './styles';



const Sidebar: React.FC = () => {
    return(
        <ContainerSidebar>
            <SidebarContent>
                <img className='imagem' src='https://lh3.googleusercontent.com/a-/AOh14GiW4Cz0I3Ue735igiPvteyvK7cNwCQEEK2MTJ58Uw=s360-p-rw-no'/>

                <h1>Everton Carvalho</h1>
                <p>Front end Developer</p>
                <div className='icons'>
                    <div className='iconColor'></div>
                    <div className='iconColor'></div>
                    <div className='iconColor'></div>
                    <div className='iconColor'></div>
                    <div className='iconColor'></div>
                    <div className='iconColor'></div>
                </div>
            </SidebarContent>
        </ContainerSidebar>
    )
}

export default Sidebar;