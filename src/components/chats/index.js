import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { Helmet } from 'react-helmet';
import Sidebar_bg_light from './sidebar_bg_light';
import Main_chats from './main_chat';
import More from './more';
import MediaPreview from './media_preview';
import Loading from '../loading'
import jQuery from 'jquery';

const Chats = () => {
    const [componentsReady, setComponentsReady] = useState(false);

    useEffect(() => {
        jQuery(document).ready(() => {
            console.log('jQuery is ready to use');

            // Dynamically create script elements and append them to the body
            const vendorScript = document.createElement('script');
            vendorScript.src = './assets/js/vendor.js';
            vendorScript.type = 'text/javascript';
            document.body.appendChild(vendorScript);

            const templateScript = document.createElement('script');
            templateScript.src = './assets/js/template.js';
            templateScript.type = 'text/javascript';
            document.body.appendChild(templateScript);
        });


        const navbarReady = true;
        const sidebarReady = true;
        const mainChatsReady = true;

        if (navbarReady && sidebarReady && mainChatsReady) {
            setComponentsReady(true);
        }
    }, []);

    return (
        <>
            {!componentsReady ? (
                <Loading />
            ) : (
                <>
                    <div className='layout overflow-hidden position-absolute w-100'>
                        <Navbar />
                        <Sidebar_bg_light />
                        <Main_chats />
                        <More />
                    </div>
                    <MediaPreview/>
                </>
            )}
        </>
    );
};

export default Chats;
