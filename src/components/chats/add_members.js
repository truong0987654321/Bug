import React, { useState, useEffect } from 'react';
import SvgIcon from '../../svg/svg_icon';

const AddMembers = () => {

    return (
        <>
            <div className='offcanvas offcanvas-end offcanvas-aside' data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvas-add-members" style={{ visibility: 'hidden' }} aria-hidden="true">
                <div className='offcanvas-header py-4 py-lg-7 border-bottom '>
                    <a className="icon icon-lg text-muted" href="#" data-bs-dismiss="offcanvas">
                        <SvgIcon name="angle-left-solid" className="" />
                    </a>
                    <div className='visibility-xl-invisible overflow-hidden text-center'>
                        <h5 className='text-truncate'>Members</h5>
                        <p className='text-truncate'>Add new members</p>
                    </div>
                    <a className="icon icon-lg text-muted" data-bs-toggle="collapse" href="#search-members" role="button" aria-expanded="false" aria-controls="search-members">
                        <SvgIcon name="filter-solid" className="" />
                    </a>
                </div>
                <div className='offcanvas-body hide-scrollbar py-0'>
                    <div className='collapse' id="search-members">
                        <div className='border-bottom py-6'>
                            <form action='#'>
                                <div className='input-group'>
                                    <div className='input-group-text' id='search-user'>
                                        <div className='icon icon-lg'>
                                            <SvgIcon name="magnifying-glass-solid" className="" />
                                        </div>
                                    </div>
                                    <input className='form-control form-control-lg ps-0' type='text' placeholder='User name ' aria-label='User name' aria-describedby="search-user" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <small className="text-uppercase text-muted">M</small>
                        </li>
                        <li className='list-group-item'>
                            <div className='row align-items-center gx-5'>
                                <div className='col-auto'>
                                    <div className='avatar avatar-online'>
                                        <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fhinh-meme-meo-doi.jpg?alt=media&token=b509c3b1-2832-4d41-958f-7d569cc3b2a8' />
                                    </div>
                                </div>
                                <div className='col'>
                                    <h5>Meo dark</h5>
                                    <p>last seen 3 days ago</p>
                                </div>
                                <div className='col-auto'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="id-add-user-user-1" />
                                        <label className="form-check-label" htmlFor="id-add-user-user-1"></label>
                                    </div>
                                </div>
                            </div>
                            <label className="stretched-label" htmlFor="id-add-user-user-1"></label>
                        </li>
                        <li className='list-group-item'>
                            <small className="text-uppercase text-muted">D</small>
                        </li>
                        <li className='list-group-item'>
                            <div className='row align-items-center gx-5'>
                                <div className='col-auto'>
                                    <div className='avatar '>
                                        <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf' />
                                    </div>
                                </div>
                                <div className='col'>
                                    <h5>Dark Hơi Nhiều</h5>
                                    <p>last seen 3 days ago</p>
                                </div>
                                <div className='col-auto'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="id-add-user-user-2" />
                                        <label className="form-check-label" htmlFor="id-add-user-user-2"></label>
                                    </div>
                                </div>
                            </div>
                            <label className="stretched-label" htmlFor="id-add-user-user-2"></label>
                        </li>
                    </ul>
                </div>
                <div className='offcanvas-footer border-top py-4 py-lg-7'>
                    <a className='btn btn-lg btn-primary w-100 d-flex align-items-center' href='#'>
                        Add members
                        <span className='icon ms-auto' style={{ transform: 'rotate(180deg)' }}>
                            <SvgIcon name="angle-left-solid" className="" />
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default AddMembers;
