import React from "react";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import Time from "../Time/index";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { generateAvatarFromHash } from "../../utils/helpers";
import IconReaded from "../IconReaded/index";
import Avatar from "../Avatar/index";

const getMessageTime = (created_at) => {
    if (isToday(new Date(created_at))) {
        return format(created_at, "HH:mm");
    } else {
        return format(new Date(created_at), "MM/dd/yyyy", {
            locale: ruLocale,
        });
    }
};

const DialogItem = ({ user, unreaded, created_at, isMe, text }) => {
    return (
        <div
            className={classNames("dialogs__item", {
                "dialogs__item--online": user.isOnline,
            })}
        >
            <div className="dialogs__item-avatar">
                {Avatar(user)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {/* <Time date={new Date(created_at)} /> */}
                        {getMessageTime(created_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {isMe && <IconReaded isMe={true} isReaded={false} />}
                    {unreaded > 0 && (
                        <div className="dialogs__item-info-bottom-count">
                            {unreaded > 9 ? "+9" : unreaded}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
