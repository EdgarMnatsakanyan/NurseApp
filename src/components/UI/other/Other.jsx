import React from 'react';
import cl from './Other.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Other = ({onBackOther}) => {
    return (
        <div className={cl.containerOther}>
            <p className={cl.titleBack} onClick={onBackOther}><FaAngleLeft className={cl.iconBack}/>Other</p>
            <div className={cl.containerTitle}>
                <p>Problems while using the app.<FaAngleRight className={cl.iconRight}/></p>
                <p>I belive that i was unduly charged.<FaAngleRight className={cl.iconRight}/></p>
                <p>Problem is not listed<FaAngleRight className={cl.iconRight}/></p>
            </div> 
        </div>
    );
};

export default Other;