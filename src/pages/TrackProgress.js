import React, { useEffect, useState } from 'react';
import { FaBook, FaSmile, FaLightbulb } from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TrackProgress() {
  const [journalCount, setJournalCount] = useState(0);
  const [moodCount, setMoodCount] = useState(0);
  const [tipsRead, setTipsRead] = useState(0);

  useEffect(() => {
    // Dummy data – Replace with real API fetches later
    setJournalCount(12); // Example: 12 journal entries
    setMoodCount(9);     // Example: 9 mood entries
    setTipsRead(6);      // Example: 6 tips explored
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">📊 Your Mental Wellness Progress</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow text-center p-3 h-100">
            <FaBook size={40} className="text-info mb-2" />
            <h4>Journal Entries</h4>
            <p>You have written <strong>{journalCount}</strong> entries</p>
            <ProgressBar now={journalCount * 5} label={`${journalCount * 5}%`} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3 h-100">
            <FaSmile size={40} className="text-warning mb-2" />
            <h4>Mood Check-ins</h4>
            <p>You have tracked your mood <strong>{moodCount}</strong> times</p>
            <ProgressBar variant="warning" now={moodCount * 10} label={`${moodCount * 10}%`} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3 h-100">
            <FaLightbulb size={40} className="text-success mb-2" />
            <h4>Tips Explored</h4>
            <p>You have explored <strong>{tipsRead}</strong> helpful tips</p>
            <ProgressBar variant="success" now={tipsRead * 15} label={`${tipsRead * 15}%`} />
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h5 className="text-secondary">🌟 Keep going! Every step you take matters for your mental wellness journey.</h5>
      </div>
    </div>
  );
}

export default TrackProgress;
