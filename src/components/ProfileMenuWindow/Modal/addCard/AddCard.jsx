import React, { useState } from 'react';
import cl from './AddCard.module.css'
import { RxCross2 } from 'react-icons/rx';
import { TbLock } from 'react-icons/tb';
import MyInput from '../../../UI/addcardinput/MyInput';
import MyButton from '../../../UI/addbutton/MyButton';
import { CiCreditCard1 } from "react-icons/ci";

const AddCard = ({visible, setVisible, create}) => {
    const [value, setValue] = useState([])

    const addPost = (el) => {
        el.preventDefault()
        const newValue = {
            ...value, id: Date.now()
        }
        
        create(newValue)
        setValue({
            cardNumber: '',
            fullName: '',
            mountYear: '',
            cvc: ''
        })
    }

    const showAddCard = [cl.addCardContainer]
    if(visible) {
        showAddCard.push(cl.active)
    }
    return (
        <div className={showAddCard.join(' ')} >
            <div className={cl.showCardSection}>
                <div className={cl.titleSection}>
                    <RxCross2 className={cl.icons} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.showBanksection}>
                    <div className={cl.container}>
                        <div className={cl.inputContainer}>
                            <MyInput 
                            value={value.cardNumber}
                            onChange={el => setValue({...value, cardNumber: el.target.value})}
                            placeholder='Card number *'
                            />
                            <CiCreditCard1  className={cl.cardIcon}/>
                        </div>
                        <MyInput 
                        value={value.fullName}
                        onChange={el => setValue({...value, fullName: el.target.value})}
                        placeholder='Full name *'
                        />
                        <div className={cl.yearCvcContainer}>
                            <input 
                            value={value.mountYear}
                            className={cl.mmyyInput}
                            onChange={el => setValue({...value, mountYear: el.target.value})}
                            placeholder='MM/YY *'
                            />
                            <input 
                            value={value.cvc}
                            className={cl.cvcInput}
                            onChange={el => setValue({...value, cvc: el.target.value})}
                            placeholder='CVC *'
                            />
                        </div>
                    </div>
                    <p className={cl.secureTitle}>
                        <TbLock className={cl.iconSecure}/>
                        Your payment info will be secure
                    </p>
                    <MyButton onClick={addPost}>Save</MyButton>
                </div>
            </div>
        </div>
    );
};

export default AddCard;