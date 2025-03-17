/* eslint-disable react/react-in-jsx-scope */
import Login from './views/auth/login';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './views/profile';
import { AuthProvider } from './contexts/authContext';

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Profile />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
