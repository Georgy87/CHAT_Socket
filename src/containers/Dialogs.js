import React, { useState, useEffect } from "react";
import { Dialogs as BaseDialogs } from "../components";
import { connect } from "react-redux";
import { dialogsActions } from "../redux/actions";
import socket from "../core/socket";

const Dialogs = ({ fetchDialogs, items, userId, setCurrentDialogId }) => {
    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(items));

    const onChangeInput = (value = "") => {
        setFiltredItems(
          items.filter(
            dialog =>
              dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
                0 ||
              dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
                0
          )
        );
        setValue(value);
      };
    useEffect(() => {
        if (items.length) {
            onChangeInput();
        }
    }, [items]);

    window.fetchDialogs = fetchDialogs;

    const onNewDialog = () => {
        fetchDialogs();
    };

    useEffect(() => {
        fetchDialogs();


        socket.on("SERVER:DIALOG_CREATED", onNewDialog);
        return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
    }, []);

    return (
        <BaseDialogs
            userId={userId}
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
        />
    );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
