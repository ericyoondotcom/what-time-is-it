import React from "react";
import SweetAlert from 'sweetalert-react';
import "./sweetalert.css";
export default class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {fgColor: "black", bgColor: "white", popupStage: 4, blink: false};
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
        setInterval(() => {
            this.setState({blink: !this.state.blink});
        }, 1000);
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
            <div style={{textAlign: "center", height: "100vh", color: this.state.fgColor, backgroundColor: this.state.bgColor}}>
                <SweetAlert
                    show={this.state.popupStage >= 0}
                    title={this.popupTitles[this.state.popupStage]}
                    text={this.popupText[this.state.popupStage]}
                    confirmButtonText={this.popupButtons[this.state.popupStage]}
                    onConfirm={() => this.setState({ popupStage: this.state.popupStage - 1 })}
                />

                <button onClick={() => {
                    this.setState({fgColor: (this.state.fgColor == "black" ? "white" : "black"), bgColor: (this.state.fgColor == "black" ? "black" : "white")});
                }}>Toggle dark mode</button>
                <div style={{color: (this.state.blink ? "red" : "white"), backgroundColor: (this.state.blink ? "white" : "red"), width: "50vw", margin: "15px auto 0 auto", padding: "1em"}}>
                    <h1>New feature announcement!</h1>
                    <h2 style={{fontSize: "16px"}}>Our users on Reddit liked Dark Mode so much, in version 1.5, we now have custom CSS options!!!1!!1</h2>
                    <table style={{tableLayout: "fixed"}}>
                        <tr>
                            <td style={{width: "50%"}}>
                                <div style={{border: "yellow 10px dashed"}}>
                                    <h2>Custom Text Color</h2>
                                    <h3>Select color via HTML5 color picker</h3>
                                    <input type="color" onChange={(e) => {
                                        this.setState({fgColor: e.target.value});
                                    }}></input>
                                    <h3>Select color via Javascript <code>prompt()</code></h3>
                                    <button style={{border: 0, background: "black", color: "white", padding: "5px"}} onClick={
                                        () => {
                                            let resp = prompt("Enter a hex code or HTML5 color name and click submit.");
                                            if(resp == null || resp == ""){
                                                alert("WHY DIDN'T YOU TYPE ANYTHING YOU HACKER?!");
                                                return;
                                            }
                                            if(resp.match(/^[A-Fa-f0-9]+$/).length !== 0 && !resp.includes("#")) resp = "#" + resp;
                                            this.setState({fgColor: resp});
                                        }
                                    }>Select color</button>
                                    <h3>Select color via input box</h3>
                                    <input type="text" onChange={(e) => {
                                        if(e.target.value.length > 0 && e.target.value[0] != "#"){
                                            e.target.value = "#" + e.target.value;
                                        }
                                        this.setState({fgColor: e.target.value});
                                    }}></input>
                                </div>
                            </td>
                            <td style={{width: "50%"}}>
                                <div style={{border: "yellow 10px dashed"}}>
                                    <h2>Custom Background Color</h2>
                                    <h3>Select color via HTML5 color picker</h3>
                                    <input type="color" onChange={(e) => {
                                        this.setState({bgColor: e.target.value});
                                    }}></input>
                                    <h3>Select color via Javascript <code>prompt()</code></h3>
                                    <button style={{border: 0, background: "black", color: "white", padding: "5px"}} onClick={
                                        () => {
                                            let resp = prompt("Enter a hex code or HTML5 color name and click submit.");
                                            if(resp == null || resp == ""){
                                                alert("WHY DIDN'T YOU TYPE ANYTHING YOU HACKER?!");
                                                return;
                                            }
                                            if(resp.match(/^[A-Fa-f0-9]+$/).length !== 0 && !resp.includes("#")) resp = "#" + resp;
                                            this.setState({bgColor: resp});
                                        }
                                    }>Select color</button>
                                    <h3>Select color via input box</h3>
                                    <input type="text" onChange={(e) => {
                                        if(e.target.value.length > 0 && e.target.value[0] != "#"){
                                            e.target.value = "#" + e.target.value;
                                        }
                                        this.setState({bgColor: e.target.value});
                                    }}></input>
                                </div>
                            </td>
                        </tr>
                    </table>
                    
                </div>
                <h1 style={{fontSize: "100px"}}>It was {this.state.time} at the time you loaded this page</h1>
                <h2 style={{fontSize: "50px"}}>in the timezone {this.state.timezone}</h2>
            </div>
        );
    }

}