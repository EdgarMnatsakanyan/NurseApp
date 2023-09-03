import React from 'react';
import cl from './MyButton.module.css'
const MyButton = ({children,setVisible, ...props}) => {
    return (
        <button {...props} className={cl.cardBtn}>
            {children}
        </button>
    );
};

export default MyButton;