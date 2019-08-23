import React from 'react';
import logo from './logo.svg';
import './App.css';

import CookieConsent from "react-cookie-consent";

import Clock from "./Clock";
import ApiCall from "./ApiCall";
import ChooseTimezone from "./ChooseTimezone";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{height: "100vh"}}>
      <Router style={{height: "100vh"}}>
        <Route path="/" exact component={Clock} />
        <Route path="/time" component={Clock} />
        <Route path="/chooseTimezone" exact component={ChooseTimezone} />
        <Route path="/apiCall" exact component={ApiCall} />
      </Router>
      <CookieConsent
          style={{ height: "50vh" }}
      >
        This webpage uses cookies to track whether you allowed cookies or not.
      </CookieConsent>
    </div>
  );
}

export default App;
