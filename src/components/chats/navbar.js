import React from 'react';
import SvgIcon from '../../svg/svg_icon';

const Navbar = () => {

    return (
        <nav c="true" className='navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar'>
            <a href='#' className='d-none d-xl-block mb-6'>
                <SvgIcon name="bug-solid_logo" className="logo" />
            </a>
            <ul cl="true" className='d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3'>
                <li className='nav-item d-none d-xl-block invisible flex-xl-grow-1'></li>
                <li className='nav-item'>
                    <a className="nav-link py-0 py-lg-8" id="tab-create-chat" href="#tab-content-create-chat" title="Create chat" data-bs-toggle="tab" role="tab">
                        <div className='icon icon-xl'>
                            <SvgIcon name="pen-solid" className="pen" />
                        </div>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link py-0 py-lg-8 active" id="tab-chats" href="#tab-content-chats" title="Chats" data-bs-toggle="tab" role="tab">
                        <div className='icon icon-xl icon-badged'>
                            <SvgIcon name="comment-solid" className="comment" />
                            <div className='badge badge-circle bg-primary'>
                                <span>4</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="nav-link py-0 py-lg-8" id="tab-settings" href="#tab-content-settings" title="Settings" data-bs-toggle="tab" role="tab">
                        <div className='icon icon-xl'>
                            <SvgIcon name="gear-solid" className="gear" />
                        </div>
                    </a>
                </li>
                <li className='nav-item d-none d-xl-block'>
                    <a href='#' className='nav-link p-0 mt-lg-2'>
                        <div className='avatar avatar-online mx-auto'>
                            <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf' />
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;