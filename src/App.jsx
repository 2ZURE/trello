import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import WorkspaceHome from "./pages/workspace/Index";
import Table from "./pages/workspace/Table";
import Calendar from "./pages/workspace/Calendar";
import Board from "./pages/Board";
import Member from "./pages/Member";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <Router>
      <div className="app-container flex">
        <Sidebar />
        <div className="main-content flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<WorkspaceHome />} />
            <Route path="/workspace/table" element={<Table />} />
            <Route path="/workspace/calendar" element={<Calendar />} />
            <Route path="/board" element={<Board />} />
            <Route path="/member" element={<Member />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
