import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classNames from "classnames";
import { UserInfo } from "../../store/ducks/user/types";
import { selectCurrentDialogId, selectDialogItems, selectGroupName, selectIsPartnerOrGroup } from "../../store/ducks/dialogs/selectors";
import { selectUserData } from "../../store/ducks/user/selectors";

import "./Status.scss";
import { DialogsInfoType } from "../../store/ducks/dialogs/types";

const Status = () => {
    const currentDialogId = useSelector(selectCurrentDialogId);
    const user = useSelector(selectUserData);
    const dialogsItems = useSelector(selectDialogItems);
    const isGroup = useSelector(selectIsPartnerOrGroup);
    const groupName = useSelector(selectGroupName);
    console.log(groupName);

    const [partner, setPartner] = useState<UserInfo>();

    useEffect(() => {
        let currentDialogObj;

        if (dialogsItems.length) {
            currentDialogObj = dialogsItems.filter(dialog => dialog._id === currentDialogId)[0];

            if (user && currentDialogObj.author._id === user._id) {
                setPartner(currentDialogObj.partner[0]);
            } else {
                setPartner(currentDialogObj.author);
            }
        }
    }, [currentDialogId]);

    return (
        <div className="chat__dialog-header">
            {currentDialogId && <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">{isGroup ? (<div>{groupName}</div>) : partner?.fullname}</b>
                <div className="chat__dialog-header-status">
                    {!isGroup && <div
                        className={classNames("status", {
                            "status--online": partner?.isOnline,
                        })}
                    >
                        {partner?.isOnline ? "онлайн" : "офлайн"}
                    </div>}
                </div>
            </div>}
        </div>
    );
}

export default Status;
