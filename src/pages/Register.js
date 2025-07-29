import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="col-md-6">
        <input type="text" name="name" placeholder="Name" required
          value={form.name} onChange={handleChange} className="form-control mb-3" />
        <input type="email" name="email" placeholder="Email" required
          value={form.email} onChange={handleChange} className="form-control mb-3" />
        <input type="password" name="password" placeholder="Password" required
          value={form.password} onChange={handleChange} className="form-control mb-3" />
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
