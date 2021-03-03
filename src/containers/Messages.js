import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { messagesActions } from "../redux/actions";
import { Messages as BaseMessages } from "../components";
import socket from "../core/socket";

const Messages = ({ currentDialogId, fetchMessages, items, isLoading, addMessage, user, removeMessageById, dialogs }) => {
    const messagesRef = useRef(null);

    const onNewMessage = data => {
        if (data.dialog && currentDialogId === data.dialog._id) {
            addMessage(data);
        }
    };

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }

        socket.on("SERVER:NEW_MESSAGE", onNewMessage);

        return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    }, [currentDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [items]);

    return (
        <BaseMessages
            onRemoveMessage={removeMessageById}
            user={user}
            blockRef={messagesRef}
            items={items}
            isLoading={isLoading}
        />
    );
};

export default connect(
    ({ dialogs, messages, user }) => ({
        dialogs,
        currentDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading,
        user: user.data
    }),
    messagesActions
)(Messages);
