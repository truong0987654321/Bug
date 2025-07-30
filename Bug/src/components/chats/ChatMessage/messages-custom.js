import React from "react";
const MessageCustom = ({ chat, currentUserId }) => {
    const currentUser = chat.participants.find(user => user.user_id !== currentUserId);
    return (
        <>
            <div className='text-center py-10'>
                <div className='row gy-6'>
                    <div className='col-12'>
                        <div className='avatar avatar-xl mx-auto'>
                            {chat.groupImage ? (
                                <img className='avatar-img' src={chat.groupImage} alt="Group" />
                            ) : (
                                currentUser && <img className='avatar-img' src={currentUser.avatar} alt="User" />
                            )}
                        </div>
                    </div>
                    <div className='col-12'>
                        <h4>
                            {chat.chat_name ? (
                                chat.chat_name
                            ) : (
                                currentUser.username
                            )}
                        </h4>
                    </div>
                    {chat.chat_name ? (
                        <div className='col-12'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-auto'>
                                    <a className='avatar avatar-svg mx-auto' href='/'>
                                        <span className='avatar-text'>
                                            <i className="icon-user-plus"></i>
                                        </span>
                                    </a>
                                    <p className='py-3'>Thêm</p>
                                </div>
                                <div className='col-auto'>
                                    <a className='avatar avatar-svg mx-auto' href='/'>
                                        <span className='avatar-text '>
                                            <i className="icon-pen"></i>
                                        </span>
                                    </a>
                                    <p className='py-3'>Tên</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </>
    );
};
export default MessageCustom;