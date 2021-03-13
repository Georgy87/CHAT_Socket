import React from "react";

import Status from "../../components/Status/Status";
import ChatInput from "../../components/ChatInput/ChatInput";
import Messages from '../../components/Messages/Messages';
import Sidebar from '../../components/SideBar/SideBar';

import "./Home.scss";

const Home = () => {
    return (
            <div className="chat">
                <Sidebar />
                <div className="chat__dialog">
                    <Status />
                    <Messages />
                </div>
            </div>
    );
};

export default Home;
