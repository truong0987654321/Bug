import React, { useEffect, useRef, useState } from 'react'

export const AccountCenterTitle = () => {
    const myRef = useRef(null); // Tham chiếu đến thẻ
    const [isAtTop, setIsAtTop] = useState(false); // Trạng thái theo dõi vị trí của phần tử

    const handleScroll = () => {
        if (myRef.current) {
            const rect = myRef.current.getBoundingClientRect();
            // Nếu top <= 0, đặt trạng thái là true
            if (rect.top <= 70) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        }
    };
    useEffect(() => {
        // Lắng nghe sự kiện scroll của window
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const mask = {
        width: '848px', // Sửa lỗi chính tả từ 'with' thành 'width'
        top: '60px',
        position: 'fixed',
        zIndex: 200,
    };
    return (
        <>
            <div
                className="b-page-header b-account-center-main-header b-page-header-md b-page-header-block"
                ref={myRef}>
                <div className="b-page-header-mask" style={isAtTop ? mask : {}} >
                    <div className="b-page-header-wrp" style={{ borderRadius: isAtTop ? '0' : '' }}>
                        <div className="b-page-header-content line">
                            <div className="b-page-header-main">
                                <div className="b-page-header__left">
                                    <h1 title="Complete personal information" className="b-page-header__title">Complete personal information</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
