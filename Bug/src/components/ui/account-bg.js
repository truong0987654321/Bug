import React from 'react'

export const AccountBg = ({bg}) => {
    return (
        <>
            <div className='bot-layer-bg account-center-bg' style={{ top: "0px" }}>
                <div className='bot-layer-bg__wrapper'>
                    <img lazy="loaded" src={bg} alt='' />
                    <div className='bot-mask account-center-bg-mask'></div>
                </div>
            </div>
        </>
    )
}
