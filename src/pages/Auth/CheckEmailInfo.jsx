import React, { useEffect, useState } from 'react';
import { Result, Button, Spin } from 'antd';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Block from '../../components/Block/Block';
import { fetchVerifyHash } from '../../store/ducks/user/actions';

const renderTextInfo = ({ hash, verified }) => {
    if (hash) {
        console.log(verified)
        if (verified) {
            return {
                status: 'success',
                title: 'Готово!',
                message: 'Аккаунт успешно подтвержден!',
            };
        } else {
            return {
                status: 'error',
                title: 'Ошибка',
                message: 'Вы указали несуществующий или неверный хеш.',
            };
        }
    } else {
        return {
            status: 'info',
            title: 'Подтвердите почту',
            message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
        };
    }
};

export const CheckEmailInfo = () => {
    const hash = window.location.search.split('hash=')[1];

    const dispatch = useDispatch();

    const verify = useSelector(state => state.user.verify);

    const history = useHistory();

    const [verified, setVerified] = useState(false);
    const [checking, setChecking] = useState(!!hash);
    const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }));

    const setStatus = ({ checking, verified }) => {
        setInfo(renderTextInfo({ hash, checking, verified }));
        setVerified(verified);
        setChecking(checking);
    };

    useEffect(() => {
        if (hash) {
            dispatch(fetchVerifyHash(hash));
        }
    }, []);

    useEffect(() => {
        setStatus({ verified: verify, checking: false });
    }, [verify]);

    return (
        <div className="verify-block">
            <Block>
                {!checking ? (
                    <Result
                        status={info.status}
                        title={info.title}
                        subTitle={info.message}
                        extra={
                            info.status === 'success' &&
                            verified && (
                                <Button type="primary" onClick={() => history.push('/signin')}>
                                    Войти
                                </Button>
                            )
                        }
                    />
                ) : (
                    <div className="verify-block__loading">
                        <Spin size="large" />
                    </div>
                )}
            </Block>
        </div>
    );
};
