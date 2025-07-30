import React from "react";
import { formatTime } from '../../../utils/time_utils';

const MessageDivider = ({ chat }) => {
    const formattedTime = formatTime(chat.sent_at);
    return (
        <>
            <div className='message-divider'>
                <small className='text-muted'>{formattedTime}</small>
            </div>
        </>
    );
};
export default MessageDivider;