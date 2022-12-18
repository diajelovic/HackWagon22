import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./routes/MainPage/MainPage";

const App = () => {
  return (
    <div className="container app_container">
      <div className="app_wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/*<Route path="/contacts" element={<h1 className="header-font" style={{color: "#19282F", fontSize: "5vmin", position: "absolute", top: "50%", transform: "translateY: -50%"}}>Page in progress</h1>} />*/}
            {/*<Route path="/menu" element={<h1 className="header-font" style={{color: "#19282F", fontSize: "5vmin", position: "absolute", top: "50%", transform: "translateY: -50%"}}>Page in progress</h1>} />*/}
            {/*<Route path="/signin" element={<h1 className="header-font" style={{color: "#19282F", fontSize: "5vmin", position: "absolute", top: "50%", transform: "translateY: -50%"}}>Page in progress</h1>} />*/}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
