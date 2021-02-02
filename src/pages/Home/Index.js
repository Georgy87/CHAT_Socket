import React from "react";
import { Message } from "../../components";
import Dialogs from "../../components/Dialogs/index";
import tr from "../../assets/audio/james.wav";

import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <Dialogs
                userId={0}
                items={[
                    {
                        _id: Math.random(),
                        text:
                            "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях.",

                        created_at: "2021, 1, 2",
                        user: {
                            _id: 1,
                            fullname: "Федор достоевский",
                            avatar: null,
                        },
                    },
                ]}
            />

            <Dialogs
                userId={0}
                items={[
                    {
                        _id: Math.random(),
                        text: "Как ты бро?",

                        created_at: new Date(),
                        user: {
                            _id: 1,
                            fullname: "Георгий Петренко",
                            avatar:
                                "https://upload.wikimedia.org/wikipedia/commons/0/00/%22Hidden_Figures%22_Screening_at_NMAAHC_%28NHQ201612140033%29_%28cropped%29.jpg",
                        },
                    },
                ]}
            />

            <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                date="Sun Apr 21 2019 21:55:29"
                audio={tr}
            />
            {/* <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                isTyping
            /> */}
            {/* <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
                date="Sun Apr 21 2019 21:55:29"
                attachments={[
                    {
                        filename: "image.jpg",
                        url:
                            "https://source.unsplash.com/100x100/?random=1&nature,water",
                    },
                    {
                        filename: "image.jpg",
                        url:
                            "https://source.unsplash.com/100x100/?random=2&nature,water",
                    },
                    {
                        filename: "image.jpg",
                        url:
                            "https://source.unsplash.com/100x100/?random=3&nature,water",
                    },
                ]}
            />
            <Message
                avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                text="Hello, World!"
                date="Sun Apr 21 2019 21:59:29"
                isMe={true}
                isReaded={false}
            />
            <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                attachments={[
                    {
                        filename: "image.jpg",
                        url:
                            "https://source.unsplash.com/100x100/?random=1&nature,water",
                    },
                ]}
            />
            <Message
                avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                isTyping
            /> */}
        </section>
    );
};

export default Home;
