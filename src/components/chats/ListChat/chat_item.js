import React, { useState, useEffect } from 'react';
import { formatTime } from '../../../utils/time_utils';

const ChatItem = ({ chats, currentUserId, onChatSelect }) => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        const updatedChats = chats.map(chat => {
            const latestMessage = chat.messages[chat.messages.length - 1]; // Lấy tin nhắn mới nhất
            const latestSender = chat.participants.find(p => p.user_id === latestMessage.sender_id); // Tìm người gửi tin nhắn mới nhất
            const unreadMessagesCount = chat.messages.filter(message => message.status !== 'read').length;
            const displayParticipant = chat.participants.length === 2
                ? chat.participants.find(p => p.user_id !== currentUserId)
                : latestSender;

            // Nội dung tin nhắn cuối cùng
            let lastMessageContent;
            if (chat.participants.length > 2) {
                // Là nhóm
                lastMessageContent = typeof latestMessage.content === 'string' ? latestMessage.content : ` ${latestMessage.content.file_name}`;
            } else {
                // Không phải nhóm
                lastMessageContent = latestMessage.sender_id === currentUserId
                    ? `You: ${typeof latestMessage.content === 'string' ? latestMessage.content : ` ${latestMessage.content.file_name}`}`
                    : typeof latestMessage.content === 'string' ? latestMessage.content : ` ${latestMessage.content.file_name}`;
            }
            const formattedTime = formatTime(latestMessage.sent_at);
            return {
                ...chat,
                latestMessage,
                latestSender,
                unreadMessagesCount,
                displayParticipant,
                lastMessageContent,
                formattedTime: formattedTime
            };
        });

        setChatList(updatedChats);
    }, [chats, currentUserId]);

    return (
        <>
            {chatList.map(chat => (
                <a key={chat.chat_id} href={`#${chat.chat_id}`} className='card border-0 text-reset' onClick={() => onChatSelect(chat.chat_id)}>
                    <div className='card-body'>
                        <div className='row gx-5'>
                            <div className='col-auto'>
                                <div className='avatar avatar-online'>
                                    <img className='avatar-img' src={chat.displayParticipant.avatar} alt="" />
                                </div>
                            </div>

                            <div className='col'>
                                <div className='d-flex align-items-center mb-3'>
                                    <h5 className='me-auto mb-0'>
                                        {chat.displayParticipant.user_id === currentUserId ? "You" : chat.displayParticipant.username}
                                    </h5>
                                    <span className='text-muted extra-small ms-2'>
                                        {chat.formattedTime}
                                    </span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='line-clamp me-auto'>
                                        {chat.lastMessageContent}
                                    </div>
                                    {chat.unreadMessagesCount > 0 && (
                                        <div className='badge badge-circle bg-primary ms-5'>
                                            <span>{chat.unreadMessagesCount}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {chat.groupImage && (
                        <div className='card-footer'>
                            <div className='row align-items-center gx-4'>
                                <div className='col-auto'>
                                    <div className='avatar avatar-xs'>
                                        <img src={chat.groupImage} className='avatar-img' alt="" />
                                    </div>
                                </div>
                                <div className='col'>
                                    <h6 className='mb-0'>
                                        {chat.chat_name}
                                    </h6>
                                </div>
                                <div className='col-auto'>
                                    <div className='avatar-group'>
                                        {chat.participants.slice(0, 3).map(participant => (
                                            <div className='avatar avatar-xs' key={participant.user_id}>
                                                <img src={participant.avatar} className='avatar-img' alt={participant.username} />
                                            </div>
                                        ))}
                                        {chat.participants.length > 3 && (
                                            <div className='avatar avatar-xs'>
                                                <span className='avatar-text'>+{chat.participants.length - 3}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </a>
            ))}
        </>
    );
};

export default ChatItem;
