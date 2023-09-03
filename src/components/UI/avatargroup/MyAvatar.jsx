import React, { useEffect, useRef, useState } from 'react';
import cl from './MyAvatar.module.css'
import { FaChevronDown } from 'react-icons/fa6'
import { VscAccount } from "react-icons/vsc";
import NavBar from '../navbar/NavBar';
import { useTranslation } from 'react-i18next';

const MyAvatar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropDownRef = useRef(null)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
        <button className={cl.avatarGroup} onClick={toggleMenu}>
            <div className={cl.iconCont}>
            <VscAccount className={cl.icon}/>
            </div>
            <div className={cl.nameJoin}>
            <h4>Edgar Mnatsakanyan</h4>
            <p>{t("myProfile.navMenu.day")}</p>
            </div>
            <FaChevronDown />
        </button>
        {isMenuOpen && (
        <NavBar />
        )}
        </div>
    );
};

export default MyAvatar;