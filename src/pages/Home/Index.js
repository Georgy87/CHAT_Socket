import React from "react";
import { Message } from "../../components";
import Dialogs from "../../components/Dialogs/index";
import tr from "../../assets/audio/james.wav";
import {
    TeamOutlined,
    FormOutlined,
    EllipsisOutlined,
    SmileOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { Form, Search, Input, Button, Checkbox } from "antd";
// import { Input }from "antd}"

import "./Home.scss";
import Status from "../../components/Status/index";
import ChatInput from "../../components/ChatInput/index";

const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Icon component={TeamOutlined} />
                            <span>Список диалогов</span>
                        </div>
                        <Button
                            type="link"
                            shape="circle"
                            icon={<FormOutlined />}
                        />
                    </div>
                    <div className="chat__sidebar-search">
                        <Input.Search
                            placeholder="Поиск по сообщениям"
                            type="text"
                            // style={{ width: 200 }}
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            userId={0}
                            items={[
                                {
                                    _id: "4l1abed21666dd2f1a5fcaca",
                                    text:
                                        "Sunt labore duis sit laborum velit esse cupidatat exercitation commodo ea laborum et tempor proident. Occaecat veniam excepteur ipsum est sint sit do enim aute mollit deserunt laboris duis voluptate. Et ex aute enim consequat excepteur ipsum proident est cupidatat consectetur fugiat eiusmod proident. Reprehenderit qui dolor cillum sit sit in elit elit duis amet dolor duis fugiat. Magna reprehenderit aliqua ex tempor tempor esse cillum.",
                                    created_at:
                                        "Tue Dec 10 1974 09:31:07 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "52601abed2be9d07fef606ee99",
                                        fullname: "Angel Suarez",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed2316faa8ea7ebdb75",
                                    text:
                                        "Proident non ut mollit ea. Excepteur commodo ut cupidatat culpa culpa ex cillum. Qui incididunt occaecat incididunt irure aliqua aliquip mollit commodo. Elit dolor officia occaecat nisi sint reprehenderit. Ad velit nisi ad dolore elit reprehenderit.",
                                    created_at:
                                        "Tue Feb 09 2010 07:04:34 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "yppr5601abed2b5a634031cc92739",
                                        fullname: "Renee Bryant",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed22e9ca059bc41df7b",
                                    text:
                                        "Veniam aliqua proident aliqua exercitation consectetur aute veniam sint ullamco proident ullamco adipisicing officia sunt. Laborum velit veniam cillum esse sunt eu amet. Consequat est laborum ea aliquip consequat aliquip nostrud consectetur dolore elit. Laborum adipisicing deserunt qui cillum aliquip duis. Veniam nostrud sint elit aute enim nostrud ea tempor consectetur esse.",
                                    created_at:
                                        "Sun Dec 21 2008 14:33:37 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "tle0tabed2582456eca66a943e",
                                        fullname: "Tyson Mcmahon",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "64rabed20e773f8ac1a15b23",
                                    text:
                                        "Ex in laboris nulla ad sunt dolore culpa deserunt labore occaecat culpa ex. Duis id reprehenderit irure eiusmod aliquip irure aliquip duis Lorem nulla et. Sunt pariatur duis officia veniam consectetur incididunt. Exercitation enim excepteur ullamco do. Quis aliquip pariatur exercitation sunt exercitation commodo ad.",
                                    created_at:
                                        "Thu Aug 22 1985 02:38:56 GMT+0400 (Москва, летнее время)",
                                    user: {
                                        _id: "yt4601abed25cc74610cedd6066",
                                        fullname: "Mejia Reynolds",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed2af592ba3bb72ea56",
                                    text:
                                        "Eu irure laboris officia est reprehenderit culpa proident adipisicing. Et ea enim eu do excepteur. Excepteur voluptate nulla et consectetur. Ipsum incididunt pariatur aute sunt deserunt nulla. Occaecat non elit aute cupidatat consequat deserunt nostrud.",
                                    created_at:
                                        "Sun Aug 01 1982 03:44:40 GMT+0400 (Москва, летнее время)",
                                    user: {
                                        _id: "lkg4234601abed25ff66f5827b63c93",
                                        fullname: "Lynn Caldwell",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed2fe8580a868d20ced",
                                    text:
                                        "Adipisicing et velit incididunt consequat mollit nisi ea. Lorem exercitation sit laboris proident eu occaecat. Non aute ipsum nostrud esse nulla amet anim laboris mollit exercitation veniam elit ex quis. Ipsum deserunt magna anim excepteur tempor elit. Non aute nisi id aute labore ullamco mollit voluptate cupidatat reprehenderit qui laborum nisi.",
                                    created_at:
                                        "Sat Aug 05 2017 12:22:18 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "gkl42abed20d71e0cd50199968",
                                        fullname: "Natasha Frank",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed221f5b416a877e1fb",
                                    text:
                                        "Deserunt deserunt mollit amet labore aliqua id labore labore amet aute pariatur enim minim. Commodo et consectetur culpa mollit voluptate. Non aliquip adipisicing do culpa. Elit laborum proident eu sit ex irure in id labore anim veniam ex. Minim irure eiusmod esse in do.",
                                    created_at:
                                        "Thu Jul 29 1999 04:20:04 GMT+0400 (Москва, летнее время)",
                                    user: {
                                        _id: "2tp4234601abed24dcad772c69cc6dc",
                                        fullname: "Stone Howe",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed29d3722633d6579d5",
                                    text:
                                        "Velit sit quis enim elit. Minim pariatur quis voluptate aliqua enim ad nisi dolor nulla aliqua ullamco eu. Eiusmod eu et dolor et. Labore sint aliqua esse minim elit mollit irure culpa elit esse dolore. Mollit non Lorem nulla laboris pariatur ad aute sit eu ullamco nisi consectetur.",
                                    created_at:
                                        "Wed Jun 07 2017 06:48:03 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "pto651abed2d096b932df501e59",
                                        fullname: "Roach Romero",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed26eb1ca69f8624a98",
                                    text:
                                        "Excepteur do culpa in officia excepteur. Esse proident irure cupidatat occaecat minim. Ea magna nulla incididunt officia. Aliquip nisi sint dolor cupidatat ipsum excepteur sunt est labore dolor. Ipsum mollit cupidatat anim minim sint laboris minim ad ut fugiat Lorem.",
                                    created_at:
                                        "Thu Feb 04 1982 08:06:36 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "52601abed2752076de9d4cacd3",
                                        fullname: "Reeves Wright",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed28e86bde15f38e1c6",
                                    text:
                                        "Dolor fugiat officia Lorem excepteur irure nisi sit consequat ullamco. Minim voluptate irure pariatur id amet magna minim officia in. Occaecat nisi eu adipisicing cupidatat minim adipisicing non non cupidatat ad cillum. Nostrud excepteur deserunt ad quis duis. Sit enim cupidatat eu occaecat aliqua.",
                                    created_at:
                                        "Tue Sep 04 2018 15:30:52 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "14601abed2db84b6dd7fde9e85",
                                        fullname: "Julie Velasquez",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed2f580f470df2535b5",
                                    text:
                                        "Veniam ex irure adipisicing aute commodo voluptate sint laboris nulla sint nostrud proident sunt ullamco. Cillum reprehenderit occaecat dolore in eiusmod excepteur voluptate cillum. Non voluptate pariatur Lorem velit cupidatat cillum. Officia elit ipsum ad aute reprehenderit sint pariatur sint. Aute dolore commodo veniam aute aute magna ullamco dolor minim sint nisi commodo adipisicing.",
                                    created_at:
                                        "Thu Oct 20 1988 09:34:48 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "52u01abed20b857e3f1d320f4d",
                                        fullname: "Terry Stark",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "601abed2e661e65e74f06d3c",
                                    text:
                                        "Commodo labore sit fugiat aliqua ut proident esse. In magna aute adipisicing qui est consectetur veniam occaecat sunt. Incididunt elit amet ipsum culpa minim sunt amet esse. Et eu tempor consectetur in officia officia non aliquip eu ut culpa in consectetur cupidatat. Enim amet amet ex deserunt veniam consectetur velit nisi.",
                                    created_at:
                                        "Thu Aug 02 2012 07:44:28 GMT+0400 (Москва, стандартное время)",
                                    user: {
                                        _id: "346i1abed21e03c086de7da2b5",
                                        fullname: "Patrica Faulkner",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "051abed2f580f470df2535b5",
                                    text:
                                        "Veniam ex irure adipisicing aute commodo voluptate sint laboris nulla sint nostrud proident sunt ullamco. Cillum reprehenderit occaecat dolore in eiusmod excepteur voluptate cillum. Non voluptate pariatur Lorem velit cupidatat cillum. Officia elit ipsum ad aute reprehenderit sint pariatur sint. Aute dolore commodo veniam aute aute magna ullamco dolor minim sint nisi commodo adipisicing.",
                                    created_at:
                                        "Thu Oct 20 1988 09:34:48 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "rty2u01abed20b857e3f1d320f4d",
                                        fullname: "Terry Stark",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "781abed2e661e65e74f06d3c",
                                    text:
                                        "Commodo labore sit fugiat aliqua ut proident esse. In magna aute adipisicing qui est consectetur veniam occaecat sunt. Incididunt elit amet ipsum culpa minim sunt amet esse. Et eu tempor consectetur in officia officia non aliquip eu ut culpa in consectetur cupidatat. Enim amet amet ex deserunt veniam consectetur velit nisi.",
                                    created_at:
                                        "Thu Aug 02 2012 07:44:28 GMT+0400 (Москва, стандартное время)",
                                    user: {
                                        _id: "3rt6i1abed21e03c086de7da2b5",
                                        fullname: "Patrica Faulkner",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "i51abed2f580f470df2535b5",
                                    text:
                                        "Veniam ex irure adipisicing aute commodo voluptate sint laboris nulla sint nostrud proident sunt ullamco. Cillum reprehenderit occaecat dolore in eiusmod excepteur voluptate cillum. Non voluptate pariatur Lorem velit cupidatat cillum. Officia elit ipsum ad aute reprehenderit sint pariatur sint. Aute dolore commodo veniam aute aute magna ullamco dolor minim sint nisi commodo adipisicing.",
                                    created_at:
                                        "Thu Oct 20 1988 09:34:48 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "r987y2u01abed20b857e3f1d320f4d",
                                        fullname: "Terry Stark",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "751abed2e661e65e74f06d3c",
                                    text:
                                        "Commodo labore sit fugiat aliqua ut proident esse. In magna aute adipisicing qui est consectetur veniam occaecat sunt. Incididunt elit amet ipsum culpa minim sunt amet esse. Et eu tempor consectetur in officia officia non aliquip eu ut culpa in consectetur cupidatat. Enim amet amet ex deserunt veniam consectetur velit nisi.",
                                    created_at:
                                        "Thu Aug 02 2012 07:44:28 GMT+0400 (Москва, стандартное время)",
                                    user: {
                                        _id: "trt6i1abed21e03c086de7da2b5",
                                        fullname: "Patrica Faulkner",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "i51abed2f580f470df2535b5",
                                    text:
                                        "Veniam ex irure adipisicing aute commodo voluptate sint laboris nulla sint nostrud proident sunt ullamco. Cillum reprehenderit occaecat dolore in eiusmod excepteur voluptate cillum. Non voluptate pariatur Lorem velit cupidatat cillum. Officia elit ipsum ad aute reprehenderit sint pariatur sint. Aute dolore commodo veniam aute aute magna ullamco dolor minim sint nisi commodo adipisicing.",
                                    created_at:
                                        "Thu Oct 20 1988 09:34:48 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "r987y2u01abed20b857e3f1d320f4d",
                                        fullname: "Terry Stark",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "751abed2e661e65e74f06d3c",
                                    text:
                                        "Commodo labore sit fugiat aliqua ut proident esse. In magna aute adipisicing qui est consectetur veniam occaecat sunt. Incididunt elit amet ipsum culpa minim sunt amet esse. Et eu tempor consectetur in officia officia non aliquip eu ut culpa in consectetur cupidatat. Enim amet amet ex deserunt veniam consectetur velit nisi.",
                                    created_at:
                                        "Thu Aug 02 2012 07:44:28 GMT+0400 (Москва, стандартное время)",
                                    user: {
                                        _id: "trt6i1abed21e03c086de7da2b5",
                                        fullname: "Patrica Faulkner",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "i51abed2f580f470df2535b5",
                                    text:
                                        "Veniam ex irure adipisicing aute commodo voluptate sint laboris nulla sint nostrud proident sunt ullamco. Cillum reprehenderit occaecat dolore in eiusmod excepteur voluptate cillum. Non voluptate pariatur Lorem velit cupidatat cillum. Officia elit ipsum ad aute reprehenderit sint pariatur sint. Aute dolore commodo veniam aute aute magna ullamco dolor minim sint nisi commodo adipisicing.",
                                    created_at:
                                        "Thu Oct 20 1988 09:34:48 GMT+0300 (Москва, стандартное время)",
                                    user: {
                                        _id: "rrt387y2u01abed20b857e3f1d320f4d",
                                        fullname: "Terry Stark",
                                        avatar: null,
                                    },
                                },
                                {
                                    _id: "751abed2e661e65e74f06d3c",
                                    text:
                                        "Commodo labore sit fugiat aliqua ut proident esse. In magna aute adipisicing qui est consectetur veniam occaecat sunt. Incididunt elit amet ipsum culpa minim sunt amet esse. Et eu tempor consectetur in officia officia non aliquip eu ut culpa in consectetur cupidatat. Enim amet amet ex deserunt veniam consectetur velit nisi.",
                                    created_at:
                                        "Thu Aug 02 2012 07:44:28 GMT+0400 (Москва, стандартное время)",
                                    user: {
                                        _id: "tsdft6i1abed21e03c086de7da2b5",
                                        fullname: "Patrica Faulkner",
                                        avatar: null,
                                    },
                                },

                            ]}
                        />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">
                                Георгий Петренко
                            </b>
                            <div className="chat__dialog-header-status">
                                <Status online />
                            </div>
                            <Button
                                type="link"
                                shape="circle"
                                icon={<EllipsisOutlined />}
                                style={{ fontSize: "20px" }}
                            />
                        </div>
                    </div>
                    <div className="chat__dialog-messages">
                        <Message
                            avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                            date="Sun Apr 21 2019 21:55:29"
                            audio={tr}
                        />
                        <Message
                            avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
                            isTyping
                        />

                        <Message
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
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                          <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                          <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />
                        <Message
                            avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
                            text="Hello, World!"
                            date="Sun Apr 21 2019 21:59:29"
                        />

                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
