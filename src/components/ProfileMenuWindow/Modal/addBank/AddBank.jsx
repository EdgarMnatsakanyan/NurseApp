import React, { useState } from 'react';
import cl from './AddBank.module.css';
import { RxCross2 } from 'react-icons/rx';
import { TbLock } from 'react-icons/tb';
import MyInput from '../../../UI/addcardinput/MyInput';
import MyButton from '../../../UI/addbutton/MyButton';


const AddBank = ({visible, setVisible, create}) => {
    const showAddCard = [cl.addCardContainer]
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

export default AddBank;