import React from 'react'
import { Follow } from '../ui/button/follow';
import { Following } from '../ui/button/following';

export const FollowBtn = ({isAtTop}) => {
    return (
        <>
            <div className='b-follow-btn'>
                <div
                    className={isAtTop ? 'user-action-wrapper user-action-wrapper__top' : 'user-action-wrapper'}
                >
                    <div className='b-action'>
                        <div role='button' className='b-action__button'>
                            <i className='b-icon icon-ellipsis'></i>
                        </div>
                    </div>
                </div>
                <div className='b-account-center-header__follow'>
                    <Follow />
                    {/* <Following/> */}
                </div>
            </div>
        </>
    )
}
