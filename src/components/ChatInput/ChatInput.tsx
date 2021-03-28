import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { AudioOutlined, CameraOutlined, SmileOutlined } from "@ant-design/icons";
//@ts-ignore
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css';

import { fetchSendMessages } from '../../store/ducks/messages/actions';
import { selectCurrentDialogId } from "../../store/ducks/dialogs/selectors";

import "./ChatInput.scss";

const ChatInput = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const currentDialogId = useSelector(selectCurrentDialogId);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const handleSendMessage = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(fetchSendMessages({ value, currentDialogId }));
            setValue("");
        }
    };

    const addEmoji = ({ colons }: any) => {
        setValue((value + ' ' + colons).trim());
    };

    const handleOutsideClick = (el: any, e: any) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        const el = document.querySelector('.chat-input__smile-btn');
        document.addEventListener('click', handleOutsideClick.bind(this, el));

        return () => {
            document.removeEventListener('click', handleOutsideClick.bind(this, el));
        };
    }, []);

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible && (
                    <div className="chat-input__emoji-picker">
                        <Picker set="apple" onSelect={emojiTag => addEmoji(emojiTag)} />
                    </div>
                )}
                <Button
                    onClick={toggleEmojiPicker}
                    type="link"
                    shape="circle"
                    icon={<SmileOutlined />}
                />
            </div>
            <Input
                onChange={(e) => setValue(e.target.value)}
                size="large"
                placeholder="Введите текст сообщения…"
                value={value}
                onKeyUp={handleSendMessage}
            />
            <div className="chat-input__actions">
                <UploadField
                    onFiles={(files: File[]) => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn",
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif,.bmp",
                        multiple: "multiple",
                    }}
                >
                    <Button type="link" icon={<CameraOutlined />} />
                </UploadField>
                {value ? (
                    <Button type="link" shape="circle" icon={<SmileOutlined />} />
                ) : (
                    <Button type="link" shape="circle" icon={<AudioOutlined />} />
                )}
            </div>
        </div>
    );
};

export default ChatInput;
