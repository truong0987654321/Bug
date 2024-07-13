import React, { useState, useEffect } from 'react';
import SvgIcon from '../../svg/svg_icon';

const More = () => {


    return (
        <>
            <div className="offcanvas offcanvas-end offcanvas-aside" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvas-more" aria-hidden="true">
                <div className='offcanvas-header py-4 py-lg-7 border-bottom'>
                    <a className="icon icon-lg text-muted" href="#" data-bs-dismiss="offcanvas">
                        <SvgIcon name="angle-left-solid" className="" />
                    </a>
                    <div className='visibility-xl-invisible overflow-hidden text-center'>
                        <h5 className='text-truncate'>dark</h5>
                        <p className='text-truncate'>100 members, 3 online</p>
                    </div>
                    <div className='dropdown'>
                        <a className="icon icon-lg text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <SvgIcon name="ellipsis-vertical-solid" className="" />
                        </a>
                        <ul className='dropdown-menu'>
                            <li>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    Edit
                                    <div className="icon ms-auto">
                                        <SvgIcon name="pen-solid" className="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    Mute
                                    <div className="icon ms-auto">
                                        <SvgIcon name="bell-solid" className="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a href="#" className="dropdown-item d-flex align-items-center text-danger">
                                    Leave
                                    <div className="icon ms-auto">
                                        <SvgIcon name="right-from-bracket-solid" className="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='offcanvas-body hide-scrollbar'>

                    <div className='text-center py-10'>
                        <div className='row gy-6'>
                            <div className='col-12'>
                                <div className='avatar avatar-xl mx-auto'>
                                    <img className="avatar-img" src="https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fmeo-vang-dua-ngon-tay-like.jpg?alt=media&amp;token=03bd5eaf-d99d-4ce9-8e35-af10c77c2470" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <h4>dark</h4>

                            </div>
                            <div className='col-12'>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-3' data-bs-toggle="tooltip" data-bs-original-title="<strong>Turn off notifications</strong>">
                                        <a className='avatar avatar-svg mx-auto' href='#'>
                                            <span className='avatar-text'>
                                                <SvgIcon name="bell-solid" className="" />
                                            </span>

                                        </a>
                                        <p className='py-3 text-truncate'>Turn off notifications</p>
                                    </div>
                                    {/* <div className='col-3' data-bs-toggle="tooltip" data-bs-original-title="<strong>Turn it back on</strong>">
                                        <a className='avatar avatar-svg mx-auto' href='#'>
                                            <span className='avatar-text'>
                                                <SvgIcon name="bell-slash-solid" className="" />
                                            </span>

                                        </a>
                                        <p className='py-3 text-truncate'>Turn it back on</p>
                                    </div> */}
                                    <div className='col-3' data-bs-toggle="tooltip" data-bs-original-title="<strong>Name</strong>">
                                        <a className='avatar  avatar-svg mx-auto' href='#'>
                                            <span className='avatar-text '>
                                                <SvgIcon name="pen-solid" className="" />
                                            </span>

                                        </a>
                                        <p className='py-3'>Name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className='nav nav-pills nav-justified' role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="pill" href="#offcanvas-group-tab-members" role="tab" aria-controls="offcanvas-group-tab-members" aria-selected="true">
                                People
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-group-tab-media" role="tab" aria-controls="offcanvas-group-tab-media" aria-selected="false">
                                Media
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-group-tab-files" role="tab" aria-controls="offcanvas-group-tab-files" aria-selected="false">
                                Files
                            </a>
                        </li>
                    </ul>

                    <div className='tab-content py-2' role="tablist">
                        <div className='tab-pane fade active show' id='offcanvas-group-tab-members' role='tabpanel'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <div className='row align-items-center gx-5'>
                                        <div className='col-auto'>
                                            <a href='#' className='avatar avatar-online'>
                                                <img className='avatar-img' src='https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fhinh-meme-meo-doi.jpg?alt=media&token=b509c3b1-2832-4d41-958f-7d569cc3b2a8' />
                                            </a>
                                        </div>
                                        <div className='col'>
                                            <h5><a href='#'>Mew Dark</a></h5>
                                            <p>online</p>
                                        </div>
                                        <div className='col-auto'>
                                            <span className='extra-small text-primary'>owner</span>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='dropdown'>
                                                <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <SvgIcon name="ellipsis-vertical-solid" className="" />
                                                </a>
                                                <ul className='dropdown-menu'>
                                                    <li>
                                                        <a className='dropdown-item d-flex align-items-center'>
                                                            View profile
                                                            <div className='className="icon ms-auto"'>
                                                                <SvgIcon name="right-from-bracket-solid" className="" />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className='dropdown-item d-flex align-items-center text-danger'>
                                                            Delete
                                                            <div className='className="icon ms-auto"'>
                                                                <SvgIcon name="right-from-bracket-solid" className="" />
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='tab-pane fade' id='offcanvas-group-tab-media' role="tabpanel">
                            <div className='row row-cols-3 g-3 py-6'>
                                <div className='col'>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf">
                                        <img className="img-fluid rounded" src="https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2FOIP.jpg?alt=media&token=f167f20a-40a9-4e7d-af97-4d2bca9249cf" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='tab-pane fade' id='offcanvas-group-tab-files' role="tabpanel">
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <div className='row align-items-center gx-5'>
                                        <div className='col-auto'>
                                            <div className='avatar-group'>
                                                <a href='#' className='avatar avatar-sm'>
                                                    <img className="avatar-img" src="https://firebasestorage.googleapis.com/v0/b/webbug-38054.appspot.com/o/user%2Fhinh-meme-meo-doi.jpg?alt=media&token=b509c3b1-2832-4d41-958f-7d569cc3b2a8" />

                                                </a>
                                                <a href='#' className='avatar avatar-sm'>
                                                    <span className='avatar-text bg-primary svg-m-r'>
                                                        <SvgIcon name="file-lines-solid" className="" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col overflow-hidden'>
                                            <h5 className='text-truncate'>
                                                <a href='#' >
                                                    E5419783-047D-4B4C-B30E-F24DD8247731.JPG
                                                </a>
                                            </h5>
                                            <ul className='list-inline m-0'>
                                                <li className='list-inline-item'>
                                                    <small className='text-uppercase text-muted'>79.2 KB</small>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <small className='text-uppercase text-muted'>txt</small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='dropdown svg-w-2rem'>
                                                <a className="icon icon-lg text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <SvgIcon name="ellipsis-vertical-solid" className="" />
                                                </a>
                                                <ul className='dropdown-menu'>
                                                    <li>
                                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                                            Download
                                                            <div className="icon ms-auto">
                                                                <SvgIcon name="cloud-arrow-down-solid" className="" />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                                            Share
                                                            <div className="icon ms-auto">
                                                                <SvgIcon name="share-nodes-solid" className="" />
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item d-flex align-items-center text-danger">
                                                            Delete
                                                            <div className="icon ms-auto">
                                                                <SvgIcon name="trash-solid" className="" />
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default More;
