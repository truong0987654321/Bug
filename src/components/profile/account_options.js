import React, { useState } from 'react'

export const AccountOptions = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <>
            <div className='account-center-options'>
                <div
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    className='drop-expand'
                >
                    <button className='hyl-button account-center-select-menu normal__stella_primary_dark hyl-button__lg hyl-button-loading__lg'>
                        <span>
                            Edit
                            <i className='mhy-icon icon-caret-down'></i>
                        </span>
                    </button>
                    <div className='mhy-float-dialog' style={{ right: 0, paddingTop: 8, display: hoveredIndex === 0 ? '' : 'none' }}>
                        <ul className='account-center-select-submenu'>
                            <li className='account-center-submenu-item'>
                                Complete personal information
                            </li>
                            <li className='account-center-submenu-item'>
                                Modify background image
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
