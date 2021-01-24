import React, { Component } from "react";
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "../../../components";

class LoginForm extends Component {
    render() {
        return (
            <div className="auth">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={
                                    <SmileOutlined
                                        type="user"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                size="large"
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <SmileOutlined
                                        type="lock"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                size="large"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/register">
                            Зарегистрироваться
                        </Link>
                    </Form>
                </Block>
            </div>
        );
    }
}

export default LoginForm;