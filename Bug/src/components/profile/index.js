import React, { useEffect, useRef, useState } from 'react'
import { useAppstore } from '../../store'
import { Helmet } from 'react-helmet';
import Header from '../header';

import { AccountBg } from '../ui/account-bg';
import { Default } from './default';
import { EditBackground } from './edit-background';
import { AccountCenterTab } from './AccountCenter/account-center-tab';
import { AccountCenterPost } from './AccountCenter/account-center-post';
import { useLocation, useNavigate } from 'react-router-dom';
import { AccountCenterTitle } from './AccountCenter/account-center-title';
import { AccountAenterEdit } from './AccountCenter/account-center-edit';
import { toast } from 'react-toastify';
import apiClient from '../../lib/api-client';
import { GET_AVATAR, UPDATE_PROFILE_ROUTE } from '../../utils/constants';

const Profile = () => {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useAppstore();
    const [username, setUserName] = useState("");
    const [gender, setGender] = useState("");
    const [bg, setBg] = useState();
    const [img, setImg] = useState(null);
    const [selectedColor, setSelectedColor] = useState(0);
    const [showeditbg, setShowEditBg] = useState(false);
    const [apiData, setApiData] = useState([]);

    const imgSrc = 'https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf'
    const ariaLabel = userInfo.email;
    const firstCharacter = username
        ? username.charAt(0).toUpperCase()
        : userInfo.email.charAt(0).toUpperCase()


    const validateProfile = () => {
        if (!username) {
            toast.error("User name is required.");
            return false;
        }
        if (!gender) {
            toast.error("Gender is required.");
            return false;
        }
        return true;
    }
    const saveChanges = async () => {
        if (validateProfile()) {
            const response = await apiClient.post(UPDATE_PROFILE_ROUTE,
                { username, gender },
                { withCredentials: true }
            )
            if (response.status === 200 && response.data) {
                setUserInfo({ ...response.data })
                toast.success("Profile Update successfully.")
                navigate("/chat")
            }
        }
    }


    const handleEditBg = () => {
        setShowEditBg(true); // Toggle state
    };

    const handleCloseEditBg = () => {
        setShowEditBg(false); // Toggle state
    };

    const myRef = useRef(null); // Tham chiếu đến thẻ
    const [isAtTop, setIsAtTop] = useState(false); // Trạng thái theo dõi vị trí của phần tử

    const handleScroll = () => {
        if (myRef.current) {
            const rect = myRef.current.getBoundingClientRect();
            // Nếu top <= 0, đặt trạng thái là true
            if (rect.top <= 70) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        }
    };
    const location = useLocation();
    const setIsAtTopBasedOnPath = () => {
        switch (location.pathname) {
            case '/profile':
                setIsAtTop(false);
                break;
            case '/setting':
                setIsAtTop(true);
                break;
            case '/edit':
                setIsAtTop(true);
                break;
            default:
                setIsAtTop(false);
        }
    };
    const currentPath = location.pathname
    const renderContent = () => {
        if (currentPath === '/profile') {
            return <AccountCenterPost />;
        } else if (currentPath === '/edit') {
            return <AccountAenterEdit
                saveChanges={saveChanges}
                initialAvatar={firstCharacter}
                avatar={img}
                username={username}
                setUserName={setUserName}
                gender={gender}
                setGender={setGender}
                apiData={apiData}
            />
        }
    };
    const renderBg = () => {
        if (currentPath === '/profile') {
            return <AccountBg bg={bg} />;
        } else if (currentPath === '/edit') {
            return <></>
        }
    };
    const renderDefault = () => {
        if (currentPath === '/profile') {
            return <Default
                isAtTop={isAtTop}
                username={username}
                avatar={img}
                ariaLabel={ariaLabel}
                oneditbg={handleEditBg}
            />;
        } else if (currentPath === '/edit') {
            return <></>
        }
    };
    const rendertitle = () => {
        if (currentPath === '/profile') {
            return <AccountCenterTab isAtTop={isAtTop} />;
        } else if (currentPath === '/edit') {
            return <AccountCenterTitle />
        }
    };
    const routeName = () => {
        switch (currentPath) {
            case '/profile':
                return "accountCenter-post";
            case '/edit':
                return "accountCenter-edit";
            default:
                return "";
        }
    };
    useEffect(() => {
        const getAllFiles = async () => {
            try {
                const response = await apiClient.get(GET_AVATAR, {
                    withCredentials: true,
                });
                setApiData(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getAllFiles();
        setUserName(userInfo.username);
        setBg(userInfo.bg);
        setImg(userInfo.img)
        setGender(userInfo.gender)
        setIsAtTopBasedOnPath()
    }, [userInfo, currentPath]);


    useEffect(() => {

        // Lắng nghe sự kiện scroll của window
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Helmet>
                <title>Profile | Bug</title>
                <link rel="stylesheet" href="./assets/css/profile.css" />
            </Helmet>

            <div className='root bug-group-b' data-route-name={routeName()}>

                <Header isAtTop={isAtTop} />

                {renderBg()}
                <div
                    ref={myRef}
                    className='root-page-container'
                >
                    {renderDefault()}
                    <div className='root-page-container__content'>
                        <div className='root-page-container__left root-page-container__left--bg'>
                            <div className='b-layout b-account-center'>
                                <div className='b-main-page b-layout__main'>
                                    {rendertitle()}
                                    <div className='b-account-center-content'>
                                        {renderContent()}
                                    </div>
                                </div>

                                {showeditbg && <EditBackground bg={bg} avatar={imgSrc} onclose={handleCloseEditBg} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile