import React from "react";
import Clock from "./Clock";

const characters = [
    ["a", "b", "c", "A", "B", "C"],
    ["d", "e", "f", "D", "E", "F"],
    ["g", "h", "i", "G", "H", "I"],
    ["j", "k", "l", "J", "K", "L"],
    ["m", "n", "o", "M", "N", "O"],
    ["p", "q", "r", "P", "Q", "R"],
    ["s", "t", "u", "S", "T", "U"],
    ["v", "w", "x", "V", "W", "X"],
    ["y", "z", "Y", "Z"],
    ["/"],
    ["_"]
]

export default class ChooseTimezone extends React.Component {

    constructor(props){
        super(props);
        this.state = {text: ""};
        this.charIdx = 0;
        this.lastPress = -1;
    }


    handleButtonPress = (index) => {
        if(index == this.lastPress){
            this.charIdx++;
            if(this.charIdx >= characters[index].length){
                this.charIdx = 0;
            }
            this.setState({text: this.state.text.slice(0, this.state.text.length - 1) + characters[index][this.charIdx]});
        }else{
            this.lastPress = index;
            this.charIdx = 0;
            this.setState({text: this.state.text + characters[index][0]});
        }
        if(this.state.text == "hack"){
            this.setState({text: "America/Los_Angeles"}); //Guess where I'm from && how lazy I am
        }
    }

    render(){
        return (
            <div style={{textAlign: "center", position: "relative"}}>
                <h1><blink><marquee>To support our users using VPNs, we cannot estimate your timezone based on your IP.</marquee></blink></h1>
                <h1>To support our users on devices with small screens, please input your <b>timezone</b> with the number pad below. A list of timezones is available <a href="http://worldtimeapi.org/timezones">here</a>.</h1>
                <h2>Click/tap once for the first letter displayed, twice for the second, etc. Capitalization matters!</h2>
                <div style={{marginTop: "100px"}} />
                <h1 style={{fontFamily: "'Monaco', monospace", backgroundColor: "black", color: "#00FF00", width: "30vw", margin: "0 auto"}}>{this.state.text == "" ? "Type a timezone..." : this.state.text}</h1>
                <button disabled={this.state.text == ""} onClick={() => {
                    window.location.replace("apiCall?timezone=" + this.state.text);
                }}>Submit</button>
                <div style={{marginTop: "100px"}} />
                <table style={{margin: "0 auto", height: "30vh"}}>
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={() => {this.handleButtonPress(0)}}>a/b/c/A/B/C</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(1)}}>d/e/f/D/E/F</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(2)}}>g/h/i/G/H/I</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => {this.handleButtonPress(3)}}>j/k/l/J/K/L</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(4)}}>m/n/o/M/N/O</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(5)}}>p/q/r/P/Q/R</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => {this.handleButtonPress(6)}}>s/t/u/S/T/U</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(7)}}>v/w/x/V/W/X</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(8)}}>y/z/Y/Z</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => {this.handleButtonPress(9)}}>Slash</button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    this.setState({text: this.state.text.slice(0, this.state.text.length - 1)});
                                }}>Backspace</button>
                            </td>
                            <td>
                                <button onClick={() => {this.handleButtonPress(10)}}>Underscore</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}