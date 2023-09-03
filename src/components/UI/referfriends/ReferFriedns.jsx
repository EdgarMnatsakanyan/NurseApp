import React, { useState } from 'react';
import cl from './ReferFriends.module.css'
import { ReactComponent as Gif } from './Gifts.svg';
import { RiInformationLine } from 'react-icons/ri'
import SeeFriends from '../seefriends/SeeFriends';
import InviteFriend from '../invitefriend/InviteFriend';
import { useTranslation } from 'react-i18next';


const ReferFriedns = () => {
    const { t } = useTranslation();
    const [showList, setShowList] = useState(false);
    const [showInvited, setShowInvited] = useState(false);

    if (showInvited) {
        return (
            <div className={cl.allContainer}>
                <InviteFriend onPressBack={() => setShowInvited(false)}/>
            </div>
        )
    }

    if (showList) {
        return (
            <div className={cl.allContainer}>
                 <SeeFriends onBackPress={() => setShowList(false)} />
            </div>
        );
    }
    
    return (
        <div className={cl.allContainer}>
            <div className={cl.referSection}>
                <div className={cl.titleSection}>
                    <Gif />
                    <p className={cl.infoRefer}>{t("referfriend.titleone")}</p>
                    <p className={cl.referAbout}>{t("referfriend.titletwo")}</p>
                </div>
            <hr />
                <div className={cl.contentSecion}>
                    <div className={cl.largeContainer}>
                        <div className={cl.sections}>
                            <p className={cl.saleMoney}>€34</p>
                            <p className={cl.about}>{t("referfriend.content.pOne")}</p>
                        </div>
                        <hr />
                        <div className={cl.sections}>
                            <p className={cl.saleMoney}>€34</p>
                            <p className={cl.about}>{t("referfriend.content.pTwo")}</p>
                        </div>
                    </div>

                    <div className={cl.largeContainer}>
                        <div className={cl.sections}>
                            <p className={cl.discount}>{t("referfriend.content.pThree")}</p>
                            <p className={cl.pracnetDiscount}>30% <RiInformationLine /></p>
                            <p className={cl.discountInfo}>{t("referfriend.content.pOne")}</p>
                        </div>
                        <hr />
                        <div className={cl.sections}>
                            <p className={cl.discount}>{t("referfriend.content.pThree")}</p>
                            <p className={cl.pracnetDiscount}>%20 <RiInformationLine /></p>
                            <p className={cl.discountInfo}>{t("referfriend.content.pTwo")}</p>
                        </div>
                    </div>

                    <div className={cl.largeContainer}>
                        <div className={cl.sections}>
                            <p className={cl.timeOut}>10mins</p>
                            <p className={cl.timeInfo}>{t("referfriend.content.pOne")}</p>
                        </div>
                        <hr />
                        <div className={cl.sections}>
                            <p className={cl.timeOut}>10mins</p>
                            <p className={cl.timeInfo}>{t("referfriend.content.pTwo")}</p>
                        </div>
                    </div>
                    
                </div>
                <div className={cl.btnSection}>
                    <p onClick={() => setShowList(true)}>{t("referfriend.content.pFour")}</p>
                    <button onClick={() => setShowInvited(true)}>{t("referfriend.content.button")}</button>
                </div>
            </div>
        </div>
    );
};

export default ReferFriedns;