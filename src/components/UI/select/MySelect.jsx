import React from 'react';
import cl from './MySelect.module.css'

const MySelect = ({ onLanguageChange }) => {
    return (
        <select className={cl.mySelect} onChange={({ target }) => {
            onLanguageChange && onLanguageChange(target.value)
        }}>
            <option value='en'>EN</option>
            <option>RU</option>
        </select>
    );
};

export default MySelect;