'use client'
import { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (!timerActive) {
      return;
    }

    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, timerActive]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const startTimer = () => {
    if (isNaN(inputMinutes)) {
      alert('Please enter a number');
      return;
    }

    setMinutes(inputMinutes);
    setSeconds(0);
    setTimerActive(true);
  }

  return (
    <div className='bg-white'>
      <div>{displayMessage && <div>Break time! New session starts in:</div>}</div>
      <div>{timerMinutes}:{timerSeconds}</div>
      <p>Ingrese el tiempo en minutos para el cronometro</p>
      <input type="number" value={inputMinutes} onChange={(e) => setInputMinutes(e.target.value)} />
      <button className='bg-gray-300 rounded' onClick={startTimer}> Start Timer </button>
    </div>
  );
}

export default PomodoroTimer;


