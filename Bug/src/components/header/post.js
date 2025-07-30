import React from 'react'

export const Post = () => {
    return (
        <>
            <div className='b-float-dialog header-newpost-dialog'>

                <div style={{ paddingBottom: 16 }}>
                    <div className='b-post-new b-header-post-new'>
                        <div className='b-post-new__title'>
                            Post now~
                        </div>
                        <div className='b-post-new__content'>
                            <div className='b-button b-post-new__post b-button-header b-button-md'>
                                <button className='b-button__button' title='Post'>
                                    <div className=' b-symbol-icon symbol-icon-post'>
                                        <i className='b-symbol-icon icon-pen-to-square' style={{ fontSize: 20 }}></i>
                                    </div>
                                    <span>Post</span>
                                    <i className='transform-rotate-180 b-icon icon-angle-left'></i>
                                </button>
                            </div>
                            <div className='b-button b-post-new__post b-button-header b-button-md'>
                                <button className='b-button__button' title='Post'>
                                    <div className='b-symbol-icon symbol-icon-post' >
                                        <i className='b-symbol-icon icon-image' style={{ fontSize: 20 }}></i>
                                    </div>
                                    <span>Image</span>
                                    <i className='transform-rotate-180 b-icon icon-angle-left'></i>
                                </button>
                            </div>
                            <div className='b-button b-post-new__post b-button-header b-button-md'>
                                <button className='b-button__button' title='Post'>
                                    <div className='b-symbol-icon symbol-icon-post'>
                                        <i className='b-symbol-icon icon-video' style={{ fontSize: 20 }}></i>
                                    </div>
                                    <span>Video</span>
                                    <i className='transform-rotate-180 b-icon icon-angle-left'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
