import React from "react";
import ProfileList from "./components/ProfileList";
import "./index.css";

const App = () => {
  const profiles = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
  ];

  return (
    <div className="app">
      <h1>Profile Cards</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default App;
