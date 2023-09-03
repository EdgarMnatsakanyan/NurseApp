import React, { useState } from 'react';
import cl from './VerificPass.module.css'

const VerificPass = ({onChange}) => {
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
        <div>
            <form action="">
            <input className={cl.VeraficInput} placeholder='-' value={values[0] || ''} onChange={({ nativeEvent }) => handleChange(0, nativeEvent.data)} type='text' maxLength={1}/>
            <input className={cl.VeraficInput} placeholder='-' value={values[1] || ''} onChange={({ nativeEvent }) => handleChange(1, nativeEvent.data)} type='text' maxLength={1}/>
            <input className={cl.VeraficInput} placeholder='-' value={values[2] || ''} onChange={({ nativeEvent }) => handleChange(2, nativeEvent.data)} type='text' maxLength={1}/>
            <input className={cl.VeraficInput} placeholder='-' value={values[3] || ''} onChange={({ nativeEvent }) => handleChange(3, nativeEvent.data)} type='text' maxLength={1}/>
            </form>
        </div>
    );
};

export default VerificPass;