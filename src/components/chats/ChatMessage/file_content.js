
import React from "react";


const FileContent = ({ chat, customClass }) => {

    return (
        <>
            <div className='row align-items-center gx-4'>
                <div className="col-auto" >
                    <a className='avatar avatar-sm' href={chat.content.file_url} target="_blank" rel="noopener noreferrer">
                        <div className={`avatar-text ${customClass} bg-white text-primary` }>
                            <i className="m-left-3 icon-arrow-down"></i>
                        </div>
                    </a>
                </div>
                <div className='col overflow-hidden'>
                    <h6 className='text-truncate text-reset'>
                        <a className='text-reset'>{chat.content.file_name}</a>
                    </h6>
                    <ul className='list-inline text-uppercase extra-small opacity-75 mb-0'>
                        <li className='list-inline-item'>{chat.content.file_size}</li>
                    </ul>
                </div>
            </div>

        </>
    );
};
export default FileContent;