import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cl from './styles/Settings.module.css'
const Settings = () => {
    const [modal, setModal] = useState(false);
    const [currentShow, setCurrentShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const toggleCurentShow = () => {
        setCurrentShow(!currentShow);
    };

    const toggleNewShow = () => {
        setNewShow(!newShow);
    };

    const handleCurentPasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== newPassword) {
        alert(`Password confired: ${newPassword}`);
    } else {
        setPasswordMatch(false);
    }
    };
    return (
        <div className={cl.container}>
            <div className={cl.containerInputs}>
            <h4>Change password</h4>
                <div className={cl.inputContainer}>
                    <input 
                        type={currentShow ? 'text' : 'password'} 
                        placeholder='Current password'
                        onChange={handleCurentPasswordChange}
                    />
                    <button className={cl.iconBtn} onClick={toggleCurentShow}>
                        {currentShow ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className={cl.inputContainer}>
                    <input 
                        type={newShow ? 'text' : 'password'} 
                        placeholder='New password'
                        onChange={handleNewPasswordChange}
                    />
                    <button className={cl.iconBtn} onClick={toggleNewShow}>
                        {newShow ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className={cl.inputContainer}>
                    <input 
                        type={newShow ? 'text' : 'password'} 
                        placeholder='Confirm new password'
                        onChange={handleNewPasswordChange}
                    />
                    <button className={cl.iconBtn} onClick={toggleNewShow}>
                        {newShow ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button className={cl.btnChangePassword} onClick={handleSubmit}>Change password</button>
            </div>
            <button className={cl.btnDeactivate}>Deactivate account</button>
        </div>
    );
};

export default Settings;
