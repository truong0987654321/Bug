import React from 'react'

export const ItermBackground = ({ bg }) => {
    return (
        <>
            <div className='account-center-float__item--wrap'>
                <div className='account-center-float__item--bg'>
                    <div className='b-gif-to-img'>
                        <div className='b-gif-to-img__container'>
                            <img lazy="loaded" src={bg} className='b-gif-to-img__hide' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
