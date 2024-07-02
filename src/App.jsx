import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-4xl font-mono bg-white p-4 rounded shadow-lg mb-4">
        {formatTime(time)}
      </div>
      <div className="space-x-4">
        <button
          onClick={startTimer}
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
