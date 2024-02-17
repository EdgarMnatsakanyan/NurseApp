import React, { useState } from 'react';
import cl from './styles/PaymentMethod.module.css';
import { AiOutlineLock } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import AddCard from '../ProfileMenuWindow/Modal/addCard/AddCard';
import AddBank from '../ProfileMenuWindow/Modal/addBank/AddBank';
import VisaCard from '../UI/visacard/VisaCard';
import BankVisa from '../UI/addbankvisa/BankVisa';
import { ReactComponent as Method } from '../UI/paymentmethod/NotFound.svg';

const PaymentMethod = () => {
    const [addCard, setAddCard] = useState(false);
    const [addBank, setAddBank] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState([]);
    const { t } = useTranslation();

    const handleClick = () => {
        setIsShown(current => !current);
    }

    const handleAdd = () => {
        setAddBank(false)
        setAddCard(true)
    }

    
    const handleValueAdd = () => {
        setAddBank(true)
        setAddCard(false)
        
    }

    
    const handleSecondAdd = () => {
        setAddBank(true)
        setAddCard(false)
    }

    const createCard = (newCard) => {
        setPosts([...posts, newCard])
        setAddBank(false)
        setAddCard(false)
    }

    const createSecondCount = (newValue) => {
        setValue([...value, newValue])
        setAddBank(false)
        setAddCard(false)
    }

    return (
        <div className={cl.container}>
        {isShown ? (
            <div className={cl.sectionContainer}>
                <p className={cl.sectionName}>Credit card</p>
                    <div className={cl.cardContainer}>
                        {posts.map((data) => {
                            return (
                                <div className={cl.sectionCard} >
                                    <VisaCard card={data} />
                                </div>
                            )
                        })}
                        <AddCard visible={addCard} create={createCard} onClick={handleAdd} setVisible={setAddCard}/>
                    </div>
                <button className={cl.addCardBtn} onClickCapture={handleAdd} onClick={() => setAddCard(true)}>+ {t("payment.buttonone")}</button>
                <div>
                    <p className={cl.sectionName}>{t("payment.titletwo")}</p>

                    <div className={cl.cardContainer}>
                        {value.map((data) => {
                            return (
                                <div className={cl.sectionCard}>
                                    <BankVisa data={data}/>
                                </div>
                            )
                        })}
                            <AddBank visible={addBank} create={createSecondCount} onClick={handleValueAdd} setVisible={setAddBank}/>
                    </div>

                </div>
                    <button className={cl.addCardBtn} onClickCapture={handleSecondAdd} onClick={() => setAddBank(true)}>+ {t("payment.buttonthree")}</button>
            </div>
        ) : (
            <div className={cl.cardContainer}>
                <div className={cl.sectionCardContainer}>
                    <div className={cl.notingContainer}>
                        <Method />
                        <h4>{t("payment.h4")}</h4>
                        <h6>{t("payment.h6")}</h6>
                        <button className={cl.addBtn} onClick={handleClick}>+ {t("payment.button")}</button>
                    </div>
                </div>
            </div>
    )}
        </div>
    );
};

export default PaymentMethod;