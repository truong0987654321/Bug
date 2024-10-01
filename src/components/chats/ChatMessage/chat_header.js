import React from 'react';

const ChatHeader = ({ chat, currentUserId, setIsActive }) => {

    const handleClick = () => {
        setIsActive(false);
    };

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
                        <a className='icon icon-lg text-muted' onClick={handleClick} href='#' data-toggle-chat="">
                            <i className='icon-angle-left'></i>
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
                                                        <i className='icon-plus' style={{ fontSize: '.7rem' }}></i>
                                                    </span>
                                                </a>

                                            </div>
                                        </div>

                                    ) : (
                                        ''
                                    )}

                                    <div className='col-auto'>
                                        <a className='icon icon-lg text-muted px-4' href='#'>
                                            <i className='camera icon-video'></i>
                                        </a>
                                        <a className='icon icon-lg text-muted p-3' href='#' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more-group">
                                            <i className='icon-ellipsis'></i>
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
                                    <i className='camera icon-video'></i>
                                </div>
                            </a>
                            {chat.chat_name ? (
                                <div className="dropdown">
                                    <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="icon icon-lg">
                                            <i className='icon-ellipsis'></i>
                                        </div>
                                    </a>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <a href='#' className='dropdown-item' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-add-members" aria-controls="offcanvas-add-members">Add member</a>
                                        </li>
                                        <li>
                                            <a href='#' className='dropdown-item' data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more-group">More</a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <a href="#" className="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                    <div className="icon icon-lg">
                                        <i className='icon-ellipsis'></i>
                                    </div>
                                </a>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ChatHeader;