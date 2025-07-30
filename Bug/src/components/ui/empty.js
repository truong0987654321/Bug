import React from 'react'

export const Empty = () => {
    return (
        <>
            <div className='b-no-data b-no-data-lg'>
                <img src="./assets/img/empty-box.png" className="b-img-icon b-img-placeholder small-size" />
                <p className='b-no-data__text'>There's nothing here...</p>
            </div>
        </>
    )
}
