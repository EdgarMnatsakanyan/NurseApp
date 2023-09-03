import React, { useState } from 'react';
import cl from './InviteFriend.module.css';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { ReactComponent as Gif } from './Gifts.svg';
import SeeFriends from '../seefriends/SeeFriends';
import { useTranslation } from 'react-i18next';
const InviteFriend = ({onPressBack, onPressInvite}) => {
    const { t } = useTranslation();
    const [showList, setShowList] = useState(false);

    if (showList) {
        return (
            <div className={cl.allContainer}>
                 <SeeFriends onBackPress={() => setShowList(false)} />
            </div>
        );
    }
    return (
        <div className={cl.inviteFriendsContainer}>
           <div className={cl.sectional}>
                <div className={cl.backPage}>
                    <p onClick={onPressBack}><FaArrowLeftLong />{t("invitefriend.titleback")}</p>
                </div>
                <div className={cl.sectionAddFriends}>
                    <Gif />
                    <p className={cl.title}>{t("invitefriend.titleone")}</p>
                    <p className={cl.titleSecond}>{t("invitefriend.titletwo")}</p>
                    <button className={cl.btnFriends} onClick={() => setShowList(true)}>{t("invitefriend.button")}</button>
                </div>
            </div> 
        </div>
    );
};

export default InviteFriend;