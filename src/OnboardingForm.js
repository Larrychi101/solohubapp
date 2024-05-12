import React, { useState } from 'react';
import './OnboardingForm.css';

function OnboardingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    profession: '',
    areaOfExpertise: '',
    goals: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('https://helloworld90a877.azurewebsites.net/api/solohubapp?', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }; // This is the missing closing brace

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <h2>The onboarding process!</h2>
        <p className="form-description">This form is your first step towards joining our AI-powered marketplace for African talents and intellectual capabilities. Please provide some information about yourself so we can tailor our services to your needs and goals. All fields are required.</p>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Profession:</label>
          <input type="text" name="profession" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Area of Expertise:</label>
          <input type="text" name="areaOfExpertise" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Goals:</label>
          <textarea name="goals" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default OnboardingForm; // Make sure you have this line