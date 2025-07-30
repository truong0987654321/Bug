import React from 'react'
import { BtnNext } from './button/btn_next'
import { BtnPrev } from './button/btn_prev'

export const SwitchTab = () => {
    return (
        <>
            <div className='b-switch-tab'>
                <BtnNext />
                <ul className='b-switch-tab__list' style={{ marginBottom: 0 }}>
                    <li className='b-switch-tab__tag b-switch-tab__tag--active'>
                        <span className='b-switch-tab__label'>All</span>
                    </li>
                    <li className='b-switch-tab__tag'>
                        <span className='b-switch-tab__label'>???</span>
                    </li>
                </ul>
                <BtnPrev />
            </div>
        </>
    )
}
