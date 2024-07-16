import React from "react";
import SvgIcon from '../../../svg/svg_icon';

const ChatHeader = ({ chat, currentUserId }) => {
    const currentUser = chat.participants.find(user => user.user_id !== currentUserId);
    const getAvatarClass = (chat) => {
        if (chat.chat_name) {
            // Kiểm tra nếu có bất kỳ user nào trong chat.participants isOnline
            const isAnyUserOnline = chat.participants.some(participant => participant.isOnline);
            return isAnyUserOnline ? 'avatar avatar-online' : 'avatar';
        } else {
            // Kiểm tra trạng thái của currentUser
            return currentUser && currentUser.isOnline ? 'avatar avatar-online' : 'avatar';
        }
    };

    return (
        <>
            <div className='chat-header border-bottom py-4 py-lg-7'>
                <div className='row align-items-center'>
                    <div className='col-2 d-xl-none'>
                        <a className='icon icon-lg text-muted' href='#' data-toggle-chat="">
                            <SvgIcon name="angle-left-solid" className="" />
                        </a>
                    </div>
                    <div className='col-8 col-xl-12'>
                        <div className='row align-items-center text-xl-start'>
                            <div className='col-12 col-xl-6'>
                                <div className='row align-items-center gx-5'>
                                    <div className='col-auto'>
                                        <div className={getAvatarClass(chat)}>
                                            {chat.groupImage ? (
                                                <img className='avatar-img' src={chat.groupImage} alt="Group" />
                                            ) : (
                                                currentUser && <img className='avatar-img' src={currentUser.avatar} alt="User" />
                                            )}
                                        </div>
                                    </div>
                                    <div className='col overflow-hidden'>
                                        <h5 className='text-truncate'>
                                            {chat.chat_name ? (
                                                chat.chat_name
                                            ) : (
                                                currentUser.username
                                            )}
                                        </h5>
                                        <p className='text-truncate'>
                                            {chat.chat_name ? (
                                                `${chat.participants.length} members, ${chat.participants.filter(p => p.isOnline).length} Online`
                                            ) : (
                                                'Online'
                                            )}

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 d-none d-xl-block'>
                                <div className='row align-items-center justify-content-end gx-6'>
                                    {chat.chat_name ? (
                                        <div className='col-auto'>
                                            <div className='avatar-group'>
                                                {chat.participants.slice(0, 3).map(participant => (
                                                    <a href='#' className='avatar avatar-sm' key={participant.user_id}>
                                                        <img src={participant.avatar} className='avatar-img' alt={participant.username} />
                                                    </a>
                                                ))}

                                                <a className='avatar avatar-sm' href='#' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-add-members" aria-controls="offcanvas-add-members">
                                                    <span className='avatar-text' data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="<strong>Add People</strong><p>Invite friends to group</p>">
                                                        <SvgIcon name="plus-solid" className="" />
                                                    </span>
                                                </a>

                                            </div>
                                        </div>

                                    ) : (
                                        ''
                                    )}

                                    <div className='col-auto'>
                                        <a className='icon icon-lg text-muted px-4' href='#'>
                                            <SvgIcon name="video-solid" className="camera" />
                                        </a>
                                        <a className='icon icon-lg text-muted p-3' href='#' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more-group">
                                            <SvgIcon name="ellipsis-solid" className="" />
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-xl-none text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <a className="icon icon-lg text-muted px-4" href="#">
                                <div className="icon icon-lg">
                                    <SvgIcon name="video-solid" className="camera" />
                                </div>
                            </a>
                            <div className="dropdown">
                                <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="icon icon-lg">
                                        <SvgIcon name="ellipsis-solid" className="" />
                                    </div>
                                </a>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a className='dropdown-item' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-add-members" aria-controls="offcanvas-add-members">Add member</a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more-group">More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ChatHeader;