import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post('http://localhost:5000/auth/login', formData);
const res = await axios.post('https://mental-wellness-backend-1-q6m0.onrender.com/auth/login', formData);

      // ✅ Store user in localStorage
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // ✅ Update parent state if passed
      if (setUser) setUser(res.data.user);

      alert("🎉 Login successful!");

      // ✅ Redirect and reload to re-render Navbar + other components
      navigate('/');
      window.location.reload();
    } catch (err) {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 offset-md-3">
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
