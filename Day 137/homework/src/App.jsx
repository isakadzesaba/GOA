import React, { useState, useEffect } from 'react';

function App() {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Work');
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the app loads
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (taskName) {
      const newTask = {
        name: taskName,
        category: category,
        completed: false,
        id: Date.now(),
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
    }
  };

  // Mark a task as completed
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks by category
  const filterTasks = (category) => {
    return tasks.filter((task) => task.category === category);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>Tasks</h2>
      <div>
        <button onClick={() => setTasks(filterTasks('Work'))}>Work</button>
        <button onClick={() => setTasks(filterTasks('Personal'))}>Personal</button>
        <button onClick={() => setTasks(filterTasks('Study'))}>Study</button>
        <button onClick={() => setTasks(JSON.parse(localStorage.getItem('tasks')))}>All</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.name} - {task.category}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
