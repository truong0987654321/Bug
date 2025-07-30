import React, { useState } from 'react'
import Header from '../header';
import { Helmet } from 'react-helmet';

export const Setting = () => {
    const isAtTop = useState(true);
    return (
        <>
            <Helmet>
                <title>Setting | Bug</title>
                <link rel="stylesheet" href="./assets/css/profile.css" />
            </Helmet>
            <div className='root bug-group-b'>
                <Header isAtTop={isAtTop} />
            </div>
        </>
    )
}
