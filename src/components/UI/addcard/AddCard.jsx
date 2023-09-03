import React from 'react';
import cl from './AddCard.module.css';
import { RxCross2 } from 'react-icons/rx';
import { TbLock } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
const AddBank = ({children, visible, setVisible}) => {
    const { t } = useTranslation();
    const showAddCard = [cl.addCardContainer]
    if(visible) {
        showAddCard.push(cl.active)
    }

    return (
        <div className={showAddCard.join(' ')} >
            <div className={cl.showCardSection}>
                <div className={cl.titleSection}>
                    <h2>{t("addcard.titleh2")}</h2>
                    <RxCross2 className={cl.icons} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.showBanksection}>
                    {children}
                    <p className={cl.secureTitle}>
                        <TbLock className={cl.iconSecure}/>
                        {t("addcard.titlepayment")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddBank;