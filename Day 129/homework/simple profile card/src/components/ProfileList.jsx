import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default ProfileList;
