import React from 'react'

export const Post = () => {
    return (
        <>
            <div className='mhy-float-dialog header-newpost-dialog'>
                <div>
                    <div className='mhy-post-new mhy-header-post-new'>
                        <div className='mhy-post-new__title'>
                            Post now~
                        </div>
                        <div className='mhy-post-new__content'>
                            <div className='mhy-button mhy-post-new__post mhy-button-header mhy-button-md'>
                                <button className='mhy-button__button' title='Post'>
                                    <div className='mhy-symbol-icon'>
                                        <i className='icon-pen-to-square'></i>
                                    </div>
                                    <span>Post</span>
                                    <i className='mhy-icon icon-angle-left'></i>
                                </button>
                            </div>
                            <div className='mhy-button mhy-post-new__post mhy-button-header mhy-button-md'>
                                <button className='mhy-button__button' title='Post'>
                                    <div className='mhy-symbol-icon'>
                                        <i className='icon-image'></i>
                                    </div>
                                    <span>Image</span>
                                    <i className='mhy-icon icon-angle-left'></i>
                                </button>
                            </div>
                            <div className='mhy-button mhy-post-new__post mhy-button-header mhy-button-md'>
                                <button className='mhy-button__button' title='Post'>
                                    <div className='mhy-symbol-icon'>
                                        <i className='icon-video'></i>
                                    </div>
                                    <span>Video</span>
                                    <i className='mhy-icon icon-angle-left'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
