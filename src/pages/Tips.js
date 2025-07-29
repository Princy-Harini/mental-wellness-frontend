import React from 'react';
import './Tips.css';

const tips = [
  {
    title: "🌿 Practice Mindfulness",
    description: "Spend a few minutes each day focusing on your breathing and thoughts without judgment."
  },
  {
    title: "📝 Keep a Journal",
    description: "Writing down your feelings can help you process emotions and track progress."
  },
  {
    title: "🚶‍♀️ Go for a Walk",
    description: "Fresh air and movement are great mood boosters."
  },
  {
    title: "🎨 Try a Hobby",
    description: "Engage in creative activities like drawing, music, or reading to relax your mind."
  },
  {
    title: "📴 Digital Detox",
    description: "Take regular breaks from screens and social media."
  },
  {
    title: "🤝 Talk to Someone",
    description: "Connecting with friends or a counselor can reduce stress and increase happiness."
  },
  {
  title: "💤 Sleep Well",
  description: "Aim for 7-8 hours of sleep to keep your mind fresh and alert."
},
{
  title: "💧 Stay Hydrated",
  description: "Drink enough water. Dehydration can affect mood and focus."
},
{
  title: "🌞 Get Sunlight",
  description: "Sun exposure boosts Vitamin D and improves mental health."
}
];

function Tips() {
  return (
    <div className="tips-container">
      <h2>✨ Self-Care Tips for Mental Wellness ✨</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
