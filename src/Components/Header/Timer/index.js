import styles from './Timer.module.css';
import timerStart from '../../../audios/timer-start.mp3'
import timerPause from '../../../audios/timer-pause.mp3'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useOutletContext } from 'react-router-dom'

const Timer = () => {
  
  const [time, setTime] = useState(120) // 2 minutos = 120 segundos
  const [isRunning, setIsRunning] = useState(true)
  const timerRef = useRef(null)
  const timerStartSound = new Audio(timerStart)

  const { mute } = useOutletContext()

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true) // Muda o estado para indicar que está ativado
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1) // Cada segundo, o tempo está caindo em 1

      }, 1000); // 1000 ms

    } mute === false && timerStartSound.play() //toca o audio

  }

  const pauseTimer = useCallback(() => {    
    setIsRunning(false) // Muda o estado para indicar que está desativado
    const timerPauseSound = new Audio(timerPause)

    clearInterval(timerRef.current) // Limpa o intervalo, parando o cronômetro

    mute === false && timerPauseSound.play().then(() => {
      console.log("TimerPaused played successfully")

    }).catch(error => {
      // captura o erro e mostra no console
      console.log("Error attempting to play the audio:" ,error.message)

    })

  }, [mute])

  // Inicia o tempo automaticamente quando carregar a página
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime - 1)

    }, 1000)

    return () => clearInterval(timerRef.current) // Limpa o intervalo ao desmontar o componente

  }, [])

  // Para o cronômetro quando chegar a 0
  useEffect(() => {    
    if (time === 0) {
      pauseTimer() 
      alert("Ops!!! Tempo acabou! Fique atento ao tempo de realização da prova.")      
    }

  }, [time, pauseTimer])

  // Formatando o cronômetro em minutos e segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); // Calcula minutos inteiros
    const seconds = time % 60; // Calcula os segundos restantes

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  }

  return (
    <div id='timerPagesId' className={styles.timer}>
      <h1>{formatTime(time)}</h1>

      <div>
        <button onClick={startTimer} disabled={isRunning || time === 0}>Play</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
      </div>

    </div>

  )

}

export default Timer
