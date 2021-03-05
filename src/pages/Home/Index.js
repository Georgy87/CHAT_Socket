import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "antd";

import Status from "../../components/Status/Status";
import ChatInput from "../../containers/ChatInput";
import Messages from '../../components/Messages/Messages';
import Sidebar from '../../containers/SideBar';

import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <Sidebar />
                <div className="chat__dialog">
                    <Status />
                    <Messages />
                    {/* <Button
                        type="link"
                        shape="circle"
                        icon={<EllipsisOutlined />}
                        style={{ fontSize: "20px" }}
                    /> */}
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
