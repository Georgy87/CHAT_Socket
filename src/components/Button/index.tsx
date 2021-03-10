import React from "react";
import { Button as BaseButton } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SizeType } from "antd/lib/config-provider/SizeContext";

import "./Button.scss";

type PropsType = {
    className: string;
    size: SizeType;
}

const Button: React.FC<PropsType> = (props) => {
    return (
        <BaseButton {...props} className={classNames('button', props.className, {'button--large': props.size === 'large'})} type="primary" />
    )
};

export default Button;
