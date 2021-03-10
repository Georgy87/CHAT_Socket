import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Select, Input, Form } from 'antd';
import Icon from "@ant-design/icons";

import Dialogs from '../Dialogs/Dialogs';
import { fetchFindUser } from "../../store/ducks/user/actions";
import { fetchCreateDialog, fetchCreateGroupDialog } from '../../store/ducks/dialogs/actions';

import './SideBar.scss';

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = () => {
    const user = useSelector((state) => state.user.data);

    const users = useSelector((state) => state.user.findUser);
    const dialogs = useSelector((state) => state.dialogs.items);


    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const [inputValueDialog, setInputValueDialog] = useState("");
    const [groupName, setGroupName] = useState("");

    const [messageText, setMessagaText] = useState("");
    const [selectedUserId, setSelectedUserId] = useState(false);

    const options = users.map(user => <Option key={user._id}>{user.fullname}</Option>);


    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true);
    };

    const handleChangeInputDialog = value => {
        setInputValueDialog(value);
    };

    const handleChangeInputGroup = e => {
        setGroupName(e.target.value);
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
        dispatch(fetchCreateDialog({ partner: selectedUserId, text: messageText }));
        onClose();
    };

    const onAddGroupDialog = () => {
        dispatch(fetchCreateGroupDialog({ partner: user._id, text: '', nameGroup: groupName }));
        onClose();
    }

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
                            value={inputValueDialog}
                            onSearch={onSearch}
                            onChange={handleChangeInputDialog}
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
                                style={{ marginTop: 15 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                    <div className="add-dialog-form__create-group">
                        <Form.Item label="Создать группу курса:">
                            <Input
                                defaultValue={groupName}
                                onChange={handleChangeInputGroup}
                                style={{ width: '100%' }}
                                placeholder="Введите название группы курса">
                            </Input>
                        </Form.Item>
                        <Button
                            onClick={onAddGroupDialog}
                            className="add-dialog-form__create-btn"
                            type="secondary">
                            Создать группу
                            </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

Sidebar.defaultProps = {
    users: [],
};

export default Sidebar;