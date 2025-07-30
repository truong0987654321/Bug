import React from 'react';
const Navbar = ({ currentUser, unreadCount }) => {

    return (
        <nav className='navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar'>
            <a href='/' className='d-none d-xl-block mb-6'>
                <i className='icon-logo' style={{ fontSize: 46 }}></i>
            </a>
            <ul className='d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3'>
                <li className='nav-item d-none d-xl-block invisible flex-xl-grow-1'></li>
                <li className='nav-item'>
                    <a className="nav-link py-0 py-lg-8" id="tab-create-chat" href="#tab-content-create-chat" title="Create chat" data-bs-toggle="tab" role="tab">
                        <div className='icon icon-xl'>
                            <i className='icon-pen'></i>
                        </div>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link py-0 py-lg-8 active" id="tab-chats" href="#tab-content-chats" title="Chats" data-bs-toggle="tab" role="tab">
                        <div className='icon icon-xl icon-badged'>
                            <i className='icon-comment'></i>
                            {unreadCount > 0 && (
                                <div className='badge badge-circle bg-primary'>
                                    <span>{unreadCount}</span>
                                </div>
                            )}
                        </div>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link py-0 py-lg-8" id="tab-settings" href="#tab-content-settings" title="Settings" data-bs-toggle="tab" role="tab">
                        <div className='icon icon-xl'>
                            <i className='icon-gear'></i>
                        </div>
                    </a>
                </li>
                <li className='nav-item d-none d-xl-block'>
                    <a href='/' className='nav-link p-0 mt-lg-2'>
                        <div className='avatar avatar-online mx-auto'>
                            <img className='avatar-img' src={currentUser.avatar} alt='' />
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;