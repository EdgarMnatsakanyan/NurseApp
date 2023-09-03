import React, { useState } from 'react';
import cl from './SeeFriends.module.css';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go'
import { ReactComponent as UserOne } from './assets/UserOne.svg';
import { ReactComponent as UserTwo } from './assets/UserTwo.svg';
import { ReactComponent as UserThree } from './assets/UserThree.svg';
import { ReactComponent as UserFour } from './assets/UserFour.svg';
import { ReactComponent as UserFive } from './assets/UserFive.svg';
import DeleteReferFriends from '../delreffriends/DeleteReferFriends';
import { useTranslation } from 'react-i18next';
const SeeFriends = ({ onBackPress, visible, setVisible }) => {
    const { t } = useTranslation();
    const [onShow, setOnShow] = useState(false);
    
    return (
        <div className={cl.seeFriendsContianer}>
            <div>
                <div className={cl.title}>
                    <p onClick={onBackPress}><FaArrowLeftLong />{t("seefriend.titleback")}</p>
                </div>
                <div className={cl.sectionSeeFriends}>
                    <div className={cl.sectionContent}>
                        <UserOne />
                        <div className={cl.ContentTitle}>
                            <p>Karen Margaryan</p>
                            <span><GoDotFill className={cl.active}/> {t("seefriend.qualified")}</span>
                        </div>
                    </div>
                    <div className={cl.sectionContent}>
                        <UserTwo />
                        <div className={cl.ContentTitle}>
                            <p>Jim Williams</p>
                            <span><GoDotFill className={cl.reagister}/> {t("seefriend.registered")}</span>
                        </div>
                    </div>
                    <div className={cl.sectionContent}>
                        <UserThree />
                        <div className={cl.ContentTitle}>
                            <p>Amy Somata</p>
                            <span><GoDotFill className={cl.reagister}/> {t("seefriend.registered")}</span>
                        </div>
                    </div>
                    <div className={cl.sectionContent}>
                        <UserFour />
                        <div className={cl.ContentTitle}>
                            <p>Anna Karenina</p>
                            <span><GoDotFill className={cl.active}/> {t("seefriend.qualified")}</span>
                        </div>
                    </div>
                    <div className={cl.sectionContent}>
                        <UserFive />
                        <div className={cl.ContentTitle}>
                            <p>John Lee</p>
                            <span><GoDotFill className={cl.active}/> {t("seefriend.qualified")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.btnSection}>
            <button className={cl.btnFriends} onClick={() => setOnShow(true)}>{t("seefriend.button")}</button>
            <DeleteReferFriends visible={onShow} setVisible={setOnShow}/>
            </div>
        </div>
    );
};

export default SeeFriends;