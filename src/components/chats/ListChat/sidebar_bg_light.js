import React, { useState } from 'react';
import ChatItem from './chat_item';
import LoadingListChat from './loading_list_chat';

const SidebarBgLight = ({ chats, isLoading, currentUserId, onChatSelect }) => {
    const [searchText, setSearchText] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSearchText(''); // Làm rỗng thẻ input
        }
    };

    const handleClick = () => {
        const container = document.querySelector('.container.py-8');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const highlightText = (text) => {
        if (typeof text !== 'string') {
            return text; // Trả về văn bản gốc nếu không phải chuỗi
        }

        if (!searchText) return text; // Trả về văn bản gốc nếu không có gì để tìm

        const regex = new RegExp(`(${searchText})`, 'gi'); // Tạo regex để tìm kiếm
        const parts = text.split(regex); // Tách văn bản theo từ khóa

        return parts.map((part, index) =>
            part.toLowerCase() === searchText.toLowerCase() ? (
                <span key={index} className="highlight">{part}</span> // Đánh dấu phần tìm thấy
            ) : (
                part
            )
        );
    };

    const getLastMessageDate = (messages) => {
        const dates = messages.map(message => new Date(message.sent_at));
        return new Date(Math.max(...dates));
    };

    // Lọc và sắp xếp các chat
    const filteredChats = chats
        .filter(chat => {
            const chatName = chat.chat_name || '';
            const lastMessage = chat.messages[chat.messages.length - 1]?.content || '';
            const participants = chat.participants.map(p => p.username).join(', ');

            return (
                chatName.toLowerCase().includes(searchText.toLowerCase()) ||
                lastMessage.toString().toLowerCase().includes(searchText.toLowerCase()) ||
                participants.toLowerCase().includes(searchText.toLowerCase())
            );
        })
        .map(chat => ({
            ...chat,
            chat_name: highlightText(chat.chat_name || ''),
            lastMessage: highlightText(chat.messages[chat.messages.length - 1]?.content || ''),
            participants: chat.participants.map(p => ({
                ...p,
                username: highlightText(p.username)
            }))
        }))
        .sort((a, b) => {
            const dateA = getLastMessageDate(a.messages);
            const dateB = getLastMessageDate(b.messages);
            return dateB - dateA; // Sắp xếp giảm dần
        });

    if (isLoading) {
        return <LoadingListChat />; // Hiển thị loading nếu đang tải
    }

    return (
        <aside className='sidebar bg-light'>
            <div className='container h-100'>
                <div className='tab-pane fade h-100 active show' id='tab-content-chats'>
                    <div className='d-flex flex-column h-100 position-relative'>
                        <div className='pt-8'>
                            <div className='mb-0'>
                                <div className='fw-bold m-0' style={{ fontSize: '24px' }}>Chats</div>
                            </div>
                            <div className='mb-0 search-messages'>
                                <div className='input-group'>
                                    <div className='input-group-text'>
                                        <div className='icon icon-lg'>
                                            <i className="icon-magnifying-glass"></i>
                                        </div>
                                    </div>
                                    <input
                                        className='form-control form-control-lg ps-0'
                                        placeholder="Search messages or users"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        onClick={handleClick}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='custom-scrollbar'>
                            <div className=''>
                                <div className='card-list'>
                                    {filteredChats.length > 0 ? (
                                        <ChatItem onChatSelect={onChatSelect} chats={filteredChats} currentUserId={currentUserId} />
                                    ) : (
                                        <div className='card-body'>
                                            <div className='row gx-5'>
                                                <div className='text-center' >No results found for "<strong>{searchText}</strong>"</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SidebarBgLight;
