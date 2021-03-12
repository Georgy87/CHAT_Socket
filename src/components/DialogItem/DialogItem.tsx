import React from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { LastMessageType, PartnerOrGroup } from "../../store/ducks/dialogs/types";
import { UsergroupAddOutlined } from "@ant-design/icons";

import readedSvg from "../../assets/img/readed.svg";
import Time from "../Time/Time";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { generateAvatarFromHash } from "../../utils/helpers";
import IconReaded from "../IconReaded/index";
import Avatar from "../Avatar/Avatar";
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import actions from '../../redux/actions/dialogs';
import { UserInfo } from "../../store/ducks/user/types";
import { setCurrentDialogId, setCurrentStatus, setDialogName } from "../../store/ducks/dialogs/actions";
import { selectIsPartnerOrGroup } from "../../store/ducks/dialogs/selectors";


const getMessageTime = (created_at: Date) => {
    if (isToday(new Date(created_at))) {
        return format(created_at, "HH:mm");
    } else {
        return format(new Date(created_at), "MM/dd/yyyy", {
            locale: ruLocale,
        });
    }
};

export type PropsType = {
    _id: string;
    createdAt: string;
    isMe: boolean;
    currentDialogId: string;
    partner: UserInfo[];
    author: UserInfo;
    dialogName: string;
    isOnePartnerOrGroup: string;
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
    dialogName,
    isOnePartnerOrGroup,
    userId,
    createdAt
}) => {

    const dispatch = useDispatch();

    const isOnePartner = 1;
    // let partnersIsOnline = null;

    const partners = partner.map(el => {
        return el;
    });

    // if (partner.length === isOnePartner - 1) {
    //     partnersIsOnline = partner.map(el => {
    //         return el.isOnline;
    //     });
    // }

    const onCurrentDialogInfo = () => {
        dispatch(setCurrentDialogId(_id));

        if (author._id === userId) {
            dispatch(setDialogName(partner[0].fullname));
            //@ts-ignore
            localStorage.setItem("partner", partner[0].fullname);
        } else {
            dispatch(setDialogName(author.fullname));
            //@ts-ignore
            localStorage.setItem("partner", author.fullname);
        }

        if (partners.length > isOnePartner && dialogName) {
            dispatch(setDialogName(dialogName));
            //@ts-ignore
            localStorage.setItem("partner", dialogName);
        }
    }

    return (
        <NavLink to={`/dialog/${_id}`}>
            <div
                className={classNames("dialogs__item", {
                    "dialogs__item--online": author._id === userId ? partner[0].isOnline : author.isOnline,
                    "dialogs__item--selected": currentDialogId === _id
                })}
                onClick={onCurrentDialogInfo}
            >
                <div className="dialogs__item-avatar">
                    {PartnerOrGroup.IS_GROUP === isOnePartnerOrGroup ? <UsergroupAddOutlined /> :
                        <Avatar user={author._id === userId ? partners : author} />
                    }
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{PartnerOrGroup.IS_GROUP === isOnePartnerOrGroup ? dialogName :
                            author._id === userId ? partner[0].fullname : author.fullname}
                        </b>
                        <span>{getMessageTime(new Date(createdAt))}
                        </span>
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
        </NavLink>
    )
}

export default DialogItem;
