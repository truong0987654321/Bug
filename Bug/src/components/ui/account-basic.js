import React from 'react'

export const AccountBasic = ({ num, name }) => {
    return (
        <>
            <div className="account-center-basic-item">
                <span className="account-center-basic-num">{num}</span>
                <span className="account-center-basic-name">{name}</span>
                <span className="account-center-basic-split">/</span>
            </div>
        </>
    )
}
