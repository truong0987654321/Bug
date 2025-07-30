import React, { useEffect, useState } from 'react'
import { BtnClose } from '../../ui/button/btn-close'
import { SwitchTab } from '../../ui/switch-tab';
import { AvatarL1 } from '../../ui/avatar-l1';
import { AvatarSelectorItem } from '../../ui/avatar-selector-item';
import { Button } from '../../ui/button/button';

export const AccountAenterEdit = ({ saveChanges, initialAvatar, avatar, username, setUserName, gender, setGender, apiData }) => {
    const [isVisible, setIsVisible] = useState(false); // Dialog is hidden by default
    const [inputLength, setInputLength] = useState(0);
    const [isOverLimit, setIsOverLimit] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State để quản lý việc hiển thị menu
    const [selectedValue, setSelectedValue] = useState('Prefer not to say'); // Giá trị được chọn
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        if (apiData && apiData.success) {
            // Lấy danh sách URL từ apiData
            const urls = apiData.data.map(item => item.url);
            setAvatars(urls); // Lưu các URL vào state avatars
        }
    }, [apiData]);


    const maxLength = 20;
    const genderOptions = {
        Male: 'male',
        Female: 'female',
        Other: 'other',
        'Prefer not to say': 'secret',
    };


    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev); // Chuyển đổi trạng thái hiển thị của menu
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const lengthValue = value.length;
        setUserName(value);

        // Kiểm tra chiều dài và cập nhật độ dài
        if (lengthValue > maxLength) {
            setIsOverLimit(true); // Đánh dấu là vượt quá giới hạn
        } else {
            setIsOverLimit(false); // Không vượt quá giới hạn
        }
        if (username === null && username === '') {
            setInputLength(0);
        }
    };

    // Function to show the dialog
    const handleVisible = () => {
        setIsVisible(true);
    };
    // Function to hide the dialog
    const handleClose = () => {
        setIsVisible(false);
    };
    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsMenuVisible(false); // Đóng menu sau khi chọn
        setGender(genderOptions[value]);
    };

    useEffect(() => {
        setInputLength(username.length);

    }, [username]);
    useEffect(() => {
        const selectedKey = Object.keys(genderOptions).find(key => genderOptions[key] === gender);
        setSelectedValue(selectedKey || 'Prefer not to say'); // Nếu không tìm thấy, sử dụng giá trị mặc định
    }, [gender]);
    return (
        <>
            <div className='b-account-center-content-container b-account-info-edit'>
                <div className='b-account-info-edit__content'>
                    <div className='b-account-info-edit__avatar b-container'>
                        <div onClick={handleVisible}>
                            {avatar ? (
                                <AvatarL1 avatar={avatar} />

                            ) : (
                                <div className='b-avatar b-avatar__l1' role='button'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 40,
                                        background: 'var(--bug-default-color-brand-p2)',
                                        border: '1px solid var(--bug-default-color-brand-p5)',
                                        borderRadius: '50%',
                                        color: 'var(--bug-default-color-brand-p5)'
                                    }}
                                >
                                    {initialAvatar}
                                </div>
                            )}
                        </div>
                        <div className='account_edit_btn__group'>
                            <Button
                                label="Change Avatar"
                                onclick={handleVisible}
                                className="btnMdTertiary"
                            />
                        </div>
                    </div>

                    <div className='b-account-info-edit__form b-container'>
                        <div className="b-account-info-edit__item">
                            <div className="b-account-info-edit__label">Nickname</div>
                        </div>
                        <div className='nickname-content b-account-info-edit__value'>
                            <div className='b-input'>
                                <div className='b-input__container'>
                                    <input
                                        type="text"
                                        spellCheck="false"
                                        value={username}
                                        maxLength="20"
                                        onChange={handleChange} // Gọi hàm khi có thay đổi
                                    />
                                </div>
                                <div className='b-input__maxtip' >
                                    <span style={{ color: isOverLimit ? 'red' : '' }}>
                                        {inputLength}
                                    </span>
                                    /{maxLength}
                                </div>
                            </div>
                        </div>
                        <div className='nickname-msg'>Your username cannot contain special characters.</div>
                        <div className='b-account-info-edit__item'>
                            <div className='b-account-info-edit__label'>Gender</div>
                            <div className='b-account-info-edit__value'>
                                <div className='b-select b-select-outlined'>
                                    <div className='b-select__container' onClick={toggleMenu}>
                                        <span className='b-select__label'>
                                            <span className='b-select__val'>{selectedValue}</span>
                                        </span>
                                        <i className={`b-icon icon-caret-down ${isMenuVisible ? 'b-select__icon--reverse' : ''}`}></i>
                                    </div>
                                    {isMenuVisible && (
                                        <div className='b-selectmenu b-select__menu'>
                                            <ul className='b-selectmenu__list'>
                                                {Object.keys(genderOptions).map((key, index) => (
                                                    <li
                                                        key={index}
                                                        className={`b-selectmenu__item b-selectmenu__item--${index} ${selectedValue === key ? 'b-selectmenu__item--selected' : ''}`}
                                                        onClick={() => handleSelect(key)}
                                                    >
                                                        <span className='b-selectmenu__label'>{key}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='b-account-info-edit__item'>
                            <div className='b-account-info-edit__value'>
                                <Button
                                    label="Save"
                                    onclick={saveChanges}
                                    className="btnSaveLargest"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                {/* b-dialog b-avatar-selector b-dialog-normal b-dialog-size-lg b-dialog-enter-active b-dialog-enter-to */}
                <div className='b-dialog b-avatar-selector b-dialog-normal b-dialog-size-lg' style={{ overflow: "hidden", display: isVisible ? '' : 'none' }}>
                    <div className='b-dialog__wrp'>
                        <div className='b-dialog__content' style={{ maxHeight: 540 }}>
                            <header className='b-dialog__header b-dialog__header-left'>
                                <p className='b-dialog__title'>Change Avatar</p>
                                <BtnClose onclose={handleClose} />
                            </header>

                            <div className='b-dialog__body' style={{ overflow: "hidden" }}>
                                <div className='b-avatar-selector__current'>
                                    {avatar ? (
                                        <AvatarL1 avatar={avatar} />

                                    ) : (
                                        <div className='b-avatar b-avatar__l1' role='button'
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: 40,
                                                background: 'var(--bug-default-color-brand-p2)',
                                                border: '1px solid var(--bug-default-color-brand-p5)',
                                                borderRadius: '50%',
                                                color: 'var(--bug-default-color-brand-p5)'
                                            }}
                                        >
                                            {initialAvatar}
                                        </div>
                                    )}
                                </div>
                                <SwitchTab />
                                <div className='b-avatar-selector__container'>
                                    <div className='b-avatar-selector__list'>
                                        {avatars.length > 0 ? (
                                            avatars.map((url, index) => (
                                                <AvatarSelectorItem key={index} avatar={url} />
                                            ))
                                        ) : (
                                            <p>No avatars available</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <footer className='b-dialog__footer' style={{ padding: "16px 24px 24px" }}>
                                <Button
                                    label="Canel"
                                    onclick={handleClose}
                                    className="btnLgTertiary"
                                />
                                <Button
                                    label="Submit"
                                    onclick={null}
                                    className="btnLgPrimary"
                                />
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
