import React from 'react'
import { Follow } from '../ui/button/follow';
import { Following } from '../ui/button/following';

export const FollowBtn = ({isAtTop}) => {
    return (
        <>
            <div className='mhy-follow-btn'>
                <div
                    className={isAtTop ? 'user-action-wrapper user-action-wrapper__top' : 'user-action-wrapper'}
                >
                    <div className='mhy-action'>
                        <div role='button' className='mhy-action__button'>
                            <i className='mhy-icon icon-ellipsis'></i>
                        </div>
                    </div>
                </div>
                <div className='mhy-account-center-header__follow'>
                    <Follow />
                    {/* <Following/> */}
                </div>
            </div>
        </>
    )
}
