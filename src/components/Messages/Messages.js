import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import Message from '../Message/Message';
import socket from "../../core/socket";

import actions from '../../redux/actions/messages';

import "./Messages.scss";

const Messages = () => {
    const dialogs = useSelector(state => state.dialogs);
    const currentDialogId = useSelector(state => state.dialogs.currentDialogId);
    const items = useSelector(state => state.messages.items);
    const isLoading = useSelector(state => state.messages.isLoading);
    const user = useSelector(state => state.user.data);

    const dispatch = useDispatch();

    const messagesRef = useRef(null);

    const onNewMessage = data => {
        if (data.dialog && currentDialogId === data.dialog._id) {
            dispatch(actions.addMessage(data));
        }
    };

    useEffect(() => {
        if (currentDialogId) {
            dispatch(actions.fetchMessages(currentDialogId));
        }

        socket.on("SERVER:NEW_MESSAGE", onNewMessage);

        return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    }, [currentDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [items]);

    return (
        <div
            ref={messagesRef}
            className={classNames("messages", {
                "messages--loading": isLoading,
            })}
        >
            {isLoading ? (
                <Spin size="large" tip="Загрузка сообщений..." />
            ) : items && !isLoading ? (
                items.length > 0 ? (
                    items.map((item) => {
                        return <Message
                            key={item._id}
                            {...item}
                            isMe={user._id === item.user._id}
                            onRemoveMessage={() => dispatch(actions.removeMessageById(item._id))}
                        />
                    })
                ) : (
                        <Empty description="Диалог пуст" />
                    )
            ) : (
                        <Empty description="Откройте диалог" />
                    )}
        </div>
    );
};

Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;
