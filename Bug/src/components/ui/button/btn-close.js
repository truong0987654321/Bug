import React from 'react'

export const BtnClose = ({ onclose }) => {
    return (
        <>
            <div className='b-button b-dialog__close b-button-default b-button-md'>
                <button type='button' className='b-button__button' onClick={onclose}>
                    <i className='b-icon icon-xmark'></i>
                </button>
            </div>
        </>
    )
}
