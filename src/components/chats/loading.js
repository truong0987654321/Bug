import React from 'react';



const Loading = () => {


    return (
        <>
            <main className='main'>
                <div className='container h-100'>
                    <div className='d-flex flex-column h-100 justify-content-center text-center'>
                        <div className='mb-6'>
                            Loading...
                        </div>
                        <div className='text-muted'>
                            <p className='text-muted'>Please wait a moment</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Loading;
