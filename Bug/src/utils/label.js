import React from 'react';

// Tạo Provider để chia sẻ dữ liệu
export const LabelDisplay = ({ ariaLabel, top, left }) => {
    return (
        <div className='mhy-tooltip-layer'>
            {/* Hiển thị giá trị của aria-label nếu có */}
            {ariaLabel && (
                <>
                    <div
                        className="mhy-tooltip-block mhy-tooltip-block--bottom account-center-desc__tt"
                        style={{ top: `${top}px`, left: `${left}px`, position: 'absolute' }} // Thiết lập top và left
                    >
                        <div className="mhy-tooltip-block__txt">{ariaLabel}</div>
                    </div>
                    <div
                        className="mhy-tooltip-block__arrow mhy-tooltip-block__arrow--bottom"
                        style={{ top: `${top + 3}px`, left: `${left}px`, position: 'absolute' }} // Thiết lập top và left cho mũi tên
                    ></div>
                </>
            )}
        </div>
    );
};
