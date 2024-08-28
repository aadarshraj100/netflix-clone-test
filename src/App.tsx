import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App.css"; // Global styling

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/movies" element={<div>Movies Content</div>} />
            <Route path="/webseries" element={<div>Webseries Content</div>} />
            <Route path="/sports" element={<div>Sports Content</div>} />
            <Route path="/tvshows" element={<div>TV Shows Content</div>} />
            <Route path="/kids" element={<div>Kids Content</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;





