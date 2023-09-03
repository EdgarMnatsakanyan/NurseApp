import React from 'react';
import cl from './Gehavior.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
const Gehavior = ({onBackGehavior}) => {
    return (
        <div className={cl.containerGehavior}>
            <p className={cl.titleBack} onClick={onBackGehavior}><FaAngleLeft />Appropriate Behaviour</p>
            <div className={cl.containerService}>
                <p>
                    The nurse violated the code of conduct<FaAngleRight className={cl.iconRight}/>
                </p>
                <p>
                    I miss a personal item and I think the nurse took it.<FaAngleRight className={cl.iconRight}/>
                </p>
            </div>
        </div>
    );
};

export default Gehavior;