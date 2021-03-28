import React from "react";

import Status from "../../components/Status/Status";
import Messages from '../../components/Messages/Messages';
import Sidebar from '../../components/SideBar/SideBar';

import "./Home.scss";

const Home = () => {
    return (
            <div className="chat" style={{ boxShadow: '0 2px 40px rgb(143 168 191 / 45%)'}}>
                <Sidebar />
                <div className="chat__dialog">
                    <Status />
                    <Messages />
                </div>
            </div>
    );
};

export default Home;
