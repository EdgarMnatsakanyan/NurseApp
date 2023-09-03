import React, { useState } from 'react';
import cl from './VisaCard.module.css'
import { SiVisa } from 'react-icons/si';
import { HiDotsVertical } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
const VisaCard = ({onCreate, card}) => {
    const { t } = useTranslation();
    const [isRemove, setIsRemove] = useState(true);
    const removeElement = () => {
        setIsRemove((prev) => !prev)
    };

    const [isOpenOne, setisOpenOne] = useState(false);
    const toggleOneDot =() => {
        setisOpenOne(!isOpenOne);
    };    

    return (
        <div>
        {isRemove && (
        <div className={cl.visaSection}>
            <div className={cl.background}>
                <SiVisa className={cl.icon}/>
                </div>
                <div className={cl.visaCard}>
                    <div className={cl.visaIn}>
                    <p className={cl.visa}>{card.nameCard}</p>
                    <p>{card.numberCard} <span>{card.dataCard}</span></p>
                    </div>
                    <HiDotsVertical className={cl.dot} onClick={toggleOneDot}/>
                    {isOpenOne && (
                        <div className={cl.cardOne}>
                            <p>{t("visacard.title")}</p>
                            <p style={{color: "red"}} onClick={removeElement} >{t("visacard.titletwo")}</p>
                        </div>
                    )}
                </div>
        </div>
        )}
        </div>
    );
};

export default VisaCard;