import React from "react";
import generateAvatarFromHash from "../../utils/helpers/generateAvatarFromHash";
import { UserInfo } from "../../store/ducks/user/types";

import "./Avatar.scss";

export type PropsType = {
    user: UserInfo;
}
const Avatar: React.FC<PropsType> = ({ user }): any => {
    if (user) {
        if (user.avatar) {
            return (
                <img
                    className="avatar"
                    src={user.avatar}
                    alt={`Avatar ${user.fullname}`}
                />
            );
        } else {
            const { color, colorLighten } = generateAvatarFromHash(user._id);
            const firstChar = user.fullname
                .split(" ")
                .map((e) => e[0].toUpperCase().slice())
                .join(" ");
            return (
                <div
                    style={{
                        background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
                    }}
                    className="avatar avatar--symbol"
                >
                    {firstChar}
                </div>
            );
        }
    }
};

export default Avatar;
