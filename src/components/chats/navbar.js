import React from 'react';
import SvgIcon from '../../svg/SvgIcon';

const navbar = () => {
    return (
        <nav c="true" className='navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar'>
            <a href='#' className='d-none d-xl-block mb-6'>

                <SvgIcon name="bug-solid_logo" className="logo" />
            </a>
            <ul cl="true" className='d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3'>
                <li className='nav-item d-none d-xl-block invisible flex-xl-grow-1'></li>
                <li className='nav-item'>
                    <a className='nav-link py-0 py-lg-8'>
                        <div className='icon icon-xl'>
                            <SvgIcon name="pen-solid" className="pen" />
                        </div>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link py-0 py-lg-8'>
                        <div className='icon icon-xl icon-badged'>
                            <SvgIcon name="comment-solid" className="comment" />
                            <div className='badge badge-circle bg-primary'>
                                <span>4</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link py-0 py-lg-8'>
                        <div className='icon icon-xl'>
                            <SvgIcon name="gear-solid" className="gear" />
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default navbar;