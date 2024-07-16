import React, { useEffect } from 'react';

import SvgIcon from '../../../svg/svg_icon';
import ChatHeader from './chat_header'
import More from '../more';
import AddMembers from '../add_members';
import { Helmet } from 'react-helmet';

const MainChats = ({ chatId, chats, currentUserId }) => {
    useEffect(() => {
        const chatBody = document.querySelector('.chat-body');
        if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }, [chatId]);
    const chat = chats.find((chat) => chat.chat_id === chatId);

    if (!chat) {

        return (
            <main className="main">
                <div className='container h-100'>
                    <div className='d-flex flex-column h-100 justify-content-center text-center'>
                        <div className="mb-6" >
                            <span className='icon icon-xl text-muted'>
                                <SvgIcon name="comment-solid" className="avatar-img placeholder-img" />
                            </span>
                        </div>
                        <span className='text-muted'>
                            Pick a person from left menu, <br></br>
                            and start your conversation.
                        </span>
                    </div>
                </div>
            </main>
        );
    }
    return (
        <>
            {/* <Helmet>
                <script src="./assets/js/vendor.js"  />
                <script src="./assets/js/template.js"  />
            </Helmet> */}
            <main className="main is-visible" data-dropzone-area="">
                <div className='container h-100'>
                    <div className="d-flex flex-column h-100 position-relative" >
                        <ChatHeader chat={chat} currentUserId={currentUserId} />

                        <div className='chat-body hide-scrollbar flex-1 h-100' >

                            <div className='chat-body-inner' style={{ paddingBottom: '87px' }}>
                                <div className='py-6 py-lg-12'>

                                    <div className='text-center py-10'>
                                        <div className='row gy-6'>
                                            <div className='col-12'>
                                                <div className='avatar avatar-xl mx-auto'>

                                                    <img className="avatar-img" src="https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fmeo-vang-dua-ngon-tay-like.jpg?alt=media&amp;token=03bd5eaf-d99d-4ce9-8e35-af10c77c2470" />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <h4>dark</h4>

                                            </div>
                                            <div className='col-12'>
                                                <div className='row d-flex justify-content-center'>
                                                    <div className='col-auto'>
                                                        <a className='avatar avatar-svg mx-auto' href='#'>
                                                            <span className='avatar-text'>
                                                                <SvgIcon name="user-plus-solid" className="" />
                                                            </span>

                                                        </a>
                                                        <p className='py-3'>Thêm</p>
                                                    </div>
                                                    <div className='col-auto'>
                                                        <a className='avatar  avatar-svg mx-auto' href='#'>
                                                            <span className='avatar-text '>
                                                                <SvgIcon name="pen-solid" className="" />
                                                            </span>

                                                        </a>
                                                        <p className='py-3'>Tên</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='message-divider'>
                                        <small className='text-muted'>Monday, Sep 16</small>
                                    </div>

                                    <div className='message message-out'>
                                        <a href='#' className='avatar avatar-responsive'>
                                            <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fhinh-meme-meo-doi.jpg?alt=media&token=b509c3b1-2832-4d41-958f-7d569cc3b2a8' />
                                        </a>
                                        <div className='message-inner'>
                                            <div className='message-body'>
                                                <div className='message-content'>

                                                </div>
                                                <div className='message-content'>
                                                    <div className='message-text'>
                                                        <div className='row align-items-center gx-4'>
                                                            <div className='col-auto'>
                                                                <a className='avatar avatar-sm' href='#'>
                                                                    <div className='avatar-text bg-white text-primary'>
                                                                        <SvgIcon name="arrow-down-solid" className="" />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className='col overflow-hidden'>
                                                                <h6 className='text-truncate text-reset'>
                                                                    <a className='text-reset'>meow.json</a>
                                                                </h6>
                                                                <ul className='list-inline text-uppercase extra-small opacity-75 mb-0'>
                                                                    <li className='list-inline-item'>1.6 GB</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='message-action'>
                                                        <div className='dropdown'>
                                                            <a href='#' className='icon text-muted ' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                                                <SvgIcon name="ellipsis-vertical-solid" className="" />
                                                            </a>
                                                            <ul className='dropdown-menu '>
                                                                <li>
                                                                    <a className='dropdown-item d-flex align-items-center' href='#'>
                                                                        <span className='me-auto'>Edit</span>
                                                                        <div className='icon'>
                                                                            <SvgIcon name="pen-solid" className="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className='dropdown-item d-flex align-items-center' href='#'>
                                                                        <span className='me-auto'>Reply</span>
                                                                        <div className='icon'>
                                                                            <SvgIcon name="reply-solid" className="" />
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
                                                                            <SvgIcon name="trash-solid" className="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='message-footer'>
                                                <span className="extra-small text-muted">12:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='message'>
                                        <a className='avatar avatar-responsive' href='#'>
                                            <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf' />
                                        </a>
                                        <div className='message-inner'>
                                            <div className='message-body'>
                                                <div className='message-content'>
                                                    <div className='message-text'>
                                                        <p>Meo meo meow meo meo meo meow meoww mew meow meo meo meo meo meo meo meo mewwwww meow???...</p>
                                                    </div>
                                                    <div className='message-action'>
                                                        <div className='dropdown'>
                                                            <a href='#' className='icon text-muted ' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                                                <SvgIcon name="ellipsis-vertical-solid" className="" />
                                                            </a>
                                                            <ul className='dropdown-menu '>
                                                                <li>
                                                                    <a className='dropdown-item d-flex align-items-center' href='#'>
                                                                        <span className='me-auto'>Edit</span>
                                                                        <div className='icon'>
                                                                            <SvgIcon name="pen-solid" className="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className='dropdown-item d-flex align-items-center' href='#'>
                                                                        <span className='me-auto'>Reply</span>
                                                                        <div className='icon'>
                                                                            <SvgIcon name="reply-solid" className="" />
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
                                                                            <SvgIcon name="trash-solid" className="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='message-footer'>
                                                <span className="extra-small text-muted">12:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0'>
                            <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
                            </div>
                            <form className='chat-form rounded-pill bg-dark' data-emoji-form=''>
                                <div className='row align-items-center gx-0'>
                                    <div className='col-auto'>
                                        <a href="#" className="btn btn-icon btn-link text-body rounded-circle dz-clickable" id="dz-btn">
                                            <SvgIcon name="paperclip-solid" className="" />
                                        </a>
                                    </div>
                                    <div className='col'>
                                        <div className='input-group'>
                                            <textarea className='form-control px-0' placeholder="Type your message..." rows="1" data-emoji-input='' data-autosize='' style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: '46.5556px' }}></textarea>
                                            <a href="#" className="input-group-text text-body pe-0" data-emoji-btn=''>
                                                <span className='icon icon-lg'>
                                                    <SvgIcon name="face-smile-regular" className="" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                        <button className='btn btn-icon btn-primary rounded-circle ms-5'>
                                            <SvgIcon name="paper-plane-regular" className="" />
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main >
            {chat.chat_name ? (
                <>
                    <More />
                    <AddMembers />
                </>
            ) : (
                <>
                    <More />
                </>
            )}

        </>


    );
};
export default MainChats;