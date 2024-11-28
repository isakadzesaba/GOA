// src/components/ProfileCard.jsx
import React from 'react';

function ProfileCard({ profile }) {
  console.log(profile); // Check if profile prop is passed correctly

  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>Age: {profile.age}</p>
      <p>Occupation: {profile.occupation}</p>
    </div>
  );
}

export default ProfileCard;
