import React, {useState} from 'react';
import cl from './MasterCard.module.css';
import { ReactComponent as Master } from '../../../assets/paymentmethod/mastercard.svg';
import { HiDotsHorizontal, HiDotsVertical } from 'react-icons/hi';

const MasterCard = () => {
    const [isOpenTwo, setIsOpenTwo] = useState(false);

    const toggleTwoDot =() => {
        setIsOpenTwo(!isOpenTwo);
    };

    return (
        <div className={cl.visaSection}>
            <div className={cl.background}>
            <Master />
            </div>
            <div className={cl.visaCard}>
                <div className={cl.visaIn}>
                <p className={cl.visa}>Visa Card</p>
                <p><HiDotsHorizontal/>3838 <span>10 / 24</span></p>
                </div>
                <HiDotsVertical className={cl.dot} onClick={toggleTwoDot}/>
                {isOpenTwo && (
                    <div className={cl.cardOne}>
                        <p>Make default cord</p>
                        <p style={{color: "red"}}>Delete card</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MasterCard;