import React from "react";
import { useDispatch, useSelector } from "react-redux";
import orderBy from "lodash/orderBy";
import { Empty, Input } from "antd";
import { useState } from "react";
import { useEffect } from "react";

import DialogItem from "../DialogItem/DialogItem";
import socket from '../../core/socket';
import { fetchDialogs, setCurrentDialogId } from '../../store/ducks/dialogs/actions';
import { selectDialogItems, selectCurrentDialogId, selectIsPartnerOrGroup } from '../../store/ducks/dialogs/selectors';
import { DialogsInfoType } from "../../store/ducks/dialogs/types";
import { UserInfo } from "../../store/ducks/user/types";
import { useParams } from "react-router";

import "./Dialogs.scss";

export type PropsType = {
    userId?: string;
}

const Dialogs: React.FC<PropsType> = ({ userId }) => {
    const dialogs = useSelector(selectDialogItems);
    const currentDialogId = useSelector(selectCurrentDialogId);

    const params: { id: any } = useParams();
    const id = params.id;

    const dispatch = useDispatch();

    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(dialogs));

    const onChangeInput = (value = "") => {
        setFiltredItems(
            dialogs.filter(
                (dialog) =>
                    dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
                    0
                    ||
                    dialog.partner[0].fullname.toLowerCase().indexOf(value.toLowerCase()) >=
                    0
                    ||
                    dialog.dialogName && dialog.dialogName.toLowerCase().indexOf(value.toLowerCase()) >=
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
        socket.on("SERVER:NEW_MESSAGE", onNewDialog);

        // if (id) {
        //     dispatch(fetchDialogById(id));
        // }
        return () => {
            socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
            socket.removeListener("SERVER:NEW_MESSAGE", fetchDialogs);
        };
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
            {dialogs ? filtred.map((item: any) => {
                return (
                    <DialogItem
                        key={item._id}
                        isMe={item.author._id === userId}
                        {...item}
                        currentDialogId={currentDialogId}
                        userId={userId}
                    />
                )
            })
                : (
                    <Empty
                        description="Ничего не найдено"
                    />
                )}
        </div>
    );
};

export default Dialogs;
