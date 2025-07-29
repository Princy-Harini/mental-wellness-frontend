import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);
  }, [setUser]); // ✅ Include setUser here

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Mental Wellness Hub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/journal">Journal</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/tips">Tips</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/mood">Mood Tracker</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/mood-history">Mood History</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Mood Insights</Link></li>
                <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown">
    <img src="https://i.ibb.co/0y1XcQF/user.png" alt="profile" width="30" height="30" className="rounded-circle" />
  </a>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><span className="dropdown-item-text">Welcome, {user.name}</span></li>
    <li><hr className="dropdown-divider" /></li>
    <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
    <li><Link className="dropdown-item" to="/track">Track Progress</Link></li>
    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
  </ul>
</li>
 </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
