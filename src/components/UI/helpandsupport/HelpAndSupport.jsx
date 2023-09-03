import React, { useState } from 'react';
import cl from './HelpAndSupport.module.css';
import { FaChevronRight } from 'react-icons/fa6';
import ContactUs from '../contactus/ContactUs';
import AboutFlexxi from '../aboutflexxi/AboutFlexxi';
import AboutNurses from '../aboutnurses/AboutNurses';
import AboutQuestions from '../aboutquestions/AboutQuestions';
import RevewService from '../revewservice/RevewService';
import Gehavior from '../gehavior/Gehavior';
import Other from '../other/Other';
import HaveQuestion from '../havequestion/HaveQuestion';

const HelpAndSupport = ({visible, setVisible}) => {
    const [ contactUs, setContactUs ] = useState(false);
    const [ aboutFlexxi, setAboutFlexxi ] = useState(false);
    const [ aboutNurses, setAboutNurses ] = useState(false);
    const [ aboutQuestions, setAboutQuestions ] = useState(false);
    const [ revewService, setRevewService ] = useState(false);
    const [ gehavior, setGehavior ] = useState(false);
    const [ other, setOther ] = useState(false);
    const [ haveQuestion, setHaveQuestion ] = useState(false);

    if ( aboutFlexxi ) {
        return (
            <div>
                <AboutFlexxi onPressBack={() => setAboutFlexxi(false)} />
            </div>
        )
    }

    if ( aboutNurses ) {
        return (
            <div>
                <AboutNurses onPressNurses={() => setAboutNurses(false)}/>
            </div>
        )
    }

    if ( aboutQuestions ) {
        return (
            <div>
                <AboutQuestions onPressQuestions={() => setAboutQuestions(false)}/>
            </div>
        )
    }

    if ( revewService ) {
        return (
            <div>
                <RevewService onBackRevew={() => setRevewService(false)}/>
            </div>
        )
    }

    if ( gehavior ) {
        return (
            <div>
                <Gehavior onBackGehavior={() => setGehavior(false)}/>
            </div>
        )
    }

    if ( other ) {
        return (
            <div>
                <Other onBackOther={() => setOther(false)}/>
            </div>
        )
    }
    return (
        <div className={cl.allContainer}>
                <p className={cl.title}>Help and Support</p>
            <div className={cl.support}>
                <h3>FAQ</h3>
                <p onClick={() => setAboutFlexxi(true)}>About FLEXXI <FaChevronRight className={cl.icon} /></p>
                <p onClick={() => setAboutNurses(true)}>About Nurses / Caregivers <FaChevronRight className={cl.icon}/></p>
                <p onClick={() => setAboutQuestions(true)}>Other Questions <FaChevronRight className={cl.icon}/></p>
            </div>
            <div className={cl.helpForServer}>
                <h3>Help</h3>
                <p onClick={() => setRevewService(true)}>Review Service and Payment <FaChevronRight className={cl.icon}/></p>
                <p onClick={() => setGehavior(true)}>Appropiate Gehavior <FaChevronRight className={cl.icon}/></p>
                <p onClick={() => setOther(true)}>Other <FaChevronRight className={cl.icon}/></p>
            </div>
            <h4 className={cl.stillQuestion} onClick={() => setHaveQuestion(true)}>Still have a question?</h4>
            <button className={cl.btnContact} onClick={() => setContactUs(true)}>Contact us</button>
            <ContactUs visible={contactUs} setVisible={setContactUs}/>
            <HaveQuestion visible={haveQuestion} setVisible={setHaveQuestion}/>
        </div>
    );
};

export default HelpAndSupport;