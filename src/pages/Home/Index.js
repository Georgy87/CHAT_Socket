import React from "react";
import { Message } from "../../components";
import Dialogs from "../../containers/Dialogs";
import tr from "../../assets/audio/james.wav";
import {
    TeamOutlined,
    FormOutlined,
    EllipsisOutlined,
    SmileOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { Form, Search, Input, Button, Checkbox } from "antd";
// import { Input }from "antd}"

import "./Home.scss";
import Status from "../../components/Status/index";
import ChatInput from "../../components/ChatInput/index";

import Messages from '../../components/Messages/index';

const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Icon component={TeamOutlined} />
                            <span>Список диалогов</span>
                        </div>
                        <Button
                            type="link"
                            shape="circle"
                            icon={<FormOutlined />}
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={0} items={[]} />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">
                                Георгий Петренко
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
                        <Messages items={null} />
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
