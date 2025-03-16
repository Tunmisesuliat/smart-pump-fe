import React from 'react';
import Login from './views/auth/login';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './views/profile';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
