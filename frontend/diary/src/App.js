import { Routes, Route } from 'react-router-dom';
import './App.css';
import  React from 'react';

import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className='App'> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cal" element={<Calendar />} />
        <Route path="/schedule" element={<Schedule />} />
    </Routes>
    </div>
  );
}

export default App;
