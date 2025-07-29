import React, { useState } from 'react';
import axios from 'axios';
import './Journal.css';

function Journal() {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !entry) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/journal", { title, entry });
      setMessage("Thanks for sharing your thoughts. You're doing great 💚");

      // Suggestions
      if (entry.toLowerCase().includes('sad') || entry.toLowerCase().includes('lonely')) {
        setSuggestion("Feeling low? Try writing affirmations or going for a nature walk.");
      } else if (entry.toLowerCase().includes('angry')) {
        setSuggestion("Try breathing exercises and listening to calming music.");
      } else if (entry.toLowerCase().includes('happy') || entry.toLowerCase().includes('grateful')) {
        setSuggestion("Keep a gratitude journal. Reflecting on positives boosts happiness!");
      } else {
        setSuggestion("Keep journaling daily. It's a powerful self-care habit.");
      }

      setTitle('');
      setEntry('');
    } catch (err) {
      setMessage("Something went wrong while saving your entry.");
      console.error(err);
    }
  };

  return (
    <div className="journal-container">
      <h2>📝 Write Your Thoughts</h2>
      <form onSubmit={handleSubmit} className="journal-form">
        <input
          type="text"
          placeholder="Title of your journal..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your feelings here..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        ></textarea>
        <button type="submit">Save Entry</button>
      </form>
      {message && <p className="journal-message">{message}</p>}
      {suggestion && (
        <div className="journal-suggestion">
          <p>🌟 Tip for you: {suggestion}</p>
          <a href="/tips" className="btn-tip-link">Explore More Self-Care Tips</a>
        </div>
      )}
    </div>
  );
}

export default Journal;
