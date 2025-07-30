import React from 'react'
import { ItermBackground } from '../ui/iterm-background'
import { Choose } from '../ui/choose'
import { BtnClose } from '../ui/button/btn-close'
import { SwitchTab } from '../ui/switch-tab'
import { Button } from '../ui/button/button'

export const EditBackground = ({ bg, avatar, onclose }) => {
    return (
        <>
            <div className='account-center-float    '>
                <div className='account-center-float__wrap'>
                    <div className='account-center-float__container'>
                        <div className='account-center-float__header--wrap' style={{ backgroundImage: `url(${bg})` }}>
                            <div className='account-center-float__header'>
                                <div className='account-center-float__title'>Modify background image</div>
                                <BtnClose onclose={onclose} />
                            </div>

                            <div className='account-center-float__user--wrap'>
                                <div className='b-avatar b-avatar__l2'>
                                    <img lazy="loaded" src={avatar} className='b-avatar__img' alt='' />
                                </div>
                            </div>
                        </div>

                        <div className="split-line"></div>

                        <div className='account-center-float__content'>
                            <SwitchTab />

                            <div className='account-center-float__list--wrap' style={{ paddingBottom: 60 }}>
                                <ul className='account-center-float__list' style={{ paddingLeft: 0 }}>
                                    <li className='account-center-float__item account-center-float__item--active'>
                                        <ItermBackground bg={bg} />
                                        <Choose />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                    <li className='account-center-float__item'>
                                        <ItermBackground bg={bg} />
                                    </li>
                                </ul>
                            </div>

                            <div className='account-center-float__footer'>
                                <div className='editor-bottom-bar'>
                                    <div className='editor-bottom-bar__content'>
                                        <div className='editor-bottom-bar__btn--wrap'>
                                            <Button
                                                label="User"
                                                onClick={null}
                                                className="btnLgPrimary"
                                            />
                                            {/* <Button
                                                label="Already Used"
                                                onClick={null}
                                                className="btnDisabled"
                                            /> */}
                                        </div>
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
