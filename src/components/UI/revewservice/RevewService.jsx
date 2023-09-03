import React from 'react';
import cl from './RevewService.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
const RevewService = ({onBackRevew}) => {
    return (
        <div className={cl.containerRevew}>
            <p className={cl.titleBack} onClick={onBackRevew}><FaAngleLeft />Revew Service and Payment</p>
            <div className={cl.containerService}>
                <p>
                    The nurse finshed the job and left <FaAngleRight className={cl.iconRight}/><br/>
                    requested time had finished.
                </p>
                <p>
                    The nurse  did not do all the activities <FaAngleRight className={cl.iconRight}/><br/>
                    requested in my order.
                </p>
                <p>
                    I am not happy with the quality ofthr <FaAngleRight className={cl.iconRight}/><br/>
                    service provided.
                </p>
            </div>
        </div>
    );
};

export default RevewService;
