import React from "react";

import FileContent from './file_content';
import { formatTime } from '../../../utils/time_utils';
const MessageYou = ({ chat, participants }) => {
    const sender = participants.find(user => user.user_id === chat.sender_id);
    const formattedTime = formatTime(chat.sent_at);
    return (
        <>
            <div className='message message-out'>
                <a href='#' className='avatar avatar-responsive'>
                    {sender && (
                        <img
                            src={sender.avatar}
                            alt={`${sender.username}`}
                            className="avatar-img"
                        />
                    )}
                </a>
                <div className='message-inner'>
                    <div className='message-body'>
                        <div className='message-content'>

                        </div>
                        <div className='message-content'>
                            <div className='message-text'>
                                {typeof chat.content === 'object' && chat.content.type === 'file' ? (
                                    <FileContent chat={chat} customClass="m_you"/>
                                ) : (
                                    <p>{chat.content}</p>
                                )}
                            </div>
                            <div className='message-action'>
                                <div className='dropdown'>
                                    <a href='#' className='icon text-muted ' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i className="icon-ellipsis-vertical"></i>
                                    </a>
                                    <ul className='dropdown-menu '>
                                        <li>
                                            <a className='dropdown-item d-flex align-items-center' href='#'>
                                                <span className='me-auto'>Edit</span>
                                                <div className='icon'>
                                                    <i className="icon-pen"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item d-flex align-items-center' href='#'>
                                                <span className='me-auto'>Reply</span>
                                                <div className='icon'>
                                                    <i className="icon-reply"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className='dropdown-divider' />
                                        </li>
                                        <li>
                                            <a className='dropdown-item d-flex align-items-center text-danger' href='#'>
                                                <span className='me-auto'>Delete</span>
                                                <div className='icon'>
                                                    <i className="icon-trash"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='message-footer'>
                        <span className="extra-small text-muted">{formattedTime}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MessageYou;