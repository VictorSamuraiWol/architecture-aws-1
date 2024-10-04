import styles from './Timer.module.css';
import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(120); // 2 minutos = 120 segundos
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Função para iniciar o temporizador
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true); // Muda o estado para indicar que o temporizador está rodando
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);// A cada segundo, o tempo é decrementado em 1
      }, 1000); // Intervalo de 1 segundo (1000 ms)
    }
  };

  // Função para parar o temporizador
  const stopTimer = () => {
    setIsRunning(false); // Para o estado de execução
    clearInterval(timerRef.current); // Limpa o intervalo, parando o temporizador
  };

  // Efeito para parar o temporizador quando chega a 0
  useEffect(() => {
    if (time === 0) {
      stopTimer();
    }
  }, [time]);

  // Formatação do tempo em minutos e segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); // Calcula os minutos inteiros
    const seconds = time % 60; // Calcula os segundos restantes
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.timer}>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={startTimer} disabled={isRunning || time === 0}>Play</button>
        <button onClick={stopTimer} disabled={!isRunning}>Pause</button>
      </div>
    </div>
  );
};

export default Timer;
