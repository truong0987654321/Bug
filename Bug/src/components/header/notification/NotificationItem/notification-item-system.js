import React from 'react'

export const NotificationItemSystem = () => {
    return (
        <>
            <div className='header-notification-list__item b-notification-system-card pointer'>
                <div className='b-system-icon' style={{ background: "#e1e7ff" }}>
                    <i className='b-icon icon-bell' style={{ color: "var(--bug-default-color-brand-p5)" }}></i>
                </div>
                <div className='header-notification-list__content'>
                    <div className='header-notification-list__header'>
                        <span className='header-notification-list__title'>System Notification</span>
                    </div>
                    <div className='header-notification-list__content__body'>
                        <div className='header-notification-list__text'>
                            <span className='header-notification-list__text__message'>No new notifications</span>
                        </div>
                    </div>
                </div>
                <span data-count="New" className='header-notification__num'></span>
            </div>
        </>
    )
}
