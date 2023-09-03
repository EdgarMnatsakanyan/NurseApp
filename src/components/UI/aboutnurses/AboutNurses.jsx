import React, { useState } from 'react';
import { FaAngleLeft, FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import cl from './AboutNurses.module.css'
const AboutNurses = ({onPressNurses}) => {
    const [dropOne, setDropOne] = useState(false);
    const [dropTwo, setDropTwo] = useState(false);
    const [dropThree, setDropThree] = useState(false);
    const [dropFour, setDropFour] = useState(false);
    const [dropFive, setDropFive] = useState(false);

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
    return (
        <div className={cl.containerAboutNurses}>
            <p onClick={onPressNurses} className={cl.titleBack}><FaAngleLeft />About Nurses / Caregivers</p>
            <div className={cl.containerAbout} onClick={toggleOne}>
                    <h4>Edgar Mnatsakanyan</h4>
                    {dropOne ? <FaAngleUp className={cl.iconDropDown} /> : <FaAngleDown className={cl.iconDropDown}/>}
                    {dropOne && (
                <div className={cl.dropDownSection}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat voluptate sunt veritatis eveniet incidunt dignissimos!
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
        </div>
    );
};

export default AboutNurses;