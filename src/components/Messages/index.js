import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";
import Message from '../Message/index';

// import { Messages } from "../../containers";

import "./Messages.scss";

const Messages = ({ onRemoveMessage, blockRef, isLoading, items, user }) => {
    return (
        <div
            ref={blockRef}
            className={classNames("messages", {
                "messages--loading": isLoading,
            })}
        >
            {isLoading && !user ? (
                <Spin size="large" tip="Загрузка сообщений..." />
            ) : items && !isLoading ? (
                items.length > 0 ? (
                    items.map((item) => {
                        return <Message
                            key={item._id}
                            {...item}
                            isMe={user._id === item.user._id}
                            onRemoveMessage={onRemoveMessage.bind(this, item._id)}
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
