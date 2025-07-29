import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Questions() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);
  }, []);

  const [answers, setAnswers] = useState({
    sleep: '',
    energy: '',
    anxiety: '',
    joy: '',
    motivation: '',
    gratitude: '',
    support: '',
    productivity: '',
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🧠 Answers submitted:", answers);
    alert("✅ Reflection complete! Click below to track your mood.");
    setSubmitted(true);
  };

  const handleTrackMood = () => {
    if (user) {
      navigate('/mood');
    } else {
      alert("⚠️ Please login first to track your mood.");
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">🧠 Mood Reflection Questions</h2>
      <form className="col-md-8 offset-md-2" onSubmit={handleSubmit}>

        <div className="form-group mb-3">
          <label>😴 How well did you sleep last night?</label>
          <select className="form-control" name="sleep" onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="very well">Very well</option>
            <option value="okay">Okay</option>
            <option value="not well">Not well</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>⚡ Energy level right now (0–10)</label>
          <input type="range" name="energy" min="0" max="10" className="form-range" onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>😰 Are you feeling anxious/stressed?</label>
          <select className="form-control" name="anxiety" onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="a little">A little</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>😊 What made you smile or feel joy today?</label>
          <textarea className="form-control" name="joy" rows="2" onChange={handleChange} required />
        </div>

        <div className="form-group mb-3">
          <label>🚀 Motivation level (0–10)</label>
          <input type="range" name="motivation" min="0" max="10" className="form-range" onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>🙏 What are you grateful for today?</label>
          <textarea className="form-control" name="gratitude" rows="2" onChange={handleChange} required />
        </div>

        <div className="form-group mb-3">
          <label>🤝 Do you feel supported by people around you?</label>
          <select className="form-control" name="support" onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="a bit">A bit</option>
            <option value="not really">Not really</option>
          </select>
        </div>

        <div className="form-group mb-4">
          <label>📌 How productive were you today? (0–10)</label>
          <input type="range" name="productivity" min="0" max="10" className="form-range" onChange={handleChange} />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-4">Submit Answers</button>
        </div>
      </form>

      {submitted && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleTrackMood}>
            🎯 Now Track Your Mood
          </button>
        </div>
      )}

      <div className="text-center mt-5 text-muted">
        <p>"Knowing your thoughts is the first step toward healing."</p>
      </div>
    </div>
  );
}

export default Questions;
