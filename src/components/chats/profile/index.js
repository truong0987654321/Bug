import React, { useState } from 'react'
import { useAppstore } from '../../../store'
import { Helmet } from 'react-helmet';

const Profile = () => {
    const { userInfo } = useAppstore();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Hàm kích hoạt khi rời khỏi phần tử
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <Helmet>
                <title>Profile | Bug</title>
            </Helmet>
            {/* <div>Profile
                <div>Email:{userInfo.id}</div>
            </div> */}
            <div className='root hyl-group-b'>
                <div className='header header--transparent'>
                    <div className='header__wrp header__wrp--transparent'>
                        <div className='header__inner'>
                            <div className='header__left'>
                                <div className='header__logo'>
                                    <i className="icon-bug"></i>
                                </div>
                                <div className="header-tab-wrapper">
                                    <div className='header-tab'
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <p className="header-tab-name ">Trang Chủ</p>
                                        <div className={`header-tab__underline ${isHovered ? 'header-tab__underline--active' : ''}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='header__main'>
                                <div className='mhy-search-bar'>
                                    <form>
                                        <div className='mhy-search-bar__input'>
                                            <div className='mhy-search-bar__sieve'>
                                                <label className='mhy-autocomplete__label'>
                                                </label>
                                                <i className="icon-magnifying-glass"></i>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bot-layer-bg account-center-bg' style={{ top: "0px" }}>
                    <div className='bot-layer-bg__wrapper'>
                        <img src='https://hoyolab-upload.hoyolab.com/upload/2022/07/22/86187a81ca71277f9c657c21469b733b_5465989353755595706.png?x-oss-process=image%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70' alt='' />
                        <div className='bot-mask account-center-bg-mask'></div>
                    </div>
                </div>
                <div className='root-page-container'>
                    <div className='default-layout-topbar'>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Profile