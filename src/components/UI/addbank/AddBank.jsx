import React from 'react';
import cl from './AddBank.module.css';
import { RxCross2 } from 'react-icons/rx';
import { TbLock } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
const AddBank = ({children, visible, setVisible}) => {
    const { t } = useTranslation();
    const showAddBank = [cl.addbankContainer]
    if(visible) {
        showAddBank.push(cl.active)
    }
    return (
        <div className={showAddBank.join(' ')}>
            <div className={cl.addBankSection}>
                <div className={cl.titleSection}>
                    <h2>{t("addbank.titleh2")}</h2>
                    <RxCross2 className={cl.Icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.inputSection}>
                    {children}
                    <p className={cl.secureTitle}>
                        <TbLock className={cl.iconSecure}/>
                        {t("addbank.titlepayment")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddBank;