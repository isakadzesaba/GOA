// src/components/ProfileList.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ profiles }) {
  console.log(profiles); // Check if profiles prop is passed correctly

  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileList;
