import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './CreateAccountInputs.module.css';
import { useTranslation } from 'react-i18next';

const CreateAccountInputs = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAutenticated] = useState(false);
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('/forgetpassword')
    }
    const { t } = useTranslation();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlelogin = (event) => {
        event.preventDefault();

        if (email === 'edgar@mail.ru' && password === '123456789') {
            setIsAutenticated(true);
            console.log('Login successful!')
        } else {
            setIsAutenticated(false)
            console.log('Invalid credentials. Please try again.')
        }
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    alert('Username:', username, 'Email:', email, 'Password:', password);
    };

    return (
        <div >
            <form className={cl.sectionReg} onSubmit={handlelogin} style={{display: 'flex'}}>
                <input type="text" value={username} onChange={handleUsernameChange} placeholder='Full name/company name*' />
                <input type="email" value={email} onChange={handleEmailChange} placeholder='Email*' />
                <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password*' />
                <button className={cl.regBtn} onClickCapture={handleSubmit} onClick={handleContinue} type='submit' >{t("createanaccoutn.btnfour")}</button>
                {isAuthenticated && <p>{t("createanaccoutn.info")}, {email}!</p>}
            </form>
        </div>
    );
};

export default CreateAccountInputs;