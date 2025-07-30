import React from "react";
import MessageDivider from './message-divider';
import MessageCustom from './messages-custom';
import MessageYou from './message-you';
import MessageOthers from './message-others';

const ChatBody = ({ chat, currentUserId }) => {
    const sortedMessages = chat.messages.slice().sort((a, b) => new Date(a.sent_at) - new Date(b.sent_at));

    return (
        <div className='chat-body custom-scrollbar flex-1 h-100' style={{ marginBottom: '88px',paddingRight:'4px' }}>
            <div className='chat-body-inner'>
                <div className='py-1'>
                    <MessageCustom chat={chat} />

                    {sortedMessages.map((message, index) => {
                        const messageKey = `${chat.chat_id}-${message.id}-${index}`;

                        // Hiển thị <MessageDivider /> nếu tin nhắn trước có ngày khác với tin nhắn hiện tại
                        const showDivider = index === 0 || 
                            new Date(sortedMessages[index - 1].sent_at).toDateString() !== new Date(message.sent_at).toDateString();

                        return (
                            <React.Fragment key={messageKey}>
                                {showDivider && <MessageDivider chat={message} />}
                                {message.sender_id === currentUserId ? (
                                    <MessageYou chat={message} participants={chat.participants} />
                                ) : (
                                    <MessageOthers chat={message} participants={chat.participants} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ChatBody;
