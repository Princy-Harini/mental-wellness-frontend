import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Tips from './pages/Tips';
import MoodTracker from './pages/MoodTracker';
import MoodHistory from './pages/MoodHistory';
import MoodDashboard from './components/MoodDashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import TrackProgress from './pages/TrackProgress';
import Questions from './pages/Questions';

function App() {
  // ✅ Get user from localStorage on first load
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        {/* ✅ Auth Routes */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Protected Routes */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/journal" element={user ? <Journal /> : <Navigate to="/login" />} />
        <Route path="/contact" element={user ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/tips" element={user ? <Tips /> : <Navigate to="/login" />} />
        <Route path="/mood" element={user ? <MoodTracker /> : <Navigate to="/login" />} />
        <Route path="/mood-history" element={user ? <MoodHistory /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <MoodDashboard /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
        <Route path="/track" element={user ? <TrackProgress /> : <Navigate to="/login" />} />
        <Route path="/questions" element={user ? <Questions /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
