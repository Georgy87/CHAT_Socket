import React from "react";
import orderBy from "lodash/orderBy";
import { Empty, Input } from "antd";

import "./Dialogs.scss";

import DialogItem from "../DialogItem/DialogItem";

const Dialogs = ({ items, userId, onSearch, inputValue }) => {
    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                    placeholder="Поиск среди контактов"
                    onChange={(e) => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
            {items.length ? (
                orderBy(items, ["created_at"], ["desc"]).map((item) => (
                    <DialogItem
                        key={item._id}
                        isMe={item.user._id === userId}
                        {...item}
                    />
                ))
            ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="Ничего не найдено"
                />
            )}
        </div>
    );
};

export default Dialogs;
