import React from 'react'
import { Link } from 'react-router-dom'
import { NotificationListSM } from './NotificationList/notification-list-SM'
import { Empty } from '../../ui/empty'

export const Notification = () => {
    return (
        <>
            <div className='b-float-dialog header-notification-dialog'>

                <div className='header-notification-dialog__header'>
                    <span className='header-notification-dialog__title'>Message Notifications</span>
                    <div className='header-notification-dialog__clear'>
                        <div role='button' className='header-notification-dialog__clear__box'>
                            <i className='b-icon icon-trash'></i>
                        </div>
                        <Link to="/setting" className='b-router-link b-notification__clear__setting'>
                            <i className='b-icon icon-gear'></i>
                        </Link>
                    </div>
                </div>

                <div className='b-tab notification-tab b-i-tab'>
                    <ul className='b-tab__list' style={{ paddingLeft: 0 }}>
                        <li className='b-tab__item b-tab__item--0'>
                            <div className='notification-tab__item' aria-label="Comments and Mentions">
                                <span className='b-tab__label'>
                                    <i className='b-icon icon-message'></i>
                                </span>
                            </div>
                        </li>
                        <li className='b-tab__item b-tab__item--1'>
                            <div className='notification-tab__item' aria-label="Likes">
                                <span className='b-tab__label'>
                                    <i className='b-icon icon-thumbs-up'></i>
                                </span>
                            </div>
                        </li>
                        <li className='b-tab__item b-tab__item--2'>
                            <div className='notification-tab__item' aria-label="Follow">
                                <span className='b-tab__label'>
                                    <i className='b-icon icon-heart'></i>
                                </span>
                            </div>
                        </li>
                        <li className='b-tab__item b-tab__item--active'>
                            <div className='notification-tab__item' aria-label="System Messages">
                                <span className='b-tab__label'>
                                    <i className='b-icon icon-bell'></i>
                                    <span data-count="52" className='notification-tab__num'></span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='header-notification-dialog__list'>
                    <div className='header-notification-list'>
                        {/* <NotificationListSM /> */}
                        <Empty />
                    </div>
                </div>

                <div className='header-notification-dialog__footer'>
                    <a href='/' className='b-router-link'>View more</a>
                </div>
            </div>
        </>
    )
}
