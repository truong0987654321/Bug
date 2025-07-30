import React, { useEffect, useState } from 'react'
import { Post } from './post';
import { Notification } from './notification/notification';
import { useNavigate } from 'react-router-dom';
import { useAppstore } from '../../store';

const Header = ({ isAtTop }) => {
    const navigate = useNavigate();
    const { userInfo } = useAppstore();
    const [img, setImg] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const firstCharacter = userInfo.username
        ? userInfo.username.charAt(0).toUpperCase()
        : userInfo.email.charAt(0).toUpperCase();
    useEffect(() => {
        setImg(userInfo.img)
    }, [userInfo]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const handle = () => {
        navigate("/profile")
    }

    return (
        <>
            <div
                className={isAtTop ? 'header' : 'header header--transparent'}
            >
                <div
                    className={isAtTop ? 'header__wrp' : 'header__wrp header__wrp--transparent'}
                >
                    <div className='header__inner'>
                        <div className='header__left'>
                            <div className='header__logo'>
                                <i className="b-icon icon-bug" style={{ fontSize: 35 }}></i>
                            </div>
                            <div className="header-tab-wrapper">
                                <div
                                    className='header-tab'
                                    onMouseEnter={() => handleMouseEnter(0)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <p className="header-tab-name ">Home</p>
                                    <div
                                        className={`header-tab__underline ${hoveredIndex === 0 ? 'header-tab__underline--active' : ''}`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className='header__main'>
                            <div className='b-search-bar'>
                                <form>
                                    <div className='b-search-bar__input'>
                                        <label className='b-autocomplete__label' style={{ overflow: 'visible' }}>
                                            <div className='b-autocomplete'>
                                                <div className='b-autocomplete__wrp'>
                                                    <input type='text' className='b-autocomplete__input' />
                                                    <div className='b-autocomplete__clear' style={{ display: 'none' }}></div>
                                                </div>
                                            </div>
                                        </label>
                                        <i className="b-icon icon-search icon-magnifying-glass" role="button"></i>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='header__right'>
                            <div
                                className={`header-item header-post ${hoveredIndex === 1 ? 'header-item--active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(1)}
                            >
                                <div
                                    role='button'
                                    title='Post now~' className='header-item__button'

                                >
                                    <div className='header-item__icon'>
                                        <i className='b-icon i-pen icon-pen'></i>
                                    </div>
                                </div>

                                {hoveredIndex === 1 &&
                                    (
                                        <div
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Post />
                                        </div>
                                    )
                                }
                            </div>
                            <div
                                className={`header-item header-notification ${hoveredIndex === 2 ? 'header-item--active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(2)}

                            >
                                <span data-count="59" className='header-notification__num'></span>
                                <div role='button' title='Message Notifications' className='header-item__button'>
                                    <div className='header-item__icon'>
                                        <i className='b-icon i-bell icon-bell'></i>
                                    </div>
                                </div>

                                <div
                                    style={{ display: hoveredIndex === 2 ? '' : 'none' }}
                                    onMouseLeave={handleMouseLeave}
                                >

                                    <Notification />
                                </div>
                            </div>
                            <div className='header-item header-account'>
                                <div className='header-avatar' onClick={handle}>
                                    <div className='b-avatar b-avatar__l4'>
                                        {img ? (
                                            <img src={img} className='b-avatar__img' alt='' />

                                        ) : (
                                            <div className='b-avatar__img' role='button'
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: 24,
                                                    background: 'var(--bug-default-color-brand-p2)',
                                                    border: '1px solid var(--bug-default-color-brand-p5)',
                                                    borderRadius: '50%',
                                                    color: 'var(--bug-default-color-brand-p5)'
                                                }}
                                            >
                                                {firstCharacter}
                                            </div>
                                        )}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header