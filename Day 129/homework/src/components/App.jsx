import React from 'react';
import ProfileList from './ProfileList';

function App() {
  // Static array of user profiles or product data
  const profiles = [
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Designer' }
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <ProfileList profiles={profiles} /> {/* Pass profiles as props */}
    </div>
  );
}

export default App;
