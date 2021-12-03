/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useRef } from "react";
import "./App.css";
import logo from "./assets/icon-128.png";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
    const alanBtnContainer = useRef();

    useEffect(() => {
        alanBtn({
            key: "d6c61b1fdfbc3d540bde60cc7fc0e4fc2e956eca572e1d8b807a3e2338fdd0dc/stage",
            rootEl: alanBtnContainer.current,
            onCommand: ({ command, value }) => {
                if (command === "searchCommand") {
                    window.open(
                        "http://www.google.com/search?q=" + value,
                        "_blank"
                    );
                } else if (command === "closeTab") {
                    window.close();
                } else if (command === "openSite") {
                    window.open(`https://www.${value}.com`);
                    // window.open(`${value}`);
                } else if (command === "searchWord") {
                    window.open(
                        "https://www.google.com/search?q=" + value,
                        "_blank"
                    );
                } else if (command === "openCommand") {
                    window.open("http://www." + value + ".com/", "_blank");
                } else if (command === "playMusic") {
                    window.open(
                        `https://music.youtube.com/search?q=${value}`,
                        "_blank"
                    );
                    // Tab.onload = () => {
                    //   const btn = document.querySelector("#play-button");
                    //   btn.click();
                    //   console.log(btn);
                    // }
                    // setInterval(() => {
                    //     const btn = document.querySelector("#play-button");
                    //     // btn.click();
                    // }, 2000);
                }
            },
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>VAWB - Your personal virtual assisstant : </h3>
                <ul>
                    <li>👋: Hello | What's your name ? | What can you do ?</li>
                    <li>🔎: Search .... </li>
                    <li>❓ : What is the meaning of .... ?</li>
                    <li>🔗: Open website .... </li>
                    <li>👀: Close this Tab</li>
                    <li>🎶: Play ....</li>
                </ul>
            </header>
            <footer className="footer">
                Made by Ayush, Heramb, Abhinav & Ayushman
            </footer>
            <div className="alan-btn" ref={alanBtnContainer}></div>
        </div>
    );
};

export default App;
