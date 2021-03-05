import React from "react";
import classNames from "classnames";
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

const getMessageTime = (created_at) => {
    if (isToday(new Date(created_at))) {
        return format(created_at, "HH:mm");
    } else {
        return format(new Date(created_at), "MM/dd/yyyy", {
            locale: ruLocale,
        });
    }
};

const DialogItem = ({
    _id,
    undread,
    created_at,
    text,
    isMe,
    currentDialogId,
    partner,
    author,
    lastMessage,
    userId
}) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/dialog/${_id}`}>
            <div
                className={classNames("dialogs__item", {
                    "dialogs__item--online": author._id === userId ? partner.isOnline : author.isOnline,
                    "dialogs__item--selected": currentDialogId === _id
                })}
                onClick={() => dispatch(actions.setCurrentDialogId(_id))}
            >
                <div className="dialogs__item-avatar">
                    <Avatar user={author._id === userId ? partner : author} />
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{author._id === userId ? partner.fullname : author.fullname}</b>
                        {/* <span>{getMessageTime("")}</span> */}
                    </div>

                    <div className="dialogs__item-info-bottom">
                        <p>{lastMessage && lastMessage.text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={false} />}
                        {lastMessage && lastMessage.undread > 0 && (
                            <div className="dialogs__item-info-bottom-count">
                                {lastMessage && lastMessage.undread > 9 ? "+9" : lastMessage.undread}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DialogItem;
