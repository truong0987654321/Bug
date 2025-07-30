import React, { useEffect, useState } from 'react';
import Chats from './components/chats/index'
import Auth from './components/auth/index'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAppstore } from './store';
import apiClient from './lib/api-client';
import { GET_USER_INFO } from './utils/constants';
import Profile from './components/profile';
import { Loading } from './components/ui/loaders/loading';

const PrivateRoute = ({ children }) => {
    const { userInfo } = useAppstore();
    const isAuthenticated = !!userInfo;
    return isAuthenticated ? children : <Navigate to={"/auth"} />;
}
const AuthRoute = ({ children }) => {
    const { userInfo } = useAppstore();
    const isAuthenticated = !!userInfo;
    return isAuthenticated ? <Navigate to={"/chat"} /> : children;
}

export function App() {
    const { userInfo, setUserInfo } = useAppstore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await apiClient.get(GET_USER_INFO, { withCredentials: true });
                console.log(response.data)
                if (response.status === 200 && response.data.id) {
                    setUserInfo(response.data); // Cập nhật userInfo
                } else {
                    setUserInfo(undefined); // Clear userInfo nếu không tìm thấy
                }
            } catch (error) {
                setUserInfo(undefined);
            } finally {
                setLoading(false);
            }
        };
        if (!userInfo) {
            getUserData();
        } else {
            setLoading(false);
        }
    }, [userInfo, setUserInfo]);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )

    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={
                    <AuthRoute>
                        <Auth />
                    </AuthRoute>
                } />
                <Route path='/profile' element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />
                <Route path='/chat' element={
                        <Chats />
                    // <PrivateRoute>
                    // </PrivateRoute>
                } />
                <Route path='/edit' element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />
                <Route path='/setting' element={<Profile />} />
            </Routes>
        </BrowserRouter>


    )
}

