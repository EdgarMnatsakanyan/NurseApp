import React from 'react';
import MyAvatar from './UI/avatargroup/MyAvatar'
import NavBarSection from './UI/navbarsection/NavBarSection';

const Profile = () =>  {
    

    return (
        <div className='navigation-container'>
            <div className='navigation'>
                  <h2 classname="nurse_title">Nurse app</h2>
                <div className='profile-group'>
                  <MyAvatar />
                </div>
            </div>
            <div className='background'></div>
            <NavBarSection />
        </div>
    );
};

export default Profile;



