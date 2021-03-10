import React from "react";
import classNames from "classnames";

import "./Block.scss";

type PropsType = {
    children: React.ReactNode;
    className: string;
}

const Block: React.FC<PropsType> = ({ children, className }) => {
    return (
        <div className={classNames('block', className)}>
            {children}
        </div>
    );
};


export default Block;
