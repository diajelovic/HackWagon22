import React, {useEffect} from 'react';
import {Router, BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';

import MainPage from './routes/MainPage/MainPage';

const App = () => {
  useEffect(() => {
    // fetch("http://localhost:3030").then(res => res.text()).then(res => console.log(res)) // Todo: replace to axios
  }, [])
  return (
    <div className="container app_container">
      <div className="app_wrapper">
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contacts" element={<h1 className="header-font" style={{color: "#19282F", fontSize: "5vmin", position: "absolute", top: "50%", transform: "translateY: -50%"}}>Page in progress</h1>} />
                <Route path="/menu" element={<h1 className="header-font" style={{color: "#19282F", fontSize: "5vmin", position: "absolute", top: "50%", transform: "translateY: -50%"}}>Page in progress</h1>} />
                <Route path="/signin" element={<h1 className="header-font" style={{color: "#19282F", fontSize: "5vmin", position: "absolute", top: "50%", transform: "translateY: -50%"}}>Page in progress</h1>} />
            </Routes>
          </BrowserRouter>
        {/* <MainPage></MainPage> */}
      </div>
    </div>
  );
}

export default App;
