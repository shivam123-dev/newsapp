import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [mode, setMode] = useState("light");
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("black");
  const [btnMode, setBtnMode] = useState("dark");
  const [progress, setProgress] = useState(10);
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      setMode("dark");
      setBgColor("black");
      setColor("white");
      setBtnMode("light");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      setBgColor("white");
      setColor("black");
      setBtnMode("dark");
    }
  };
  const setProgres = (progress) => {
    setProgress(progress);
  };
  let pageSize = 3;
  let apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <>
      <LoadingBar color={color} progress={progress} />
      <Router>
        <Navbar mode={mode} toggleMode = {toggleMode} color = {color} btnMode = {btnMode}/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgres}
                apiKey={apiKey}
                key={"general"}
                pageSize={pageSize}
                bgColor={bgColor}
                color={color}
                btnMode={btnMode}
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
                setProgress={setProgres}
                apiKey={apiKey}
                key={"business"}
                pageSize={pageSize}
                bgColor={bgColor}
                color={color}
                btnMode={btnMode}
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
                setProgress={setProgres}
                apiKey={apiKey}
                key={"entertainment"}
                pageSize={pageSize}
                bgColor={bgColor}
                color={color}
                btnMode={btnMode}
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
                setProgress={setProgres}
                apiKey={apiKey}
                key={"science"}
                pageSize={pageSize}
                bgColor={bgColor}
                color={color}
                btnMode={btnMode}
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
                setProgress={setProgres}
                apiKey={apiKey}
                key={"sports"}
                pageSize={pageSize}
                bgColor={bgColor}
                color={color}
                btnMode={btnMode}
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
                setProgress={setProgres}
                apiKey={apiKey}
                key={"technology"}
                pageSize={pageSize}
                bgColor={bgColor}
                color={color}
                btnMode={btnMode}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
