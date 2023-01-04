import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      bgColor: "white",
      color: "black",
      btnMode: "dark",
      progress: 10,
    };
  }
  toggleMode = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "black";
      this.setState({
        mode: "dark",
        bgColor: "black",
        color: "white",
        btnMode: "light",
      });
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({
        mode: "light",
        bgColor: "white",
        color: "black",
        btnMode: "dark",
      });
    }
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  pageSize = 3;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  render() {
    return (
      <>
        <LoadingBar color={this.state.color} progress={this.state.progress} />
        <Router>
          <Navbar mode={this.state.mode} />
          <div className="form-check form-switch float-sm-end">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={this.toggleMode}
            />
            <label
              htmlFor="flexSwitchCheckDefault"
              style={{ color: `${this.state.color}` }}
            >{`Enable ${this.state.btnMode} mode`}</label>
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key={"general"}
                  pageSize={this.pageSize}
                  bgColor={this.state.bgColor}
                  color={this.state.color}
                  btnMode={this.state.btnMode}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key={"business"}
                  pageSize={this.pageSize}
                  bgColor={this.state.bgColor}
                  color={this.state.color}
                  btnMode={this.state.btnMode}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  bgColor={this.state.bgColor}
                  color={this.state.color}
                  btnMode={this.state.btnMode}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key={"science"}
                  pageSize={this.pageSize}
                  bgColor={this.state.bgColor}
                  color={this.state.color}
                  btnMode={this.state.btnMode}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key={"sports"}
                  pageSize={this.pageSize}
                  bgColor={this.state.bgColor}
                  color={this.state.color}
                  btnMode={this.state.btnMode}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key={"technology"}
                  pageSize={this.pageSize}
                  bgColor={this.state.bgColor}
                  color={this.state.color}
                  btnMode={this.state.btnMode}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
