import React from 'react';
import cl from './EditInput.module.css';

const EditInput = () => {
    return (
        <div className={cl.editInputContainer}>
            <select className={cl.selectSection} >
                <option disabled selected hidden>Language</option>
                <option className={cl.optionSection}>Russian</option>
                <option className={cl.optionSection}>English</option>
            </select>
        </div>
    );
};

export default EditInput;