import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Select, Input, Form } from 'antd';
import Icon from "@ant-design/icons";

import Dialogs from '../Dialogs/Dialogs';
import { fetchFindUser } from "../../store/ducks/user/actions";

import './SideBar.scss';
import { dialogsApi } from '../../utils/api';

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({ onModalOk }) => {
    const user = useSelector((state) => state.user.data);
    const users = useSelector((state) => state.user.findUser);

    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageText, setMessagaText] = useState("");
    const [selectedUserId, setSelectedUserId] = useState(false);

    const options = users.map(user => <Option key={user._id}>{user.fullname}</Option>);

    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true);
    };

    const handleChangeInput = value => {
        setInputValue(value);
    };

    const onChangeTextArea = e => {
        setMessagaText(e.target.value);
    };

    const onSearch = value => {
        dispatch(fetchFindUser(value));
    };

    const onSelectUser = userId => {
        setSelectedUserId(userId);
    };

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

    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <Icon type="team" />
                    <span>Список диалогов</span>
                </div>
                <Button onClick={onShow} type="link" shape="circle" icon="form" />
            </div>

            <div className="chat__sidebar-dialogs">
                <Dialogs userId={user && user._id} />
            </div>
            <Modal
                title="Создать диалог"
                visible={visible}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        Закрыть
                    </Button>,
                    <Button
                        disabled={!messageText}
                        key="submit"
                        type="primary"
                        onClick={onAddDialog}>
                        Создать
                    </Button>,
                ]}>
                <Form className="add-dialog-form">
                    <Form.Item label="Введите имя пользователя или E-Mail">
                        <Select
                            value={inputValue}
                            onSearch={onSearch}
                            onChange={handleChangeInput}
                            onSelect={onSelectUser}
                            notFoundContent={null}
                            style={{ width: '100%' }}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder="Введите имя пользователя или почту"
                            showSearch>
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введите текст сообщения">
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 10 }}
                                style={{marginTop: 5}}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
};

Sidebar.defaultProps = {
    users: [],
};

export default Sidebar;