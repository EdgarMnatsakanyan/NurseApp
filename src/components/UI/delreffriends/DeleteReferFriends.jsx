import React, { useState } from 'react';
import cl from './DeleteReferFriends.module.css';
import { RxCross2 } from 'react-icons/rx';
import { ReactComponent as Gif } from './Gifts.svg';
import InviteFriend from '../invitefriend/InviteFriend';

const DeleteReferFriends = ({visible, setVisible}) => {
    const rootClasses = [cl.deleteSection]
    if(visible) {
        rootClasses.push(cl.active)
    }

    const [showComponentInvite, setShowComponentInvite] = useState(false);

    if(showComponentInvite) {
        return (
            <div className={cl.deleteSection}>
                <InviteFriend onPressInvite={() => setShowComponentInvite(false)}/>
            </div>
        )
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.deleteContainer}>
                <div className={cl.titleDelete}>
                    <p>Refer a Friend</p>
                    <RxCross2 className={cl.icon} onClick={() => setVisible(false)}/>
                </div>
                <hr />
                <div className={cl.containerDeleting}>
                    <Gif />
                    <h4>Refer a friend and get the bonus</h4>
                    <p>Text should be here</p>
                    <div className={cl.btnSection}>
                        <button type="submit" className={cl.btnCancel} onClick={() => setShowComponentInvite(true)}>No, cancel</button>
                        <button type="submit" className={cl.btnDelete} onClick={() => setShowComponentInvite(true)}>Yes, delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteReferFriends;