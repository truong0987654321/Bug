import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HelmetProvider,Helmet } from 'react-helmet-async'
import jQuery from 'jquery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <HelmetProvider>
        <Helmet>
            <script src="http://localhost:3000/assets/js/vendor.js" />
            <script src="http://localhost:3000/assets/js/template.js" />
            <script>console.log("test")</script>
        </Helmet>
            <App />
            <div className='jsd'></div>
        </HelmetProvider>
    </>
)