import React, { Children, useEffect, useState } from 'react';
import Chats from './components/chats/index'
import Auth from './components/chats/auth/index'
import Profile from './components/chats/profile';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAppstore } from './store';
import apiClient from './lib/api-client';
import { GET_USER_INFO } from './utils/constants';

const PrivateRoute = ({ Children }) => {
    const { userInfo } = useAppstore();
    const isAuthenticated = !!userInfo;
    return isAuthenticated ? Children : <Navigate to={"/auth"} />
}
const AuthRoute = ({ Children }) => {
    const { userInfo } = useAppstore();
    const isAuthenticated = !!userInfo;
    return isAuthenticated ? <Navigate to={"/"} /> : Children
}

function App() {
    const { userInfo, setuserInfo } = useAppstore();
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await apiClient.get(
                    GET_USER_INFO,
                    { withCredentials: true })
                    console.log(response)
            } catch (error) {
                console.log({ error });

            }
        }
        if (!userInfo) {
            getUserData()
        } else {
            setLoading(false);
        }
    }, [userInfo, setuserInfo]);
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={
                    // <AuthRoute>
                    //     <Auth />
                    // </AuthRoute>
                                            <Auth />
                } />

                <Route path='/profile' element={
                    // <PrivateRoute>
                    //     <Profile />
                    // </PrivateRoute>
                    <Profile />
                } />
                <Route path='*' element={<Chats />} />
            </Routes>

        </BrowserRouter>


    )
}

export default App;  