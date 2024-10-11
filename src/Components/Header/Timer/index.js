import styles from './Timer.module.css';
import React, { useState, useEffect, useRef } from 'react';
import timerPause from '../../../audios/timer-pause.mp3';
import timerStart from '../../../audios/timer-start.mp3';

const Timer = () => {
  const [time, setTime] = useState(120); // 2 minutos = 120 segundos
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);
  const timerStartSound = new Audio(timerStart);


  const timerPauseSound = new Audio(timerPause);

  // Function start timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true); // Changes the state to indicate that the timer is running
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);// Every second, the time is decremented by 1
      }, 1000); // 1 second interval (1000 ms)
    } timerStartSound.play() //play audio

  };

  // Function pause timer
  const pauseTimer = () => {    
    setIsRunning(false); // Stop execution state
    clearInterval(timerRef.current); // Clears the range, sttopping the timer
    timerPauseSound.play().then(() => {
      console.log("TimerPaused played successfully")
    }).catch(error => {
      // catch the playback error and log it to the console, preventing it from being displayed on the screen 
      console.log("Error attempting to play the audio:" ,error.message)
    })

  };

  // Effect to start the timer automatically when loading the page
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerRef.current); // Clears the range when disassembling the component

  }, []);

  // Effect to stop the timer when it reaches 0
  useEffect(() => {    
    if (time === 0) {
      pauseTimer() 
      alert("Time's out!")
      
    }

  }, [time]);

  // Formatting time in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); // Calculates entire minutes
    const seconds = time % 60; // Calculates the remaining seconds
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  };

  return (
    <div className={styles.timer}>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={startTimer} disabled={isRunning || time === 0}>Play</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
      </div>
    </div>
  );
};

export default Timer;
