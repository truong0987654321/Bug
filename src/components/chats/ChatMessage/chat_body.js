import React from "react";
import SvgIcon from '../../../svg/svg_icon';

const ChatBody = ({ chat, currentUserId }) => {
    const currentUser = chat.participants.find(user => user.user_id !== currentUserId);

    return (
        <>

        </>
    );
};
export default ChatBody;