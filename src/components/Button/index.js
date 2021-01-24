import React from "react";
import { Button as BaseButton } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

const Button = (props) => {
    return (
        <BaseButton {...props} className={classNames('button', props.className, {'button--large': props.size === 'large'})} type="primary" />
    )
};

Button.propTypes = {
    className: PropTypes.string
}

export default Button;
