import React from "react";

export default class ApiCall extends React.Component {

    constructor(props){
        super(props);
        this.state = {text: ""};
        let url = new URL(window.location.href);
        this.state.timezone = url.searchParams.get("timezone");
        this.state.endpoint = "http://worldtimeapi.org/api/timezone/" + this.state.timezone;
    }

    render(){
        return (
            <div style={{textAlign: "center", position: "relative"}}>
                <h1><blink>To support our users still using Internet Explorer version 6.0 and earlier, please manually complete an HTTP GET request.</blink></h1>
                <h2>Method 1</h2>
                <p>Navigate to the webpage <a href={this.state.endpoint}>{this.state.endpoint}</a>, and paste the data in the input box below.</p>
                <p>(If you click on the link above, make sure to open it in a new tab! This is a <i>feature</i> to support badly-programmed homemade browsers that don't support the <code>target</code> attribute.</p>
                <h2>Method 2</h2>
                <p>In your personal computer's shell, enter the command: <code>curl "{this.state.endpoint}"</code>, and paste the data in the input box below.</p>
                <h2>Paste Data Here</h2>
                <input height="300" placeholder="Paste your data here, then press the button below" onChange={(e) => {
                    this.setState({text: e.target.value});
                }}></input>
                <br />
                <button onClick={
                    () => {
                        let data = JSON.parse(this.state.text);
                        let date = new Date(data.datetime);
                        window.location.replace("time?timezone=" + this.state.timezone + "&time=" + date.getHours() + ":" + (date.getMinutes().toString().length == 1 ? "0" : "") + date.getMinutes());
                    }
                }>Submit</button>
            </div>
        );
    }

}