import React, { useState, useEffect } from 'react';
import SvgIcon from '../../svg/svg_icon';

const MediaPreview = () => {
    return (
        <>
            <div className='modal fade' id='modal-media-preview' tabIndex='-1' aria-hidden="true">
                <div className='modal-dialog modal-xl modal-dialog-centered modal-fullscreen-xl-down'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type="button" className="btn-close btn-close-arrow" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div>
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
                        <div className='modal-body p-0'>
                            <div className='d-flex align-items-center justify-content-center h-100'>
                                <img className='img-fluid modal-preview-url' src=''/>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <div className='w-100 text-center'>
                                <h6>
                                    <a href='#'></a>
                                </h6>
                                <p className='small'>Today at 14:43</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MediaPreview;
