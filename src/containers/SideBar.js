import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { userApi, dialogsApi } from "../utils/api";

import Sidebar from "../components/SideBar/SideBar";

const SidebarContainer = () => {
    const user = useSelector((state) => state.user.data);

    const [selectedUserId, setSelectedUserId] = useState(false);

    const onAddDialog = () => {
        dialogsApi
            .create({
                partner: selectedUserId,
                text: messageText
            })
            .then(onClose)
            .catch(() => {
                setIsLoading(false);
            });
    };

    const onSelectUser = userId => {
        setSelectedUserId(userId);
    };

    return (
        <Sidebar
            user={user}
            onSelectUser={onSelectUser}
            onModalOk={onAddDialog}
            selectedUserId={selectedUserId}
        />
    );
};

export default SidebarContainer;