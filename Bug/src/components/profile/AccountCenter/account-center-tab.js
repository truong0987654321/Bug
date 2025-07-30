import React from 'react'

export const AccountCenterTab = ({ isAtTop }) => {
    return (
        <>
            <div
                className={isAtTop ? 'b-page-header b-account-center-tab b-page-header--fixed b-page-header--top b-page-header-md b-page-header-block' : 'b-page-header b-account-center-tab b-page-header-md b-page-header-block'}
            >
                <div className='b-page-header-mask' style={{ width: isAtTop ? '848px' : '', top: isAtTop ? '116px' : '' }}>
                    <div className='b-page-header-wrp'>
                        <div className='b-page-header-content line'>
                            <div className='b-switch-tab'>
                                <ul className='b-switch-tab__list'>
                                    <li className='b-switch-tab__tag b-switch-tab__tag--active'>
                                        <span className='b-switch-tab__label'>
                                            <span>Posts</span>
                                        </span>
                                        <span className='b-switch-tab__line'></span>
                                    </li>
                                    <li className='b-switch-tab__tag'>
                                        <span className='b-switch-tab__label'>
                                            <span>Comments</span>
                                        </span>
                                    </li>
                                    <li className='b-switch-tab__tag'>
                                        <span className='b-switch-tab__label'>
                                            <span>Favorites</span>
                                        </span>
                                    </li>
                                    <li className='b-switch-tab__tag'>
                                        <span className='b-switch-tab__label'>
                                            <span>Topics</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
