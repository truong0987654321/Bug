import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs } from '@navikt/ds-react';
import apiClient from "../../../lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../../utils/constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAppstore } from '../../../store';
const icon = '/assets/img/login2.png';


const Auth = () => {

    const navigate = useNavigate();
    const { setUserInfo } = useAppstore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validateLogin = () => {
        if (!email.length) {
            toast.error("Email is required.")
            return false;
        }

        if (!emailPattern.test(email)) {
            toast.error("Invalid email format.");
            return false;
        }
        if (!password.length) {
            toast.error("Password is required.")
            return false;
        }
        return true;
    }
    const handleLogin = async () => {
        if (validateLogin()) {
            const response = await apiClient.post(
                LOGIN_ROUTE,
                { email, password },
                { withCredentials: true }
            )
            if (response.data.user.id) {
                setUserInfo(response.data.user);
                if (response.data.user.profileSetup) navigate("/");
                else navigate("/profile");
            }
        }
    };

    const validateSinnup = () => {
        if (!email.length) {
            toast.error("Email is required.")
            return false;
        }
        if (!emailPattern.test(email)) {
            toast.error("Invalid email format.");
            return false;
        }
        if (!password.length) {
            toast.error("Password is required.")
            return false;
        }
        if (!confirmPassword.length) {
            toast.error("Confirm Password is required.")
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Password and Confirm password should be same.")
            return false
        }
        return true;
    }
    const handleSignup = async () => {
        if (validateSinnup()) {
            const response = await apiClient.post(
                SIGNUP_ROUTE,
                { email, password, confirmPassword },
                { withCredentials: true }

            )
            if (response.data === 201) {
                setUserInfo(response.data.user);
                navigate("/profile");
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Auth | Bug</title>
            </Helmet>
            <ToastContainer />
            <div className='h-100vh w-100vw d-flex justify-content-center align-items-center'>
                <div className='h-80vh bg-soft-white shadow-2xl w-80vw d-grid rounded-3 xl-grid-cols-2'>
                    <div className='d-flex flex-column gap-10 align-items-center justify-content-center'>
                        <div className='d-flex align-items-center justify-content-center flex-column' style={{ width: '80%' }}>
                            <div className='d-flex align-items-center justify-content-center'>
                                <h1 className='text-5xl lh-1 fw-bold ' style={{ marginBottom: 0 }}>Welcome</h1>
                                <i className='d-flex align-items-center justify-content-center h-50 yellow-color px-3 icon-hand-peace'></i>
                            </div>
                            <p className='fw-500 text-center'>
                                Fill in the details to get started with the best chat app!
                            </p>
                        </div>
                        <div className="d-flex justify-content-center w-100">
                            <div className="w-75">
                                <Tabs defaultValue="login">
                                    <Tabs.List className='d-flex flex-nowrap'>
                                        <Tabs.Tab value="login" label="Login" className='flex-grow-1 tab p-3' />
                                        <Tabs.Tab value="signup" label="Signup" className='flex-grow-1 tab p-3' />
                                    </Tabs.List>

                                    <Tabs.Panel value="login">
                                        <div className='py-3'>

                                            <input
                                                type='email'
                                                placeholder='Email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className='input-group form-control form-control-lg'
                                            />
                                        </div>
                                        <div className='py-3'>
                                            <input
                                                type='password'
                                                placeholder='Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className='input-group form-control form-control-lg'
                                            />
                                        </div>
                                        <div className='py-3'>
                                            <button className='btn btn-sm btn-primary w-100 bd-50' onClick={handleLogin}>Login</button>
                                        </div>


                                    </Tabs.Panel>
                                    <Tabs.Panel value="signup">
                                        <div className='py-3'>

                                            <input
                                                type='email'
                                                placeholder='Email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className='input-group form-control form-control-lg'
                                            />
                                        </div>
                                        <div className='py-3'>
                                            <input
                                                type='password'
                                                placeholder='Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className='input-group form-control form-control-lg'
                                            />
                                        </div>
                                        <div className='py-3'>
                                            <input
                                                type='password'
                                                placeholder='Confirm Password'
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className='input-group form-control form-control-lg'
                                            />
                                        </div>
                                        <div className='py-3'>
                                            <button
                                                className='btn btn-sm btn-primary w-100'
                                                onClick={handleSignup}
                                            >
                                                Sginup</button>
                                        </div>


                                    </Tabs.Panel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className='d-none d-xl-flex align-items-center justify-content-center'>
                        <img src={icon} alt="Login Icon" style={{ height: '500px' }} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Auth;