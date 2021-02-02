import React from "react";
import orderBy from "lodash/orderBy";
import "./Dialogs.scss";

import DialogItem from "../DialogItem/DialogItem";

const Dialogs = ({ items, userId }) => {
    return (
        <div className="dialogs">
            {
                orderBy(items, ["created_at"], ["desc"]).map((item) => (
                    <DialogItem
                        key={item._id}
                        isMe={item.user._id === userId}
                        {...item}
                        // user={item.user}
                        // unreaded={0}
                    />
                ))
            }
        </div>
    );
};

export default Dialogs;
