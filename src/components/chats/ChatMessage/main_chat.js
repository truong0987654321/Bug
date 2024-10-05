import React, { useEffect, useRef, useState } from 'react';

import ChatHeader from './chat_header'
import ChatBody from './chat_body'
import More from '../more';
import AddMembers from '../add_members';
import { Helmet } from 'react-helmet';

const MainChats = ({ chatId, chats, currentUserId, isActive, setIsActive }) => {

    const hasScriptsLoaded = useRef(false);

    useEffect(() => {
        // Tự động cuộn chat body xuống dưới cùng khi chatId thay đổi
        const chatBody = document.querySelector('.chat-body');
        if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
        }
        // Chỉ thêm script khi chưa thêm
        if (!hasScriptsLoaded.current) {
            const scriptVendor = document.createElement('script');
            scriptVendor.src = './assets/js/vendor.js';
            scriptVendor.async = true;

            const scriptTemplate = document.createElement('script');
            scriptTemplate.src = './assets/js/template.js';
            scriptTemplate.async = true;

            document.body.appendChild(scriptVendor);
            document.body.appendChild(scriptTemplate);

            hasScriptsLoaded.current = true;
        }

        // Dọn dẹp để không chèn thêm script khi component cập nhật
        return () => {
            // Chỉ cần dọn dẹp nếu cần thiết
            const scripts = document.querySelectorAll('script[src="./assets/js/vendor.js"], script[src="./assets/js/template.js"]');
            scripts.forEach(script => script.remove());
        };
    }, [chatId]);

    const chat = chats.find((chat) => chat.chat_id === chatId);

    const [text, setText] = useState('');
    const textareaRef = useRef(null);
    const rowHeight = 24; // Chiều cao của một hàng (px)
    const maxRows = 4; // Số hàng tối đa
    const maxHeight = (rowHeight * (maxRows + 1)) - 5; // Chiều cao tối đa của textarea (px)

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset chiều cao để tính toán lại
            // Tính số dòng hiện tại
            const lines = Math.floor(textarea.scrollHeight / rowHeight);
            if (lines <= maxRows) {
                textarea.style.height = `${textarea.scrollHeight}px`;
                textarea.scrollTop = textarea.scrollHeight;
                textarea.style.overflowY = 'hidden'; // Ẩn thanh cuộn khi dưới tối đa
            } else {
                textarea.style.height = `${maxHeight}px`; // Chiều cao cố định khi vượt quá số hàng tối đa
                textarea.scrollTop = textarea.scrollHeight;
                textarea.style.overflowY = 'scroll'; // Thêm thanh cuộn khi vượt quá số hàng tối đa
            }
        }
}, [text, maxHeight, rowHeight]);
    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault(); // Ngăn hành vi mặc định của Enter (thay vì xuống hàng)
            setText(prevText => prevText + '\n'); // Thêm một dòng mới
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // const chat_form = document.querySelector('.chat-form')
        }
    };




    const handleChange = (e) => {
        setText(e.target.value);
    };

    if (!chat) {

        return (
            <main className="main">
                <div className='container h-100'>
                    <div className='d-flex flex-column h-100 justify-content-center text-center'>
                        <div className="mb-6" >
                            <span className='icon icon-xl text-muted'>
                                <i className='avatar-img placeholder-img icon-comment'></i>
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
            <Helmet>
                <script src="./assets/js/vendor.js" />
                <script src="./assets/js/template.js" />
            </Helmet>
            <main className={`main ${isActive ? 'is-visible' : ''}`} data-dropzone-area="">
                <div className='container h-100'>
                    <div className="d-flex flex-column h-100 position-relative" >
                        <ChatHeader chat={chat} currentUserId={currentUserId} setIsActive={setIsActive} />
                        <ChatBody chat={chat} currentUserId={currentUserId} />

                        <div className='chat-footer pb-3 position-absolute bottom-0 start-0'>
                            <form className='chat-form' data-emoji-form='' >
                                <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="" style={{
                                    margin: '0 63px -1.9375rem 47px', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem'
                                }}>
                                </div>
                                <div className='row align-items-end'>
                                    <div className='col-auto ' style={{ paddingRight: 6 }}>
                                        <a href={'/'} className="btn btn-icon btn-link text-body rounded-circle dz-clickable hover-btn" id="dz-btn" style={{ textDecoration: 'none' }}>
                                            <i className='icon-paperclip'></i>
                                        </a>
                                    </div>
                                    <div className='col rounded-pill bg-dark' style={{ borderRadius: '26px !important' }}>
                                        <div className='input-group'>
                                            <textarea ref={textareaRef} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onChange={handleChange} className='form-control custom-scrollbar px-0' placeholder="Type your message..." rows="1" data-emoji-input='' data-autosize='' style={{ overflowWrap: 'break-word', resize: 'none', height: '46.5556px' }}></textarea>
                                            <a href="/" className="input-group-text text-body align-items-end pe-0" data-emoji-btn='' style={{ paddingBottom: '13px' }}>
                                                <span className='icon icon-lg'>
                                                    <i className='icon-face-smile-regular'></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-auto' style={{ paddingLeft: 0 }}>
                                        <button className='btn btn-icon btn-primary rounded-circle ms-5'>
                                            <i className='icon-paper-plane-regular'></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main >
            <More />
            {chat?.chat_name && (<AddMembers />)}

        </>


    );
};
export default MainChats;