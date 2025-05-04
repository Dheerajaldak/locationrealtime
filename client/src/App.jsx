import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";
import RegisterPage from "./LoginPage/RegisterPage";

import Hrms from "./components/Hrms";
import CreateRoomButton from "./VideoRooms/CreateRoomButton";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/test" element={<CreateRoomButton/>} />
        <Route path="/hrms" element={<Hrms/>} />
      </Routes>
    </Router>
  );
};

export default App;
