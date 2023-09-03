import React, { useState } from 'react';
import MyAvatar from './UI/avatargroup/MyAvatar'
import NavBarSection from './UI/navbarsection/NavBarSection';
import { ReactComponent as ProfileLogo } from '../assets/profilelogo.svg';

const Profile = () =>  {
    

    return (
        <div className='navigation-container'>
            <nav className='navigation'>
                <div>
                  <ProfileLogo />
                </div>
                <ul className='list-ul'>
                  <li>Job offers</li>
                  <li>Orders</li>
                </ul>
                <div className='profile-group'>
                  <MyAvatar />
                </div>
                <h1 className='line-profiletwo'></h1>
            </nav>
            <div className='background'></div>
            <NavBarSection />
        </div>
    );
};

export default Profile;



