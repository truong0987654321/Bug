import React from 'react';
import Navbar from './components/chats/navbar';
import Sidebar_bg_light from './components/chats/sidebar_bg_light';
import Main_chats from './components/chats/main_chat';

function App() {
    return (
        <div className='layout overflow-hidden'>
            <Navbar />
            <Sidebar_bg_light />
            <Main_chats/>
        </div>
    )
}

export default App;  