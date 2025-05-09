import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";
import RegisterPage from "./LoginPage/RegisterPage";import Hrms from "./components/Hrms";
import VideoRoomButtons from "./VideoRooms/VideoRoomButtons";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/test" element={<VideoRoomButtons />} />
        <Route path="/dash" element={<Hrms />} />
      </Routes>
    </Router>
  );
};

export default App;
