import React, { useState } from 'react'
import { Post } from '../ui/menu/post';

const Header = ({ isAtTop }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf'

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
                                <i className="mhy-icon icon-bug" style={{ fontSize: 35 }}></i>
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
                            <div className='mhy-search-bar'>
                                <form>
                                    <div className='mhy-search-bar__input'>
                                        <label className='mhy-autocomplete__label' style={{ overflow: 'visible' }}>
                                            <div className='mhy-autocomplete'>
                                                <div className='mhy-autocomplete__wrp'>
                                                    <input type='text' className='mhy-autocomplete__input' />
                                                    <div className='mhy-autocomplete__clear' style={{ display: 'none' }}></div>
                                                </div>
                                            </div>
                                        </label>
                                        <i className="mhy-icon icon-search icon-magnifying-glass" role="button"></i>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='header__right'>
                            <div
                                className={`header-item header-post ${hoveredIndex === 1 ? 'header-item--active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div role='button' title='Post now~' className='header-item__button'>
                                    <div className='header-item__icon'>
                                        <i className='mhy-icon icon-pen'></i>
                                    </div>
                                </div>
                                <Post/>
                            </div>
                            <div
                                className={`header-item header-notification ${hoveredIndex === 2 ? 'header-item--active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span data-count="59" className='header-notification__num'></span>
                                <div role='button' title='Message Notifications' className='header-item__button'>
                                    <div className='header-item__icon'>
                                        <i className='mhy-icon icon-bell'></i>
                                    </div>
                                </div>
                            </div>
                            <div className='header-item header-account'>
                                <div className='header-avatar'>
                                    <div className='mhy-avatar mhy-avatar__l4'>
                                        <img src={imgSrc} className='mhy-avatar__img' alt='' />

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