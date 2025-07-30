import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AccountOptions = ({ onClick }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleClick = () => {
        navigate('/edit'); // Điều hướng đến đường dẫn /complete-info
    };
    return (
        <>
            <div className='account-center-options'>
                <div
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    className='drop-expand'
                >
                    <button className='bug-button account-center-select-menu normal__stella_primary_dark bug-button__lg bug-button-loading__lg'>
                        <span>
                            Edit
                            <i className='b-icon icon-caret-down'></i>
                        </span>
                    </button>
                    <div className='b-float-dialog' style={{ right: 0, paddingTop: 8, display: hoveredIndex === 0 ? '' : 'none' }}>
                        <ul className='account-center-select-submenu'>
                            <li className='account-center-submenu-item' onClick={handleClick}>
                                Complete personal information
                            </li>
                            <li onClick={onClick} className='account-center-submenu-item'>
                                Modify background image
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
