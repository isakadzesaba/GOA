import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [initialTime, setInitialTime] = useState(10); // Default to 10 seconds
  const [remainingTime, setRemainingTime] = useState(() => {
    const savedTime = localStorage.getItem('remainingTime');
    return savedTime ? parseInt(savedTime, 10) : 10;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          const newTime = prevTime - 1;
          localStorage.setItem('remainingTime', newTime);
          return newTime;
        });
      }, 1000);
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      setIsRunning(false);
    }

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [isRunning, remainingTime]);

  useEffect(() => {
    const savedRunningState = localStorage.getItem('isRunning');
    if (savedRunningState === 'true' && remainingTime > 0) {
      setIsRunning(true);
    }
  }, []);

  const handleStart = () => {
    setIsRunning(true);
    localStorage.setItem('isRunning', 'true');
  };

  const handleStop = () => {
    setIsRunning(false);
    localStorage.setItem('isRunning', 'false');
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(initialTime);
    localStorage.setItem('remainingTime', initialTime);
    localStorage.setItem('isRunning', 'false');
  };

  const handleInputChange = (e) => {
    const newTime = parseInt(e.target.value, 10) || 0;
    setInitialTime(newTime);
    setRemainingTime(newTime);
    localStorage.setItem('remainingTime', newTime);
    localStorage.setItem('isRunning', 'false');
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-2xl font-bold">Countdown Timer</h1>
      <div className="flex flex-col items-center space-y-2">
        <input
          type="number"
          value={initialTime}
          onChange={handleInputChange}
          className="border rounded p-2 text-center w-24"
          placeholder="Enter time"
        />
        <p className="text-xl">Time Remaining: {remainingTime > 0 ? `${remainingTime}s` : "Time's up!"}</p>
        <div className="flex space-x-2">
          <button
            onClick={handleStart}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            disabled={isRunning || remainingTime <= 0}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
