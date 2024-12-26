import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store students and grade information
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [threshold, setThreshold] = useState(70); // Grade threshold for highlighting performance

  // Add student to the list
  const addStudent = () => {
    if (name && grade) {
      const newStudent = {
        id: Date.now(),
        name,
        grade: parseFloat(grade),
      };
      setStudents([...students, newStudent]);
      setName('');
      setGrade('');
    }
  };

  // Delete student by ID
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Highlight students based on the grade threshold
  const getGradeClass = (grade) => {
    return grade >= threshold ? 'good-performance' : 'poor-performance';
  };

  return (
    <div>
      <h1>Student Grade Tracker</h1>

      {/* Form to add students */}
      <div>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Table to display students and their grades */}
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className={getGradeClass(student.grade)}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Grade Threshold */}
      <div>
        <label>Grade Threshold: </label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
