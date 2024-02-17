import React, { useState } from 'react';
import MyInput from '../addcardinput/MyInput';
import MyButton from '../addbutton/MyButton';
import cl from './PostSection.module.css';
import { useTranslation } from 'react-i18next';

const PostSection = ({ create }) => {
    const { t } = useTranslation();
    const [value, setValue] = useState([])

    const addPost = (el) => {
        el.preventDefault()
        const newValue = {
            ...value, id: Date.now()
        }
        
        create(newValue)
        setValue({
            number: '',
            email: '',
            iban: '' 
        })
    }

    return (
        <>
            <div className={cl.container}>
                <MyInput 
                value={value.number}
                onChange={el => setValue({...value, number: el.target.value})}
                placeholder='Account holder name *'
                />
                <MyInput 
                value={value.email}
                onChange={el => setValue({...value, email: el.target.value})}
                placeholder='Email *'
                />
                <MyInput 
                value={value.iban}
                onChange={el => setValue({...value, iban: el.target.value})}
                placeholder='IBAN *'
                />
            </div>
            <MyButton onClick={addPost} >{t("addbank.titlepost")}</MyButton>
        </>
    );
};

export default PostSection;