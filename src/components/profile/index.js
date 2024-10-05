import React, { useEffect, useRef, useState } from 'react'
import { useAppstore } from '../../store'
import { Helmet } from 'react-helmet';
import Header from '../header';
import { LabelDisplay } from '../../utils/label';

import { FollowBtn } from './follow_btn';
import { AccountOptions } from './account_options';

const Profile = () => {
    const { userInfo } = useAppstore();

    const [isHovering, setIsHovering] = useState(false); // Trạng thái hover
    const [position, setPosition] = useState({ top: 0, left: 0 }); // Vị trí của thẻ p
    const targetRef = useRef(null); // Tham chiếu đến thẻ p

    const handleMouseEnter = () => {
        setIsHovering(true);
        const rect = targetRef.current.getBoundingClientRect(); // Lấy vị trí của thẻ p
        setPosition({ top: rect.bottom, left: rect.left + (rect.width / 2) }); // Cập nhật vị trí, để tooltip nằm giữa
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf'
    const ariaLabel = 'trongtruong@gmail.com';


    const myRef = useRef(null); // Tham chiếu đến thẻ
    const [isAtTop, setIsAtTop] = useState(false); // Trạng thái theo dõi vị trí của phần tử

    const handleScroll = () => {
        if (myRef.current) {
            const rect = myRef.current.getBoundingClientRect();
            // Nếu top <= 0, đặt trạng thái là true
            if (rect.top <= 70) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        }
    };

    useEffect(() => {
        // Lắng nghe sự kiện scroll của window
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const topbarStyle = {
        position: isAtTop ? 'fixed' : 'relative', // Thay đổi position khi isAtTop
        top: isAtTop ? '60px' : 'auto',
        height: isAtTop ? '56px' : 'auto',        // Thay đổi height khi isAtTop
        opacity: 1,
        display: 'block', // Luôn hiển thị
    };
    return (
        <>
            <Helmet>
                <title>Profile | Bug</title>
                <link rel="stylesheet" href="./assets/css/profile.css" />
            </Helmet>
            {/* <div>Profile
                <div>Email:{userInfo.id}</div>
            </div> */}
            <div className='root hyl-group-b'>

                <Header isAtTop={isAtTop} />

                <div className='bot-layer-bg account-center-bg' style={{ top: "0px" }}>
                    <div className='bot-layer-bg__wrapper'>
                        <img lazy="loaded" src='https://hoyolab-upload.hoyolab.com/upload/2022/07/22/86187a81ca71277f9c657c21469b733b_5465989353755595706.png?x-oss-process=image%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70' alt='' />
                        <div className='bot-mask account-center-bg-mask'></div>
                    </div>
                </div>
                <div
                    ref={myRef}
                    className='root-page-container'>
                    <div className='default-layout-topbar'>
                        <div className='mhy-topbar--wrap'
                            style={{ height: isAtTop ? 56 : 'auto' }}
                        >
                            <div className='mhy-topbar' style={topbarStyle}>
                                <div className='mhy-topbar__container'>
                                    <div
                                        className={isAtTop ? 'account-center-topbar__container account-center-topbar--fixed' : 'account-center-topbar__container'}
                                    >
                                        <div className='account-center-avatar-wrap'>
                                            <div
                                                className={isAtTop ? 'mhy-avatar account-center-avatar mhy-avatar__l5' : 'mhy-avatar account-center-avatar mhy-avatar__l1'}
                                            >
                                                <img lazy="loaded" src={imgSrc} className='mhy-avatar__img' alt='' />
                                            </div>
                                        </div>
                                        <div className='account-center-user-wrap'>
                                            <div className='account-center-basic-rows account-center-basic-rows--top'>
                                                <div className='account-center-basic--row1'>
                                                    <span className='user-basic-nickname'>
                                                        dark meo
                                                    </span>
                                                </div>
                                                <div className='account-center-basic--row2'>
                                                    <i className='mhy-icon icon-envelope-regular'></i>
                                                    <p
                                                        ref={targetRef} // Sử dụng ref để tham chiếu đến thẻ này
                                                        onMouseEnter={handleMouseEnter} // Khi hover vào
                                                        onMouseLeave={handleMouseLeave} // Khi rời khỏi
                                                        aria-label={ariaLabel}>
                                                        {ariaLabel}

                                                    </p>

                                                </div>
                                            </div>
                                            <div className='account-center-basic-rows account-center-basic-rows--bottom'>
                                                <div className="account-center-basic-item">
                                                    <span className="account-center-basic-num">0</span>
                                                    <span className="account-center-basic-name">Posts</span>
                                                    <span className="account-center-basic-split">/</span>
                                                </div>
                                                <div className="account-center-basic-item">
                                                    <span className="account-center-basic-num">0</span>
                                                    <span className="account-center-basic-name">Following</span>
                                                    <span className="account-center-basic-split">/</span>
                                                </div>
                                                <div className="account-center-basic-item">
                                                    <span className="account-center-basic-num">0</span>
                                                    <span className="account-center-basic-name">Followers</span>
                                                    <span className="account-center-basic-split">/</span>
                                                </div>
                                                <div className="account-center-basic-item">
                                                    <span className="account-center-basic-num">0</span>
                                                    <span className="account-center-basic-name">Likes</span>
                                                    <span className="account-center-basic-split">/</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={isAtTop ? 'account-center-btn-group account-center-btn-group__top' : 'account-center-btn-group'}
                                        >
                                            {/* <FollowBtn isAtTop={isAtTop}/> */}
                                            {!isAtTop && <AccountOptions />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='root-page-container__content'>
                        <div className='root-page-container__left root-page-container__left--bg'>
                            <div className='mhy-layout mhy-account-center'>
                                <div className='mhy-main-page mhy-layout__main'>
                                    <div
                                        className={isAtTop ? 'mhy-page-header mhy-account-center-tab mhy-page-header--fixed mhy-page-header--top mhy-page-header-md mhy-page-header-block' : 'mhy-page-header mhy-account-center-tab mhy-page-header-md mhy-page-header-block'}
                                    >
                                        <div className='mhy-page-header-mask' style={{ width: isAtTop ? '848px' : '', top: isAtTop ? '116px' : '' }}>
                                            <div className='mhy-page-header-wrp'>
                                                <div className='mhy-page-header-content line'>
                                                    <div className='mhy-switch-tab'>
                                                        <ul className='mhy-switch-tab__list'>
                                                            <li className='mhy-switch-tab__tag mhy-switch-tab__tag--active'>
                                                                <span className='mhy-switch-tab__label'>
                                                                    <span>Posts</span>
                                                                </span>
                                                                <span className='mhy-switch-tab__line'></span>
                                                            </li>
                                                            <li className='mhy-switch-tab__tag'>
                                                                <span className='mhy-switch-tab__label'>
                                                                    <span>Comments</span>
                                                                </span>
                                                            </li>
                                                            <li className='mhy-switch-tab__tag'>
                                                                <span className='mhy-switch-tab__label'>
                                                                    <span>Favorites</span>
                                                                </span>
                                                            </li>
                                                            <li className='mhy-switch-tab__tag'>
                                                                <span className='mhy-switch-tab__label'>
                                                                    <span>Topics</span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mhy-account-center-content'>
                                        <div className='mhy-account-center-main-content mhy-account-center-post-list'>
                                            <div className='mhy-no-data mhy-no-data-lg'>
                                                <img src="./assets/img/empty_box.png" className="mhy-img-icon mhy-img-placeholder small-size" />
                                                <p className='mhy-no-data__text'>There's nothing here...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isHovering && (
                <LabelDisplay ariaLabel={ariaLabel} top={position.top} left={position.left} />
            )}
        </>

    )
}

export default Profile