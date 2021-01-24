import React from "react";
import { Message } from "../../components";

import "./Home.scss";

const Home = () => {
    return (
        <section className="home">
            <Message
                avatar="https://images.unsplash.com/photo-1611467377820-6b374841dc5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                text="Как сам бротский"
                date="21-23-2021"
            />
        </section>
    );
};

export default Home;
