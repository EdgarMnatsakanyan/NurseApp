import React, { useState } from 'react';
import cl from './PaymentMethod.module.css';
import AddCard from '../addcard/AddCard';
import AddBank from '../addbank/AddBank';
import VisaCard from '../visacard/VisaCard';
import BankVisa from '../addbankvisa/BankVisa';
import PostForm from '../postform/PostForm';
import PostSection from '../postsection/PostSection';
import { ReactComponent as Method } from './NotFound.svg';
import { useTranslation } from 'react-i18next';

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
        setPosts([...posts, newCard], posts.length > 0)
        setAddBank(false)
        setAddCard(false)
    }
    
    const createSecondCount = (newValue) => {
        setValue([...value, newValue], value.length > 0)
        setAddBank(false)
        setAddCard(false)
    }


    return (
        <div className={cl.container}>
        {isShown ? (
            <div className={cl.sectionContainer}>
                <p className={cl.sectionName}>{t("payment.title")}</p>
                    <div className={cl.cardContainer}>
                        {posts.map((data) => {
                            return (
                                <div className={cl.sectionCard} >
                                    <VisaCard card={data} />
                                </div>
                            )
                        })}
                        <AddCard visible={addCard} setVisible={setAddCard}>
                            <PostForm create={createCard} onClick={handleAdd}/>    
                        </AddCard>
                    </div>
                <button className={cl.addCardBtn} onClickCapture={handleAdd} onClick={() => setAddCard(true)}>+ {t("payment.buttonone")}</button>
                <div className={cl.line}/>
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
                            <AddBank visible={addBank} setVisible={setAddBank}>
                                <PostSection create={createSecondCount} onClick={handleValueAdd}/>
                            </AddBank>
                    </div>

                </div>
                    <button className={cl.addCardBtn} onClickCapture={handleSecondAdd} onClick={() => setAddBank(true)}>+ {t("payment.buttonthree")}</button>
            </div>
        ) : (
            <div className={cl.cardContainer}>
                <div className={cl.sectionCardContainer}>
                    <div className={cl.title}>
                        <h6>{t("payment.titlethree")}</h6>
                    </div>
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