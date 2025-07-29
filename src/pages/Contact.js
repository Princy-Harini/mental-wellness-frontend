import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'message') {
      setCharCount(e.target.value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccessMsg(`🌸 Thank you, ${formData.name}, for your heartfelt message!`);
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);
    } catch (error) {
      alert("❌ Error submitting feedback. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h3>🌼 We'd love to hear from you</h3>
        <p>"Your thoughts matter. Every word you share helps us grow better together."</p>
        <p className="quote">💬 “Kind words can be short and easy to speak, but their echoes are truly endless.” – Mother Teresa</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Write your thoughts here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="char-count">{charCount}/300</div>
        <button type="submit">🌟 Send Feedback</button>

        {successMsg && (
          <div className="success-message">
            {successMsg}
            <p>💌 We appreciate your feedback and will reflect it into future improvements!</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
