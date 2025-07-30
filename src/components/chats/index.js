import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import SidebarBgLight from './ListChat/sidebar_bg_light';
import MainChats from './ChatMessage/main_chat';
import { Helmet } from 'react-helmet';
import MediaPreview from './media_preview';
import Loading from './loading'
import { useAppstore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Chats = () => {
    const currentUserId = "1";
    const user = [
        {
            "user_id": "1",
            "avatar": 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fhinh-meme-meo-doi.jpg?alt=media&token=b509c3b1-2832-4d41-958f-7d569cc3b2a8',
            "username": "user1",
            'isOnline': true
        },
        {
            "user_id": "2",
            "avatar": 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fuser.png?alt=media&token=d5b6cc4b-7719-4ae7-99e9-4cf5926fcd92',
            "username": "user2",
            'isOnline': true
        },
        {
            "user_id": "3",
            "avatar": 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf',
            "username": "user3",
            'isOnline': true
        },
        {
            "user_id": "4",
            "avatar": 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fmeo-vang-dua-ngon-tay-like.jpg?alt=media&token=03bd5eaf-d99d-4ce9-8e35-af10c77c2470',
            "username": "user4",
            'isOnline': false
        }

    ]
    const chats = [
        {
            "chat_id": "12345",
            "chat_name": "Dark Hơi Nhiều",
            'groupImage': 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fmeo-vang-dua-ngon-tay-like.jpg?alt=media&token=03bd5eaf-d99d-4ce9-8e35-af10c77c2470',
            "participants": [
                user[0], // user1
                user[1], // user2
                user[2], // user3
                user[3]  // user4  
            ],
            "messages": [
                {
                    "id": "m" + user[0].user_id,
                    "sender_id": user[0].user_id,
                    "sender_username": user[0].username,
                    "content": "Xin chào mọi người!",
                    "sent_at": "2024-07-13T10:00:00Z",
                    "status": "read"
                },
                {
                    "id": "m" + user[1].user_id,
                    "sender_id": user[1].user_id,
                    "sender_username": user[1].username,
                    "content": {
                        "type": "file",
                        "file_name": "document.pdf",
                        "file_url": "http://example.com/document.pdf",
                        "file_size": "1.6 GB"
                    },
                    "sent_at": "2024-07-13T10:05:00Z",
                    "status": "read"
                },
                {
                    "id": "m" + user[2].user_id,
                    "sender_id": user[2].user_id,
                    "sender_username": user[2].username,
                    "content": "Meo meo meow meo meo meo meow meoww mmeo meo meo meo mewwwww meow???",
                    "sent_at": "2024-07-13T11:00:00Z",
                    "status": "unread"
                }
            ]
        },
        {
            "chat_id": "67890",
            "chat_name": null,
            "groupImage": null,
            "participants": [
                user[0],
                user[3]
            ],
            "messages": [
                {
                    "id": "m" + user[0].user_id,
                    "sender_id": user[0].user_id,
                    "sender_username": user[0].username,
                    "content": "Chào bạn!",
                    "sent_at": "2024-07-12T12:45:00Z",
                    "status": "read"
                },
                {
                    "id": "m" + user[3].user_id,
                    "sender_id": user[3].user_id,
                    "sender_username": user[3].username,
                    "content": "Chào user1!",
                    "sent_at": "2024-07-13T10:05:00Z",
                    "status": "read"
                }
            ]
        },
        {
            "chat_id": "09876",
            "chat_name": null,
            "groupImage": null,
            "participants": [
                user[0],
                user[2]
            ],
            "messages": [
                {
                    "id": "m" + user[0].user_id,
                    "sender_id": user[0].user_id,
                    "sender_username": user[0].username,
                    "content": "Chào bạn!",
                    "sent_at": "2023-07-13T11:00:00Z",
                    "status": "read"
                },
                {
                    "id": "m" + user[2].user_id,
                    "sender_id": user[2].user_id,
                    "sender_username": user[2].username,
                    "content": "Chào user1!",
                    "sent_at": "2023-07-13T12:45:00Z",
                    "status": "unread"
                },
                {
                    "id": "m" + user[0].user_id,
                    "sender_id": user[0].user_id,
                    "sender_username": user[0].username,
                    "content": "Chào bạn!",
                    "sent_at": "2023-07-15T11:00:00Z",
                    "status": "unread"
                },
                {
                    "id": "m" + user[0].user_id,
                    "sender_id": user[0].user_id,
                    "sender_username": user[0].username,
                    "content": {
                        "type": "file",
                        "file_name": "document.pdf",
                        "file_url": "http://example.com/document.pdf",
                        "file_size": "1.6 GB"
                    },
                    "sent_at": "2024-07-26T10:05:00Z",
                    "status": "read"
                },

            ]
        }
    ];
    const { userInfo } = useAppstore();
    const navigate = useNavigate();
    useEffect(() => {
        // if (!userInfo.profileSetup) {
        //     toast('Please setup profile to continue.');
        //     navigate("/profile");
        // }
    }, [userInfo, navigate])


    const currentUser = user.find(u => u.user_id === currentUserId);

    const unreadCount = chats.reduce((count, chat) => {
        const hasUnread = chat.messages.some(message => message.status === 'unread');
        return hasUnread ? count + 1 : count;
    }, 0);
    const [componentsReady, setComponentsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const navbarReady = true;
        const sidebarReady = true;
        const mainChatsReady = true;
        if (navbarReady && sidebarReady && mainChatsReady) {
            setComponentsReady(true);
        }
    }, []);
    useEffect(() => {
        if (componentsReady) {
            setIsLoading(false);
            // const timer = setTimeout(() => {
            // }, 2000);
            // return () => clearTimeout(timer);
        }
    }, [componentsReady]);


    const [selectedChatId, setSelectedChatId] = useState(null);
    const [isActive, setIsActive] = useState(false);

    const handleChatSelect = (chatId) => {
        setSelectedChatId(chatId);
        setIsActive(true);
    };
    return (
        <>
            {!componentsReady ? (
                <Loading />
            ) : (
                <>
                    <Helmet>
                        <title>Home | Bug</title>
                        <link rel="stylesheet" href="./assets/css/chats.css" />

                        <script src="./assets/js/vendor.js" async />
                        <script src="./assets/js/template.js" async />
                    </Helmet>
                    <div className='layout overflow-hidden position-absolute w-100'>
                        <Navbar currentUser={currentUser} unreadCount={unreadCount} />
                        <SidebarBgLight
                            chats={chats}
                            isLoading={isLoading}
                            currentUserId={currentUserId}
                            onChatSelect={handleChatSelect}
                        />
                        <MainChats
                            isActive={isActive}
                            setIsActive={setIsActive}
                            chats={chats}
                            chatId={selectedChatId}
                            currentUserId={currentUserId}
                        />
                    </div>
                    <MediaPreview />

                </>
            )}
        </>
    );
};

export default Chats;
