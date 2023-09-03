import React, { useState } from 'react';
import { FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import cl from './AboutFlexxi.module.css'
const AboutFlexxi = ({onPressBack}) => {
    const [dropOne, setDropOne] = useState(false);
    const [dropTwo, setDropTwo] = useState(false);
    const [dropThree, setDropThree] = useState(false);
    const [dropFour, setDropFour] = useState(false);
    const [dropFive, setDropFive] = useState(false);
    const [dropSix, setDropSix] = useState(false);
    const [dropSeven, setDropSeven] = useState(false);
    const [dropEight, setDropEight] = useState(false);

    const toggleOne = () => {
        setDropOne(!dropOne);
    };
    const toggleTwo = () => {
        setDropTwo(!dropTwo);
    };
    const toggleThree = () => {
        setDropThree(!dropThree);
    };
    const toggleFour = () => {
        setDropFour(!dropFour);
    };
    const toggleFive = () => {
        setDropFive(!dropFive);
    };
    const toggleSix = () => {
        setDropSix(!dropSix);
    };
    const toggleSeven = () => {
        setDropSeven(!dropSeven);
    };
    const toggleEight = () => {
        setDropEight(!dropEight);
    };
    return (
        <div className={cl.containerAboutFlexxi}>
            <p onClick={onPressBack} className={cl.titleBack}><FaAngleLeft className={cl.iconBack}/>About FLEXXi</p>
            <div className={cl.containerAbout} onClick={toggleOne}>
                    <h4>Edgar Mnatsakanyan</h4>
                    {dropOne ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropOne && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil optio molestias facilis sunt nemo?
                    </p>
                </div>
                    )}
            </div>
            <div className={cl.containerAbout} onClick={toggleTwo}>
                <h4>Why should i choose the Flexxi app?</h4>
                {dropTwo ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropTwo && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dicta dolore possimus commodi ullam assumenda delectus!
                    </p>
                </div>
                    )}
            </div>
            <div className={cl.containerAbout} onClick={toggleThree}>
                <h4>How can i register in the app?</h4>
                {dropThree ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropThree && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Culpa officiis impedit quasi voluptate, repellat ut.
                    </p>
                </div>
                )}
            </div>
            <div className={cl.containerAbout} onClick={toggleFour}>
                <h4>How do i place an order with the app?</h4>
                {dropFour ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropFour && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatibus repellendus laboriosam quas neque eum ea?
                    </p>
                </div>
                    )}
            </div>
            <div className={cl.containerAbout} onClick={toggleFive}>
                <h4>How do I find a nurse/caregiver that fits my requirements?</h4>
                {dropFive ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropFive && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione aliquam facilis nulla dolorem, obcaecati aperiam?
                    </p>
                </div>
                    )}
            </div>
            <div className={cl.containerAbout} onClick={toggleSix}>
                <h4>How can i cancel the service?</h4>
                {dropSix ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropSix && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consectetur vitae sapiente molestiae officia perspiciatis? Vitae.
                    </p>
                </div>
                    )}
            </div>
            <div className={cl.containerAbout} onClick={toggleSeven}>
                <h4>Do I need to pay for the nurse/caregiver’s transportation</h4>
                {dropSeven ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropSeven && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo maiores tempora rem eos at dignissimos.
                    </p>
                </div>
                    )}
            </div>
            <div className={cl.containerAbout} onClick={toggleEight}>
                <h4>What is the difference between a nurse and a caregiver</h4>
                {dropEight ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropEight && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis beatae cumque autem voluptatibus non omnis?
                    </p>
                </div>
                    )}
            </div>
        </div>
    );
};

export default AboutFlexxi;