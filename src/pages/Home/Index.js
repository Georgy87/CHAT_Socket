import React from "react";
import { Message } from "../../components";
import tr from "../../assets/audio/james.wav";
import { TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { Form, Search, Input, Button, Checkbox } from "antd";
// import { Input }from "antd}"

import Status from "../../containers/Status";

import ChatInput from "../../containers/ChatInput";
import Messages from '../../containers/Messages';
import Dialogs from "../../containers/Dialogs";
import { userApi } from "../../utils/api";

import "./Home.scss";
import Actions from '../../redux/actions/user';

const Home = () => {

    // React.useEffect(() => {
    //    Actions.fetchUserData();
    // }, []);
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
                        <Dialogs userId={0} />
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
