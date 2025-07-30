import React from 'react'

export const Button = ({ label, onclick, className }) => {
    const classMap = {
        btnLgPrimary: 'bug-button normal__primary bug-button__lg bug-button-loading__lg',
        btnLgTertiary: 'bug-button normal__tertiary bug-button__lg bug-button-loading__lg',
        btnMdTertiary: 'bug-button normal__tertiary bug-button__md bug-button-loading__md',
        btnDisabled: 'bug-button normal__primary b-disabled bug-button__lg bug-button-loading__lg',
        btnSaveLargest: 'bug-button account-center-editor-save normal__primary bug-block bug-button__largest bug-button-loading__largest w-280',
    };

    return (
        <>
            <button
                className={classMap[className]}
                onClick={onclick}
            >
                <span>{label}</span>
            </button>
        </>
    )
}
