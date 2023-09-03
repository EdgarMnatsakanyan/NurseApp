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

const PaymentMethod = ({visible, setVisible}) => {
    const [addCard, setAddCard] = useState(false);
    const [addBank, setAddBank] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState([]);
    const { t } = useTranslation();

    

    const handleClick = event => {
        setIsShown(current => !current);
    }

    const handleAdd = () => {
        setAddBank(false)
        setAddCard(true)
    }

    const createCard = (newCard) => {
        setPosts([...posts, newCard])
        setAddBank(false)
        setAddCard(false)
    }

    const handleCountAdd = () => {
        setAddBank(true)
        setAddCard(false)
    }

    const createSecondCount = (newCount) => {
        setCount([...count, newCount])
        setAddBank(false)
        setAddCard(false)
    }

    const handleSecondAdd = () => {
        setAddBank(true)
        setAddCard(false)
    }

    console.log(count, 'count')
    return (
        <div className={cl.container}>
        {isShown ? (
            <div className={cl.sectionContainer}>
                <p className={cl.sectionName}>{t("payment.title")}</p>

                <div className={cl.cardContainer}>
                    {posts.map((data,index) => {
                            return (
                        <div className={cl.sectionCard} >
                            <VisaCard card={data} onCreate={({ number, name}) => {
                            }} />
                        </div>
                            )
                    })}
                    <AddCard visible={addCard} setVisible={setAddCard}>
                        <PostForm create={createCard} onClick={handleAdd}/>    
                    </AddCard>
                </div>

                <button className={cl.addCardBtn} onClickCapture={handleAdd} onClick={() => setAddCard(true)}>+ {t("payment.buttonone")}</button>
                <hr />
                <div>
                    <p className={cl.sectionName}>{t("payment.titletwo")}</p>
                    <div className={cl.cardContainer}>
                    {count.map((data,index) => {
                        return (
                            <div className={cl.sectionCard}>
                                <BankVisa data={data} onCreate={({ data, name }) => {
                            }} />
                            </div>
                        )
                    })}
                    <AddBank visible={addBank} setVisible={setAddBank}>
                        <PostSection create={createSecondCount} onClick={handleCountAdd}/>
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