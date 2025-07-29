import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="overlay">
        <div className="content-box">
          <h1>Welcome to Mental Wellness Hub 💚</h1>
          <p>"Your mental health is a priority. Your happiness is essential."</p>
          <div className="quotes-section">
  <h2>Daily Motivation 💬</h2>
  <ul>
    <li>"Every day may not be good, but there is something good in every day."</li>
    <li>"Healing takes time, and that’s okay."</li>
    <li>"Take time to do what makes your soul happy."</li>
    <li>"You are stronger than you think."</li>
  </ul>
</div>
<div className="text-center mt-5 text-primary">
  <p>"Knowing how you feel is the first step to feeling better."</p>
</div>
<div className="text-center mt-5">
  <h4 className="mb-3">💬 Not sure about your mood? Let's reflect!</h4>
  <a href="/questions" className="btn btn-outline-primary px-4 py-2">🧠 Reflect Your Mood</a>
</div>

          {/* <a href="/mood" className="btn-explore">Track Your Mood</a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
