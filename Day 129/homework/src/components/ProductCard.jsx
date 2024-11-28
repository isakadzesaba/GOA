import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ profiles }) {
  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileList;
