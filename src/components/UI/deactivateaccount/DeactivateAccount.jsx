import React from 'react';
import cl from './DeactivateAccount.module.css';
import { RxCross2 } from 'react-icons/rx'
import { BiError } from 'react-icons/bi'
import { useTranslation } from 'react-i18next';
const DeactivateAccount = ({visible, setVisible}) => {
    const { t } = useTranslation();
    const rootClasses = [cl.deactivateAccount]
    if (visible) {
        rootClasses.push(cl.active)
    } 

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.deactivateContainer}>
                <div className={cl.title}>
                    <h3>{t("setting.deactivateAccount.h3")}</h3>
                    <RxCross2 className={cl.crossIcon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.sectionDeactivate}>
                    <BiError className={cl.errorIcon}/>
                    <p className={cl.titleDeactivate}>{t("setting.deactivateAccount.titledeactivate")}</p>
                    <div className={cl.btnSection}>
                    <button className={cl.btnOne} onClick={() => setVisible(false)}>{t("setting.deactivateAccount.buttonOne")}</button>
                    <button className={cl.btnDeactivate}>{t("setting.deactivateAccount.buttonTwo")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeactivateAccount;