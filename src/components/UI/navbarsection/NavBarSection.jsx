import React, { useState } from 'react';
import cl from './NavBarSection.module.css';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Personal } from '../../../assets/navbarsection/personaldata.svg';
import { ReactComponent as Payment } from '../../../assets/navbarsection/paymentmethod.svg';
import { ReactComponent as Refer } from '../../../assets/navbarsection/referfriends.svg';
import { ReactComponent as Setting } from '../../../assets/navbarsection/settings.svg';
import { ReactComponent as HelpSupport } from '../../../assets/navbarsection/helpandsupport.svg';
import PersonalData from '../personaldata/PersonalData';
import PaymentMethod from '../paymentmethod/PaymentMethod';
import ReferFriedns from '../referfriends/ReferFriedns';
import Settings from '../settings/Settings';
import HelpAndSupport from '../helpandsupport/HelpAndSupport';

const NavBarSection = () => {
    const { t } = useTranslation();
    const sections = [cl.sections];
    const active = [cl.active];
    const content = [cl.content];
    const activeContent = [cl.activeContent];
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div className={cl.sectionContainer}>
            <div className={cl.container} >
                <div className={toggleState === 1 ? active : sections}
                    onClick={() => toggleTab(1)}
                >
                    <div className={cl.icons}>
                        <Personal />
                    </div>
                    <h4>{t("myProfile.header.personaldata")}</h4>
                </div>
                <hr className={cl.liner}/>
                <div className={toggleState === 2 ? active : sections}
                    onClick={() => toggleTab(2)}
                >
                    <div className={cl.icons}>
                    <Payment />
                    </div>
                    <h4>{t("myProfile.header.paymentmethod")}</h4>
                </div>
                <hr className={cl.liner}/>
                <div className={toggleState === 3 ? active : sections}
                    onClick={() => toggleTab(3)}
                >
                    <div className={cl.icons}>
                        <Refer />
                    </div>
                    <h4>{t("myProfile.header.referfriends")}</h4>
                </div>
                <hr className={cl.liner}/>
                <div className={toggleState === 4 ? active : sections}
                    onClick={() => toggleTab(4)}
                >
                    <div className={cl.icons}>
                        <Setting />
                    </div>
                    <h4>{t("myProfile.header.settings")}</h4>
                </div>
                <hr className={cl.liner}/>
                <div className={toggleState === 5 ? active : sections}
                    onClick={() => toggleTab(5)}
                >
                    <div className={cl.icons}>
                        <HelpSupport />
                    </div>
                    <h4>{t("myProfile.header.helpandsupport")}</h4>
                </div>
            </div>
            <div className={toggleState === 1 ? activeContent : content}>
            <PersonalData />
            </div>
            <div className={toggleState === 2 ? activeContent : content}>
            <PaymentMethod />
            </div>
            <div className={toggleState === 3 ? activeContent : content}>
            <ReferFriedns />
            </div>
            <div className={toggleState === 4 ? activeContent : content}>
            <Settings />
            </div>
            <div className={toggleState === 5 ? activeContent : content}>
            <HelpAndSupport />
            </div>
        </div>
    );
};

export default NavBarSection;