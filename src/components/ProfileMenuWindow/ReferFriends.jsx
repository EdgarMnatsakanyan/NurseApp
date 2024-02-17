import React, { useState } from 'react';
import cl from './styles/ReferFriends.module.css';
import { ImInfo } from "react-icons/im";
import {ReactComponent as Gift} from '../UI/referfriends/Gifts.svg'




const ReferFriends = () => {

    const [onMouse, setOnMouse] = useState(false)
    const [onOver, setOnOver] = useState(false)
    return (
        <div className={cl.container}>
            <div className={cl.containerIconTitle}>
                <Gift className={cl.image}/>
                <h4>Refer a driend and get the bonus</h4>
                <p>
                    Share your invite code and when they spend 
                    30€ with their card, you get 30€ from us
                </p>
            </div>
            <div className={cl.containerEarnedPending}>
                <ul className={cl.sectionAboutDiscount}>
                    <li className={cl.section}>
                        <h3>€34</h3>
                        <h5>Earned</h5>
                    </li>
                    <li className={cl.sectionRight}>
                        <h3>€9</h3>
                        <h5>Pending</h5>
                    </li>
                    <div className={cl.line}/>
                    <li className={cl.section}>
                        <p>Highest discount</p>
                        <h3>20% <ImInfo 
                            onMouseEnter={() => setOnMouse(true)} 
                            onMouseLeave={() => setOnMouse(false)}
                        /></h3>
                        <h5>Earned</h5>
                    </li>
                    {onMouse && (
                        <div className={cl.aboutDiscount}>
                            <p>2 x 10%</p>
                            <p>1 x 20%</p>
                        </div>
                    )}
                    <li className={cl.sectionRight}>
                        <p>Highest discount</p>
                        <h3>10% <ImInfo 
                            onMouseEnter={() => setOnOver(true)} 
                            onMouseLeave={() => setOnOver(false)}
                            /></h3>
                        <h5>Pending</h5>
                    </li>
                    {onOver && (
                        <div className={cl.aboutOverDiscount}>
                            <p>1 x 20%</p>
                            <p>2 x 10%</p>
                        </div>
                    )}
                    <div className={cl.line}/>
                    <li className={cl.section}>
                        <h3>15<span>mins</span></h3>
                        <h5>Earned</h5>
                    </li>
                    <li className={cl.sectionRight}>
                        <h3>10<span>mins</span></h3>
                        <h5>Pending</h5>
                    </li>
                </ul>
            </div>

            <div className={cl.containerInviteFriends}>

            </div>
        </div>
    );
};

export default ReferFriends;