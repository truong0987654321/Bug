import React from 'react';
import SvgIcon from '../../svg/SvgIcon';

const sidebar_bg_light = () => {
    return (
        <aside className='sidebar bg-light'>
            <div className='tab-content h-100'>
                <div className='tab-pane fade h-100 active show' id='tab-content-chats'>
                    <div className='d-flex flex-column h-100 position-relative'>
                        <div className='hide-scrollbar'>
                            <div className='container py-8'>
                                <div className='mb-8'>
                                    <div className='fw-bold m-0'>Chats</div>
                                </div>

                                <div className='mb-6'>
                                    <form action=''>
                                        <div className='input-group'>
                                            <div className='input-group-text'>
                                                <div className='icon icon-lg'>
                                                    <SvgIcon name="magnifying-glass-solid" className="magnifying" />
                                                </div>
                                            </div>
                                            <input className='form-control form-control-lg ps-0' placeholder="Search messages or users" />
                                        </div>
                                    </form>
                                </div>

                                <div className='card-list'>
                                    <a href='#' className='card border-0 text-reset'>
                                        <div className='card-body'>
                                            <div className='row gx-5'>
                                                <div className='col-auto'>
                                                    <div className='avatar avatar-online'>
                                                        <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf' />
                                                    </div>
                                                </div>

                                                <div className='col'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <h5 className='me-auto mb-0'> Dark Hơi Nhiều</h5>
                                                        <span className='text-muted extra-small ms-2' id=''>12:45 PM</span>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='line-clamp me-auto'>
                                                            Meo meo meow meo meo meo meow meoww mmeo meo meo meo mewwwww meow???
                                                        </div>
                                                        <div className='badge badge-circle bg-primary ms-5'>
                                                            <span>3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='row align-items-center gx-4'>
                                                <div className='col-auto'>
                                                    <div className='avatar avatar-xs'>
                                                        <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fmeo-vang-dua-ngon-tay-like.jpg?alt=media&token=03bd5eaf-d99d-4ce9-8e35-af10c77c2470' />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <h6 className='mb-0'>
                                                        dark
                                                    </h6>
                                                </div>
                                                <div className='col-auto'>
                                                    <div className='avatar-group'>
                                                        <div className='avatar avatar-xs'>
                                                            <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fhinh-meme-meo-doi.jpg?alt=media&token=b509c3b1-2832-4d41-958f-7d569cc3b2a8'></img>
                                                        </div>
                                                        <div className='avatar avatar-xs'>
                                                            <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fuser.png?alt=media&token=d5b6cc4b-7719-4ae7-99e9-4cf5926fcd92'></img>
                                                        </div>
                                                        <div className='avatar avatar-xs'>
                                                            <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf'></img>
                                                        </div>
                                                        <div className='avatar avatar-xs'>
                                                            <span className='avatar-text' id=''>+99</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='#' className='card border-0 text-reset'>
                                        <div className='card-body'>
                                            <div className='row gx-5'>
                                                <div className='col-auto'>
                                                    <div className='avatar avatar-online'>
                                                        <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf' />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <h5 className='me-auto mb-0'>Dark Hơi Nhiều</h5>
                                                        <span className='text-muted extra-small ms-2'>12:45 PM</span>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='line-clamp me-auto'>
                                                            is typing
                                                            <span className='typing-dots'>
                                                                <span>.</span>
                                                                <span>.</span>
                                                                <span>.</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='#' className='card border-0 text-reset'>
                                        <div className='card-body'>
                                            <div className='row gx-5'>
                                                <div className='col-auto'>
                                                    <div className='avatar'>
                                                        <SvgIcon name="placeholder_img" className="avatar-img placeholder-img" />
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <h5 className='placeholder-glow w-100 mb-0'>
                                                            <span className='placeholder col-5'></span>
                                                        </h5>
                                                    </div>
                                                    <div className='placeholder-glow'>
                                                        <span className='placeholder col-12'></span>
                                                        <span className='placeholder col-8'></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tab-pane fade h-100'></div>
            </div>
        </aside>
    );
};
export default sidebar_bg_light;