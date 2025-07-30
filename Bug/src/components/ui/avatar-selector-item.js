import React from 'react'

export const AvatarSelectorItem = ({ avatar }) => {
    return (
        <>
            <div className='b-avatar-selector__item'>
                <img lazy="loaded" src={avatar}  alt=''/>
            </div>
        </>
    )
}
