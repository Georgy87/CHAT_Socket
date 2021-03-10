import React from "react";
import classNames from "classnames";
import { LastMessageType } from "../../store/ducks/dialogs/types";
import { UsergroupAddOutlined } from "@ant-design/icons";

import readedSvg from "../../assets/img/readed.svg";
import Time from "../Time/Time";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { generateAvatarFromHash } from "../../utils/helpers";
import IconReaded from "../IconReaded/index";
import Avatar from "../Avatar/Avatar";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import actions from '../../redux/actions/dialogs';
import { UserInfo } from "../../store/ducks/user/types";
import { setCurrentStatus, setGroupName } from "../../store/ducks/dialogs/actions";


// const getMessageTime = (created_at) => {
//     if (isToday(new Date(created_at))) {
//         return format(created_at, "HH:mm");
//     } else {
//         return format(new Date(created_at), "MM/dd/yyyy", {
//             locale: ruLocale,
//         });
//     }
// };

export type PropsType = {
    _id: string;
    createdAt: string;
    isMe: boolean;
    currentDialogId: string;
    partner: UserInfo[];
    author: UserInfo;
    groupName?: string;
    lastMessage: LastMessageType;
    userId?: string;
}

const DialogItem: React.FC<PropsType> = ({
    _id,
    isMe,
    currentDialogId,
    partner,
    author,
    lastMessage,
    groupName,
    userId
}) => {

    const dispatch = useDispatch();

    const isOnePartner = 1;
    let partnersIsOnline = null;

    if (partner.length === isOnePartner - 1) {
        partnersIsOnline = partner.map(el => {
            return el.isOnline;
        });
    }

    const partners = partner.map(el => {
        return el;
    });

    const onCurrentDialogInfo = () => {
        dispatch(actions.setCurrentDialogId(_id));
        if (groupName) {
            dispatch(setGroupName(groupName));
        }
        dispatch(setCurrentStatus(partner.length > isOnePartner));
    }

    return (
        <Link to={`/dialog/${_id}`}>
            <div
                className={classNames("dialogs__item", {
                    "dialogs__item--online": author._id === userId ? partnersIsOnline : author.isOnline,
                    "dialogs__item--selected": currentDialogId === _id
                })}
                onClick={onCurrentDialogInfo}
            >
                <div className="dialogs__item-avatar">
                    {partners.length > isOnePartner ? <UsergroupAddOutlined /> :
                        <Avatar user={author._id === userId ? partners : author} />
                    }
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{partners.length > isOnePartner ? null :
                            author._id === userId ? partner[0].fullname : author.fullname}
                        </b>
                        {/* <span>{getMessageTime("")}</span> */}
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{lastMessage && lastMessage.text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={false} />}
                        {/* {lastMessage && lastMessage.unread && (
                            <div className="dialogs__item-info-bottom-count">
                                {lastMessage && lastMessage.unread ? "+9" : lastMessage.unread}
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DialogItem;
