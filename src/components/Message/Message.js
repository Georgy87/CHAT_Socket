import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";
import waveSvg from "../../assets/img/wave.svg";
import playSvg from "../../assets/img/play.svg";
import pauseSvg from "../../assets/img/pause.svg";
import { convertCurrentTime } from "../../utils/helpers";
import Avatar from '../Avatar/Avatar';
// import { Popover, Button } from "antd";
import { Popover } from "antd";
import Icon from '@ant-design/icons';
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./Message.scss";

const MessageAudio = ({ audioSrc }) => {
    const audioElem = React.useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = "0.01";
        audioElem.current.addEventListener(
            "playing",
            () => {
                setIsPlaying(true);
            },
            false
        );
        audioElem.current.addEventListener(
            "ended",
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false
        );
        audioElem.current.addEventListener(
            "pause",
            () => {
                setIsPlaying(false);
            },
            false
        );
        audioElem.current.addEventListener("timeupdate", () => {
            const duration =
                (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, []);

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div
                className="message__audio-progress"
                style={{ width: progress + "%" }}
            />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="Pause svg" />
                        ) : (
                                <img src={playSvg} alt="Play svg" />
                            )}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </span>
            </div>
        </div>
    );
};

const Message = ({
    avatar,
    user,
    text,
    date,
    isMe,
    isReaded,
    attachments,
    isTyping,
    audio,
    onRemoveMessage
}) => {
    return (
        <div
            className={classNames("message", {
                "message--isme": isMe,
                "message--is-typing": isTyping,
                "message--image": attachments && attachments.length === 1,
                "message--is-audio": audio,
            })}
        >
            <div className="message__content">
                {isMe && isReaded ? (
                    <img
                        src={readedSvg}
                        alt="Checked icon"
                        className="message__icon-readed"
                    />
                ) : (
                        <img
                            src={noReadedSvg}
                            alt="Checked icon"
                            className="message__icon-readed message__icon-readed--no"
                        />
                    )}
                <Popover
                    content={
                        <div>
                            <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
                        </div>
                    }
                    trigger="click"
                >
                    <div className="message__icon-actions">
                        <Button
                            type="link"
                            shape="circle"
                            icon={<EllipsisOutlined />}
                            style={{ fontSize: "20px" }}
                        />
                    </div>
                </Popover>

                <div className="message__avatar">
                    <Avatar user={user} />
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                            {audio && <MessageAudio audioSrc={audio} />}
                        </div>
                    )}

                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map((item, index) => (
                                <div
                                    key={index}
                                    className="message__attachments-item"
                                >
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))}
                        </div>
                    )}

                    {date && (
                        <span className="message__date">
                            {formatDistanceToNow(new Date(date), {
                                locale: ruLocale,
                                addSuffix: true,
                            })}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string,
};

export default Message;
