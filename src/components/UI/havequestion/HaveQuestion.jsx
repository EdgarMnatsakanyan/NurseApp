import React from 'react';
import cl from './HaveQuestion.module.css';
import { RxCross2 } from 'react-icons/rx';
import { IoImageOutline } from 'react-icons/io5';
const HaveQuestion = ({visible, setVisible}) => {

    const haveQuestion = [cl.haveQuestion]
    if(visible) {
        haveQuestion.push(cl.active)
    }
    return (
        <div className={haveQuestion.join(' ')}>
            <div className={cl.containerQuestion}>
                <div className={cl.exitTitle}>
                    <p>Inappropriate Behavour</p>
                    <RxCross2 className={cl.icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.contentInputs}>
                    <p>The Nurses violated the code of conduct</p>
                    <input type="text"  placeholder='Order ID'/>
                    <textarea cols="40" rows="5" placeholder='Comments'></textarea>
                        <div className={cl.containerButtons}>
                            <button type='submit'><IoImageOutline/>Upload image</button>
                            <button type='submit'>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HaveQuestion;