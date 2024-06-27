import React from 'react';
import SvgIcon from '../../svg/SvgIcon';

const main_chats = () => {
    return (
        <main className='main'>
            <div className='container h-100'>
                <div className='d-flex flex-column h-100 justify-content-center text-center'>
                    <div className="mb-6" >
                        <span className='icon icon-xl text-muted'>
                            <SvgIcon name="comment-solid" className="avatar-img placeholder-img" />
                        </span>
                    </div>
                    <span className='text-muted'>
                        Pick a person from left menu, <br></br>
                        and start your conversation.
                    </span>
                </div>
            </div>
        </main>
    );
};
export default main_chats;