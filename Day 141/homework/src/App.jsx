import React, { useState, useEffect } from 'react';

function App() {
  // State for timer and background color
  const [timerMessage, setTimerMessage] = useState('loading...');
  const [bgColor, setBgColor] = useState('white');
  const [windowSizeMessage, setWindowSizeMessage] = useState('');

  // 1. Resize Event Optimization (Debouncing)
  useEffect(() => {
    const handleResize = () => {
      const isVertical = window.innerWidth < window.innerHeight;
      setWindowSizeMessage(isVertical ? "ფანჯარა არის ვერტიკალური" : "ფანჯარა არის ჰორიზონტალური");
    };

    // Debouncing function
    let debounceTimeout;
    const debounceResize = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(handleResize, 200); // Delay resize handling
    };

    window.addEventListener('resize', debounceResize);

    // Initial window size check
    handleResize();

    return () => {
      window.removeEventListener('resize', debounceResize);
      clearTimeout(debounceTimeout);
    };
  }, []);

  // 2. Timer Logic (Logging "loading..." every second)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerMessage('loading...');
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  // 3. Change Background Color on Button Click
  const handleChangeColor = () => {
    const newColor = bgColor === 'white' ? 'lightblue' : 'white';
    setBgColor(newColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Level 141 Tasks</h1>

      {/* 2. Timer Message */}
      <div>
        <p>{timerMessage}</p>
      </div>

      {/* 3. Change Background Color Button */}
      <button onClick={handleChangeColor}>Change Background Color</button>

      {/* 4. Window Size Message */}
      <div>
        <p>{windowSizeMessage}</p>
      </div>
    </div>
  );
}

export default App;
