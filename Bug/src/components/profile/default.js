import React, { useRef, useState } from 'react'
import { AccountBasic } from '../ui/account-basic'
import { AccountOptions } from './account-options'
import { LabelDisplay } from '../../utils/label';
import { useAppstore } from '../../store';

export const Default = ({ isAtTop, username, avatar, ariaLabel, oneditbg }) => {
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

    const firstCharacter = username
        ? username.charAt(0).toUpperCase()
        : userInfo.email.charAt(0).toUpperCase();

    const topbarStyle = {
        position: isAtTop ? 'fixed' : 'relative', // Thay đổi position khi isAtTop
        top: isAtTop ? '60px' : 'auto',
        height: isAtTop ? '56px' : 'auto',        // Thay đổi height khi isAtTop
        opacity: 1,
        display: 'block', // Luôn hiển thị
    };
    return (
        <>
            <div className='default-layout-topbar'>
                <div
                    className='b-topbar--wrap'
                    style={{ height: isAtTop ? 56 : 'auto' }}
                >
                    <div className='b-topbar' style={topbarStyle}>
                        <div className='b-topbar__container'>
                            <div
                                className={isAtTop ? 'account-center-topbar__container account-center-topbar--fixed' : 'account-center-topbar__container'}
                            >
                                <div className='account-center-avatar-wrap'>
                                    <div
                                        className={isAtTop ? 'b-avatar account-center-avatar b-avatar__l5' : 'b-avatar account-center-avatar b-avatar__l1'}
                                    >
                                        {avatar ? (
                                            <img lazy="loaded" src={avatar} className='b-avatar__img' alt='' />
                                        ) : (
                                            <div className='b-avatar__img f-40' role='button'
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
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
                                <div className='account-center-user-wrap'>
                                    <div className='account-center-basic-rows account-center-basic-rows--top'>
                                        <div className='account-center-basic--row1'>
                                            <span className='user-basic-nickname'>
                                                {username}
                                            </span>
                                        </div>
                                        <div className='account-center-basic--row2'>
                                            <i className='b-icon icon-envelope-regular'></i>
                                            <p
                                                ref={targetRef} // Sử dụng ref để tham chiếu đến thẻ này
                                                onMouseEnter={handleMouseEnter} // Khi hover vào
                                                onMouseLeave={handleMouseLeave} // Khi rời khỏi
                                                aria-label={ariaLabel}
                                            >
                                                {ariaLabel}

                                            </p>

                                        </div>
                                    </div>
                                    <div className='account-center-basic-rows account-center-basic-rows--bottom'>
                                        <AccountBasic num={0} name={'Post'} />
                                        <AccountBasic num={0} name={'Following'} />
                                        <AccountBasic num={0} name={'Followers'} />
                                        <AccountBasic num={0} name={'Likes'} />
                                    </div>
                                </div>
                                <div
                                    className={isAtTop ? 'account-center-btn-group account-center-btn-group__top' : 'account-center-btn-group'}
                                >
                                    {!isAtTop && <AccountOptions onClick={oneditbg} />}
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
