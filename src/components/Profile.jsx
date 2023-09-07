import React, { useState } from 'react';
import MyAvatar from './UI/avatargroup/MyAvatar'
import NavBarSection from './UI/navbarsection/NavBarSection';
import { ReactComponent as ProfileLogo } from '../assets/profilelogo.svg';

const Profile = () =>  {
    

    return (
        <div className='navigation-container'>
            <nav className='navigation'>
                <div>
                  <h2 classname="nurse_title">Nurse app</h2>
                </div>
                <div className='profile-group'>
                  <MyAvatar />
                </div>
            </nav>
            <div className='background'></div>
            <NavBarSection />
        </div>
    );
};

export default Profile;



