import React from 'react';
import cl from './EditName.module.css'
import { RxCross2 } from 'react-icons/rx'
import { useTranslation } from 'react-i18next';

const EditName = ({visible, setVisible}) => {
    const { t } = useTranslation();

    const rootClasses = [cl.editContiner]
    if(visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.editSection}>
                <div className={cl.titles}>
                    <h2>{t("modalWindow.editnmae.name")}</h2>
                    <button onClick={() => setVisible(false)} ><RxCross2 /></button>
                </div>
                <hr />
                <div className={cl.btnSection}>
                    <input type="text" placeholder='Full name/ Company name*'/>
                    <button onClick={() => setVisible(false)}>{t("modalWindow.editnmae.button")}</button>
                </div>
            </div>
        </div>
    );
};

export default EditName;
