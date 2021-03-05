import React from "react";
import { useDispatch, useSelector } from "react-redux";
import orderBy from "lodash/orderBy";
import { Empty, Input } from "antd";
import { useState } from "react";
import { useEffect } from "react";

import DialogItem from "../DialogItem/DialogItem";
import socket from '../../core/socket';
import actions from '../../redux/actions/dialogs';
import { fetchDialogs } from '../../store/ducks/dialogs/actions';

import "./Dialogs.scss";

const Dialogs = ({ userId }) => {
    const dialogs = useSelector((state) => state.dialogs.items);

    const dispatch = useDispatch();

    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(dialogs));

    const onChangeInput = (value = "") => {
        setFiltredItems(
            dialogs.filter(
                dialog =>
                    dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
                    0 ||
                    dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
                    0
            )
        );
        setValue(value);
    };

    const onNewDialog = () => {
        dispatch(fetchDialogs());
    };

    useEffect(() => {
        if (dialogs.length) {
            onChangeInput();
        }
    }, [dialogs]);

    useEffect(() => {
        dispatch(fetchDialogs());

        socket.on("SERVER:DIALOG_CREATED", onNewDialog);
        return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
    }, []);
    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                    placeholder="Поиск среди контактов"
                    onChange={(e) => onChangeInput(e.target.value)}
                    value={inputValue}
                />
            </div>
            {dialogs ? (
                orderBy(filtred, ["created_at"], ["desc"]).map((item) => {
                    return (
                        <DialogItem
                            key={item._id}
                            isMe={item.author._id === userId}
                            {...item}
                            userId={userId}
                            // onSelect={onSelectDialog}
                        />
                    )
                })
            ) : (
                    <Empty
                        description="Ничего не найдено"
                    />
                )}
        </div>
    );
};

export default Dialogs;
