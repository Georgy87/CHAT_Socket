import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "antd";

import Status from "../../containers/Status";
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
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">

                            </b>
                            <div className="chat__dialog-header-status">
                                <Status online />
                            </div>
                            <Button
                                type="link"
                                shape="circle"
                                icon={<EllipsisOutlined />}
                                style={{ fontSize: "20px" }}
                            />
                        </div>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages />
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
