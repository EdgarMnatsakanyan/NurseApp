import React, { useState } from 'react';
import MyAvatar from './UI/avatargroup/MyAvatar';
import MyProfile from './ProfileMenuWindow/MyProfile';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GooglePlay } from '../assets/FooterIcon/googleplay.svg';
import { ReactComponent as AppStore } from '../assets/FooterIcon/appstore.svg';
import PaymentMethod from './ProfileMenuWindow/PaymentMethod';
import ReferFriends from './ProfileMenuWindow/ReferFriends';
import Settings from './ProfileMenuWindow/Settings'
const ProfileMenu = () => {
    const navigate = useNavigate()
    const sections = ['profile_menu-sections'];
    const active = ['profile_menu-active'];
    const content = ['profile_menu-content'];
    const activeContent = ['profile_menu-activeContent'];
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const homePage = () => {
        navigate('/profile')
    }

    return (
        <div>
            <div className='navigation-container'>
                <div className='navigation'>
                    <h2 className='nurseApp-logo' onClick={homePage}>Nurse app</h2>
                    <div className='profile-group'>
                        <MyAvatar />
                    </div>
                </div>
            </div>

            <div className='profile_menu-container'>
                <div className='profile_menu-buttons'>
                    <button
                        className={toggleState === 1 ? active : sections}
                        onClick={() => toggleTab(1)}
                    >My Profile</button>
                    <button
                        className={toggleState === 2 ? active : sections}
                        onClick={() => toggleTab(2)}
                    >Payment method</button>
                    <button
                        className={toggleState === 3 ? active : sections}
                        onClick={() => toggleTab(3)}
                    >Refer friends</button>
                    <button
                        className={toggleState === 4 ? active : sections}
                        onClick={() => toggleTab(4)}
                    >Settings</button>
                    <button
                        className={toggleState === 5 ? active : sections}
                        onClick={() => toggleTab(5)}
                    >Help and support</button>
                </div>
                <div className='profile_menu-windows'>
                    <div className={toggleState === 1 ? activeContent : content}>
                        <MyProfile />
                    </div>
                    <div className={toggleState === 2 ? activeContent : content}>
                        <PaymentMethod />
                    </div>
                    <div className={toggleState === 3 ? activeContent : content}>
                        <ReferFriends />
                    </div>
                    <div className={toggleState === 4 ? activeContent : content}>
                        <Settings />
                    </div>
                    <div className={toggleState === 5 ? activeContent : content}>

                    </div>
                </div>
            </div>
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

export default ProfileMenu;