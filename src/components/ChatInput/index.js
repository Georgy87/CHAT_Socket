import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";

import "./ChatInput.scss";
import { AudioMutedOutlined, AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined } from "@ant-design/icons";

const ChatInput = (props) => {
    const [value, setValue] = useState("");

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" shape="circle" icon={<SmileOutlined />} />
            </div>
            <Input
                onChange={(e) => setValue(e.target.value)}
                size="large"
                placeholder="Введите текст сообщения…"
            />
            <div className="chat-input__actions">
                <Button type="link" shape="circle" icon={<CameraOutlined />} />
                {value ? (
                    <Button type="link" shape="circle" icon={<SendOutlined />} />
                ) : (
                    <Button
                        type="link"
                        shape="circle"
                        icon={<AudioOutlined />}
                    />
                )}
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string,
};

export default ChatInput;
