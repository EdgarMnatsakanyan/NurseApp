import React, { useState } from 'react';
import cl from './VeraficInput.module.css'

const VeraficInput = ({ onChange }) => {
    const [values, setValues] = useState([]);

    const handleChange = (index, value) => {
        const number = (value || '').replace(/\D+/g, '');
        const newValues = [...values];
        newValues[index] = number;
        setValues(newValues);
        onChange && onChange(newValues.join(''));
        if (number && index < 3) {
        }
    };

    return (
        <div className={cl.veraficContainer}>
            <input className={cl.VeraficInput} placeholder='-' value={values[0] || ''} onChange={({ nativeEvent }) => handleChange(0, nativeEvent.data)} type='text' maxLength={1}/>
            <input className={cl.VeraficInput} placeholder='-' value={values[1] || ''} onChange={({ nativeEvent }) => handleChange(1, nativeEvent.data)} type='text' maxLength={1}/>
            <input className={cl.VeraficInput} placeholder='-' value={values[2] || ''} onChange={({ nativeEvent }) => handleChange(2, nativeEvent.data)} type='text' maxLength={1}/>
            <input className={cl.VeraficInput} placeholder='-' value={values[3] || ''} onChange={({ nativeEvent }) => handleChange(3, nativeEvent.data)} type='text' maxLength={1}/>
        </div>
    );
};

export default VeraficInput;