import React from 'react'

export const AvatarL1 = ({ avatar }) => {
  return (
    <>
      <div className='b-avatar b-avatar__l1' role="button">
        <img lazy="loaded" src={avatar} className='b-avatar__img' alt=''/>
      </div>
    </>
  )
}
