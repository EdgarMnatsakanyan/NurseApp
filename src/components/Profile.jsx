import React from 'react';
import MyAvatar from './UI/avatargroup/MyAvatar'
import NavBarSection from './UI/navbarsection/NavBarSection';
import { ReactComponent as GooglePlay } from '../assets/FooterIcon/googleplay.svg';
import { ReactComponent as AppStore } from '../assets/FooterIcon/appstore.svg';

const Profile = () =>  {
    

    return (
        <div className='navigation-container'>
            <div className='navigation'>
                  <h2 className='nurseApp-logo'>Nurse app</h2>
                <div className='profile-group'>
                  <MyAvatar />
                </div>
            </div>
            <div className='background'></div>
            <NavBarSection />
            <footer className='Footer-Container'>
                <div className='footer_text-container'>
                    <p>How it works</p>
                    <p>Terems of use</p>
                </div>

                <div className='Footer-btnContainer'>
                    <div className='Footer-btn'>
                        <GooglePlay />
                        <span class="footer_btn-textContainer">
                            <span class="footer_btn-text">Download on the</span>
                            <span class="footer_btn-appText">App Store</span>
                        </span>
                    </div>
                    <div className='Footer-btn'>
                        <AppStore />
                        <span class="footer_btn-textContainer">
                            <span class="footer_btn-text">GET IT ON</span>
                            <span class="footer_btn-appText">Google Play</span>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Profile;



