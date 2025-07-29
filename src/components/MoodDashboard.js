// src/components/MoodDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './MoodDashboard.css';

function MoodDashboard() {
  const [moods, setMoods] = useState([]);
  const [streak, setStreak] = useState(0);
  const [suggestion, setSuggestion] = useState('');
  const [quote, setQuote] = useState('');

  const moodMap = {
    Happy: 4,
    Neutral: 3,
    Sad: 2,
    Angry: 1
  };

  useEffect(() => {
    const fetchMoods = async () => {
      try {
const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/mood`);
        const data = res.data;

        setMoods(data);

        // Handle streak
        let streakCount = 0;
        for (let i = data.length - 1; i >= 0; i--) {
          if (data[i].mood === 'Happy') streakCount++;
          else break;
        }
        setStreak(streakCount);

        // Set suggestion
        const lastMood = data[data.length - 1]?.mood;
        if (lastMood === 'Sad') setSuggestion("Try watching something funny or call a friend 😊");
        else if (lastMood === 'Angry') setSuggestion("Take deep breaths or try journaling your thoughts.");
        else if (lastMood === 'Neutral') setSuggestion("Maybe go for a walk or try something creative.");
        else if (lastMood === 'Happy') setSuggestion("Keep it up! Spread that joy 💚");

        // Random motivational quote
        const quotes = [
          "Every day may not be good, but there is something good in every day.",
          "You’ve survived 100% of your bad days. Keep going!",
          "Your mental health is a priority. Your happiness is essential.",
          "Be kind to yourself today. You're doing your best."
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchMoods();
  }, []);

  const chartData = moods.map((m) => ({
    date: new Date(m.createdAt).toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short'
    }),
    moodScore: moodMap[m.mood]
  }));

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🌈 Mood Dashboard</h2>

      {/* Line Chart */}
      <div className="chart-card">
        <h4 className="card-title">Mood Trend</h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[1, 4]} ticks={[1, 2, 3, 4]} />
            <Tooltip />
            <Line type="monotone" dataKey="moodScore" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Achievements */}
      <div className="achievement-card">
        <h5>🏆 Achievements</h5>
        <p>You’ve had <strong>{streak}</strong> Happy day{streak !== 1 && 's'} in a row!</p>
      </div>

      {/* Suggestion */}
      {suggestion && (
        <div className="suggestion-card">
          <h5>💡 Today's Tip</h5>
          <p>{suggestion}</p>
        </div>
      )}

      {/* Motivational Quote */}
      <div className="quote-card">
        <blockquote>“{quote}”</blockquote>
      </div>
    </div>
  );
}

export default MoodDashboard;
