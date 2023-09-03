import React, { useState } from 'react';
import MyInput from '../addcardinput/MyInput';
import MyButton from '../addbutton/MyButton';
import cl from './PostSection.module.css';
import { useTranslation } from 'react-i18next';

const PostSection = ({ create, setVisible }) => {
    const { t } = useTranslation();
    const [count, setCount] = useState({
        name: '',
        email: '',
        iban: ''
    })

    const addPost = (el) => {
        el.preventDefault()
        const newCount = {
            ...count, id: Date.now()
        }
        
        create(newCount)
        setCount({name: '',
                  email: '',
                  iban: '' 
                })
    }

    return (
        <form>
            <div className={cl.container}>
                <MyInput 
                value={count.name}
                onChange={el => setCount({...count, name: el.target.value})}
                placeholder='Account holder name *'
                />
                <MyInput 
                value={count.email}
                onChange={el => setCount({...count, email: el.target.value})}
                placeholder='Email *'
                />
                <MyInput 
                value={count.iban}
                onChange={el => setCount({...count, iban: el.target.value})}
                placeholder='IBAN *'
                />
            </div>
            <MyButton onClick={addPost} >{t("addbank.titlepost")}</MyButton>
        </form>
    );
};

export default PostSection;