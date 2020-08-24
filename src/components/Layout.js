import React from 'react';
import Header from './shared/header';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({ children}) => {
    return ( 
        <>
        <Header/>
        <main className="container">
            {children}
        </main>
        </>
    );
}

export default Layout;