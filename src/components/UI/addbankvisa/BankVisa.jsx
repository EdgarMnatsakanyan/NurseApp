import React, { useState } from 'react';
import cl from './BankVisa.module.css'
import { PiBankBold } from 'react-icons/pi';
import { HiDotsVertical } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const BankVisa = ({data}) => {
    const { t } = useTranslation();
    const [isOpenThree, setIsOpenThree] = useState(false);
    const [isRemove, setIsRemove] = useState(true);
    const removeElement = () => {
        setIsRemove((prev) => !prev)
    };
    const toggleThreeDot =() => {
        setIsOpenThree(!isOpenThree);
    };

    return (
        <div>
            <div className={cl.container} onClick={toggleThreeDot}>
                {isRemove && (
                <div className={cl.visaSection} onClick={setIsOpenThree}>
                    <div className={cl.background}>
                    <PiBankBold className={cl.icon}/>
                    </div>
                    <div className={cl.visaCard} >
                        <div className={cl.visaOn}>
                        <p className={cl.visaa}>{data.name}</p>
                        <p className={cl.iban}>{data.iban}</p>
                        </div>
                        <HiDotsVertical className={cl.dot} onClick={toggleThreeDot}/>
                        {isOpenThree && (
                            <div className={cl.cardOne}>
                                <p>{t("bankvisa.title")}</p>
                                <p style={{color: "red"}} onClick={removeElement}>{t("bankvisa.titletwo")}</p>
                            </div>
                        )}
                    </div>    
                </div>
                )}
            </div>
        </div>
    );
};

export default BankVisa;