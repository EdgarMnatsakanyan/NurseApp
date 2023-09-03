import React from 'react';
import cl from './NavBar.module.css'
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi'
import { FaRegCreditCard, FaGift } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const handleContinue = () => {
    navigate('/')
  }
    return (
        <div className={cl.listContainer} >
        <div className={cl.list}>
            <div className={cl.background}>
            <BsPersonCircle className={cl.icons}/>
            </div>
            <h5>{t("myProfile.navMenu.myprofile")}</h5>
        </div>
        <div className={cl.list}>
            <div className={cl.background}>
            <FaRegCreditCard className={cl.icons}/>
            </div>
            <h5>{t("myProfile.navMenu.paymentmethod")}</h5>
        </div>
        <div className={cl.list}>
            <div className={cl.background}>
            <FaGift className={cl.icons}/>
            </div>
            <h5>{t("myProfile.navMenu.referfriends")}</h5>
        </div>
        <div className={cl.list}>
            <div className={cl.background}>
            <AiOutlineSetting className={cl.icons}/>
            </div>
            <h5>{t("myProfile.navMenu.settings")}</h5>
        </div>
        <div className={cl.list}>
            <div className={cl.background}>
            <FiHelpCircle className={cl.icons}/>
            </div>
            <h5>{t("myProfile.navMenu.helpandsupport")}</h5>
        </div>
        <hr />
        <div className={cl.list}>
            <div className={cl.background}>
            <BiLogOut className={cl.icons}/>
            </div>
            <h5 onClick={handleContinue}>{t("myProfile.navMenu.logout")}</h5>    
        </div>        
        </div>
    );
};

export default NavBar;