import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    if (storedUser) {
      setFormData({ name: storedUser.name, email: storedUser.email, password: '' });
    }
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // For demo only - real update should go to backend
    const updatedUser = { ...user, name: formData.name, email: formData.email };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setEditMode(false);
    alert("✅ Profile updated locally! (Backend update not implemented)");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">👤 Your Profile</h2>

      {user ? (
        <>
          {editMode ? (
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <button type="button" className="btn btn-success me-2" onClick={handleSave}>Save</button>
              <button type="button" className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
            </form>
          ) : (
            <div className="card p-3">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button className="btn btn-primary" onClick={handleEditClick}>Edit Profile</button>
            </div>
          )}
        </>
      ) : (
        <p>❌ No user data found. Please login.</p>
      )}
    </div>
  );
}

export default Profile;
