import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await axios.post('http://localhost:5000/auth/signup', formData);
await axios.post('https://mental-wellness-backend-1-q6m0.onrender.com/auth/signup', formData);
      alert("🎉 Signup successful! You can now login.");
      setFormData({ name: '', email: '', password: '' });
      navigate('/login');
    } catch (error) {
      if (error.response?.status === 409) {
        alert("⚠️ This email is already registered.");
      } else {
        alert("❌ Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <input type="text" name="name" placeholder="Your Name"
          className="form-control mb-3" value={formData.name} onChange={handleChange} required />

        <input type="email" name="email" placeholder="Your Email"
          className="form-control mb-3" value={formData.email} onChange={handleChange} required />

        <input type="password" name="password" placeholder="Password"
          className="form-control mb-3" value={formData.password} onChange={handleChange} required />

        <button type="submit" className="btn btn-success w-100">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
