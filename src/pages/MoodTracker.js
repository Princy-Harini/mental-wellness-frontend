import React, { useState } from 'react';
import axios from 'axios';
import './MoodTracker.css';
import { useNavigate } from 'react-router-dom';

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😠", label: "Angry" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedMood) {
      setMessage("⚠️ Please select a mood!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/mood", {
        mood: selectedMood,
        note: note
      });
      setMessage("✅ Mood saved successfully!");
      setSelectedMood('');
      setNote('');
    } catch (err) {
      console.error("❌ Error saving mood:", err);
      setMessage("❌ Error saving mood. Please try again.");
    }
  };

  return (
    <div className="mood-tracker-container">
      <h2>🌈 How are you feeling today?</h2>
      <div className="mood-icons">
        {moods.map((m, index) => (
          <button
            key={index}
            type="button"
            className={`mood-btn ${selectedMood === m.label ? 'selected' : ''}`}
            onClick={() => setSelectedMood(m.label)}
          >
            <span className="emoji">{m.emoji}</span>
            <span>{m.label}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mood-form">
        <textarea
          placeholder="Write something if you'd like..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        /><br />
        <button type="submit">📝 Submit Mood</button>
        {message && <div className="mood-message">{message}</div>}
        <button
          type="button"
          className="track-btn"
          onClick={() => navigate('/mood-history')}
        >
          📊 Track Your Mood History
        </button>
      </form>
    </div>
  );
}

export default MoodTracker;
