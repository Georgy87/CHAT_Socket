import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import classNames from "classnames";

import "./Status.scss";

const Status = () => {
    const currentDialogId = useSelector(state => state.dialogs.currentDialogId);
    const user = useSelector(state => state.user.data);
    const dialogsItems = useSelector(state => state.dialogs.items);
    const isGroup = useSelector(state => state.dialogs.isPartnerOrGroup);

    const [partner, setPartner] = useState({});

    useEffect(() => {
        let currentDialogObj;

        if (dialogsItems.length) {
            currentDialogObj = dialogsItems.filter(dialog => dialog._id === currentDialogId)[0];

            if (currentDialogObj.author._id === user._id) {
                setPartner(currentDialogObj.partner[0]);
            } else {
                setPartner(currentDialogObj.author);
            }
        }
    }, [currentDialogId]);

    let name = "GROUP NAME";

    dialogsItems.map(el => {
        if (el.groupName) {
            name = el.groupName;
        }
    });

    return (
        <div className="chat__dialog-header">
            {currentDialogId && <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">{isGroup ? (<div>{name}</div>) : partner.fullname}</b>
                <div className="chat__dialog-header-status">
                    {!isGroup && <div
                        className={classNames("status", {
                            "status--online": partner.isOnline,
                        })}
                    >
                        {partner.isOnline ? "онлайн" : "офлайн"}
                    </div>}
                </div>
            </div>}
        </div>
    );
}

Status.propTypes = {
    online: PropTypes.bool,
};

export default Status;
