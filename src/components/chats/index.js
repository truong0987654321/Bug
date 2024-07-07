import React from 'react';
import Navbar from './navbar';
import { Helmet } from 'react-helmet';
import Sidebar_bg_light from './sidebar_bg_light';
import Main_chats from './main_chat';

const Chats = () => {

    return (
        <>

            <div className='layout overflow-hidden'>
                <Navbar />
                <Sidebar_bg_light />
                <Main_chats />

            </div>
        </>

    );
};
export default Chats;