import React from "react";
import SweetAlert from 'sweetalert-react';
import "./sweetalert.css";
export default class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {dark: false, popupStage: 4};
        let url = new URL(window.location.href);
        this.state.time = url.searchParams.get("time");
        this.state.timezone = url.searchParams.get("timezone");
        if(this.state.timezone == undefined){
            window.location.replace("chooseTimezone");
            return;
        }
        if(this.state.time == undefined){
            window.location.replace("apiCall?timezone=" + this.state.timezone);
            return;
        }
    }

    popupTitles = [
        "Enjoy!",
        "Share!",
        "Donate!",
        "Questions?",
        "Epilepsy Warning"
    ];

    popupText = [
        "Alright, enjoy your new clock!",
        "Thanks a lot for donating... *eye roll* Why don't you share this with your friends, you ungrateful potato?",
        "We don't currently have a payment system, but please contact me if you want to give me money!",
        "If you have any questions or concerns, please don't hesitate to contact the developer, u/nachoaveragecabbage, via Reddit Direct Messages.",
        "For our users prone to light-induced epileptic seizures, please refrain from rapidly clicking the Toggle Dark Mode button.",
    ];

    popupButtons = [
        "Thank you so much, generous and benevolent developer!",
        "Again, I am a bad person and I don't want to spread the word to make the Internet a better place",
        "No, I hate supporting open-source projects",
        "OK",
        "Got it",
    ];

    render(){
        return (
            <div style={{textAlign: "center", height: "100vh", color: (this.state.dark ? "white" : "black"), backgroundColor: (this.state.dark ? "black" : "white")}}>
                <SweetAlert
                    show={this.state.popupStage >= 0}
                    title={this.popupTitles[this.state.popupStage]}
                    text={this.popupText[this.state.popupStage]}
                    confirmButtonText={this.popupButtons[this.state.popupStage]}
                    onConfirm={() => this.setState({ popupStage: this.state.popupStage - 1 })}
                />

                <button onClick={() => {
                    this.setState({dark: !this.state.dark});
                }}>Toggle dark mode</button>
                
                <h1 style={{fontSize: "100px"}}>It was {this.state.time} at the time you loaded this page</h1>
                <h2 style={{fontSize: "50px"}}>in the timezone {this.state.timezone}</h2>
            </div>
        );
    }

}