
import React from 'react';
import Header from './Header';
import Menu from './Menu';

import { useEffect,useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Cookies from 'js-cookie';


const Template = ({ children }) => {
    
  const [cookie, setCookie] = useState(Cookies.get('admin_logged_in'));

    function isAuthenticated() {
        const authCookie = Cookies.get('admin_logged_in');
        return authCookie === 'true';
    }
    
    return (
        <div>
        {isAuthenticated() ? (
            <>
                <Header />
                <Menu />
            </>
        ) : null}
        {children}
    </div>
    );
    }


export default Template;