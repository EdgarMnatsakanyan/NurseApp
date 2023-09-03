import React,{ useState } from 'react';
import cl from './Settings.module.css';
import { FaEyeSlash, FaEye } from 'react-icons/fa6'
import DeactivateAccount from '../deactivateaccount/DeactivateAccount';
import { useTranslation } from 'react-i18next';
const Settings = ({visible, setVisible}) => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [seePassword, setSeePassword] = useState(false)
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert(`Password confired: ${confirmPassword}`);
        } else {
            setPasswordMatch(false);
        }
      };

    const toggleVisibility = () => {
        setSeePassword(!seePassword);
    };
  
  return (
        <div className={cl.allContainer}>
            <p className={cl.namePage}>{t("setting.namepage")}</p>
            <div className={cl.onContainer}>
                    <div className={cl.firstInput}>
                    <input 
                    onChange={handlePasswordChange}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Current password*'
                    />
                    <button className={cl.iconOne} onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEye /> : <FaEyeSlash/>}
                    </button>
                    </div>
                    <div className={cl.secondINput}>
                    <input 
                    onChange={handleConfirmPasswordChange}
                    type={seePassword ? 'text' : 'password'}
                    placeholder='New password*'
                    />
                    <button className={cl.iconOne} onClick={toggleVisibility}>
                        {seePassword ? <FaEye /> : <FaEyeSlash/>}
                    </button>
                    </div>
                    <button className={cl.btnChange} onClick={handleSubmit}>{t("setting.buttonchange")}</button>
            </div>
            <hr />
            <div>
                {!passwordMatch && <p style={{color: 'red', alignItems: 'center', display: 'flex', gap: 8}}> {t("setting.errormessage")}</p>}
                <button className={cl.btnDeactivate} onClick={() => setModal(true)}>{t("setting.buttondeactive")}</button>
                <DeactivateAccount visible={modal} setVisible={setModal} />
            </div>  
        </div>
    );
};

export default Settings;