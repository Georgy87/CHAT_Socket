import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Status.scss";

const Status = ({ online, fullname }) => {
    return (
        <div className="chat__dialog-header">
            <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">{fullname}</b>
                <div className="chat__dialog-header-status">
                    <div
                        className={classNames("status", {
                            "status--online": online,
                        })}
                    >
                        {online ? "онлайн" : "офлайн"}
                    </div>
                </div>
            </div>
        </div>
    );
}

Status.propTypes = {
    online: PropTypes.bool,
};

export default Status;
