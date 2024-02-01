import React, { useState } from 'react';
import cl from './EditLanguage.module.css';
import { RxCross2 } from 'react-icons/rx';
import { BiInfoCircle } from 'react-icons/bi';
import { FaTrashCan } from 'react-icons/fa6';
import EditInput from '../editlanguageinput/EditInput';
import { useTranslation } from 'react-i18next';

const EditLanguage = ({visible, setVisible}) => {
    const { t } = useTranslation();

    const [count, setCount] = useState([]);

    const handleAdd = () => {
        const add = [...count,[]]
        setCount(add);
    }

    const handleChange = (onChangeValue, index) => {
        const inputData = [...count]
        inputData[index] = onChangeValue.target.value;
        setCount(inputData);
    }

    const handleDelete = (index) => {
        const deletCount = [...count]
        deletCount.splice(index, 1)
        setCount(deletCount);
    }

    const rootClasses = [cl.editLanguageContainer]
    if(visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.languageContianer}>
                <div className={cl.languageTitle}>
                    <h2>{t("modalWindow.editlanguage.language")}</h2>
                    <RxCross2 className={cl.icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.languageInputSection}>
                    <div className={cl.sectionSelect} >
                        <EditInput />
                        <FaTrashCan className={cl.inputTrash}/>
                    </div>
                    {count.map((index) => {
                        return (
                            <div className={cl.sectionSelect} onChange={e => handleChange(e,index)}>
                                <EditInput />
                                <FaTrashCan className={cl.inputTrash} onClick={() => handleDelete(index)}/>
                            </div>
                        )
                    })}
                    <button className={cl.addBtn} onClick={() => handleAdd()}>{t("modalWindow.editlanguage.buttonone")}</button>
                    <button className={cl.confirmBtn} onClick={() => setVisible(false)}>{t("modalWindow.editlanguage.buttontwo")}</button>
                    <p className={cl.infoChanging}><BiInfoCircle className={cl.infoIcon}/>{t("modalWindow.editlanguage.changelng")}</p>
                </div>
            </div>
        </div>
    );
};

export default EditLanguage;