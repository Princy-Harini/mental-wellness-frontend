import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function MoodHistory() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/mood`);
        setMoods(res.data);
      } catch (err) {
        console.error("Error fetching mood history:", err);
      }
    };
    fetchMoods();
  }, []);

  // Count mood types
  const moodCounts = { Happy: 0, Sad: 0, Neutral: 0, Angry: 0 };
  moods.forEach((m) => {
    if (moodCounts[m.mood] !== undefined) {
      moodCounts[m.mood]++;
    }
  });

  const chartData = Object.keys(moodCounts).map(mood => ({
    mood,
    count: moodCounts[mood]
  }));

  // Find max value to scale Y-axis
  const maxCount = Math.max(...Object.values(moodCounts));

  return (
    <div style={{
      minHeight: '100vh',
      padding: '3rem',
      background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '850px',
        margin: 'auto',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#2d3436' }}>📊 Your Mood Overview</h2>
        <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '1.5rem', color: '#636e72' }}>
          “Emotions are data. Let’s learn from them.” 💭
        </p>

        {moods.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No mood data found.</p>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mood" />
              <YAxis domain={[0, maxCount + 2]} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#6c5ce7" />
            </BarChart>
          </ResponsiveContainer>
        )}
       <div className="explore-dashboard-box">
  <p>💡 Want to see your emotional journey with achievements, trends & suggestions?</p>
  <a href="/dashboard" className="explore-dashboard-btn">Explore Mood Insights</a>
</div>

        {/* Tips or thoughts */}
        <div style={{ marginTop: '2rem' }}>
          <h4>🧠 Emotion Reflections</h4>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>😊 Happy:</strong> Celebrate small joys. Capture what made you smile.</li>
            <li><strong>😐 Neutral:</strong> Observe. Not every day is a high or low — and that's okay!</li>
            <li><strong>😢 Sad:</strong> You’re not alone. Journaling or music can ease heavy feelings.</li>
            <li><strong>😠 Angry:</strong> Try breathing exercises, or take a pause. Your calm matters.</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default MoodHistory;
