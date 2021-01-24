import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from "date-fns/locale/ru";

import "./Message.scss";

const Message = ({ avatar, user, text, date }) => {
    return (
        <div className="message">
            <div className="message__avatar">
                <img src={avatar} alt="User avatar" />
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <div className="message__text">
                        <p>{text}</p>
                    </div>
                    <span className="message__date">{formatDistanceToNow(new Date('Sun Jan 24 2021 23:48:29'), { locale: ruLocale, addSuffix: true  })}</span>
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
};

export default Message;
