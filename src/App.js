import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { Phase } from './model/Phase'

function App () {
  const [timer, setTimer] = useState(getPhase(0).seconds)
  const [isRunning, setRunning] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(phases[0])

  useInterval(() => {
    setTimer(timer - 1)
    if (timer <= 0) {
      const newPhase = getPhase(currentPhase.next)
      setTimer(newPhase.seconds)
      setCurrentPhase(newPhase)
    }
  }, isRunning ? 1000 : null)

  const setRunningFlag = () => {
    setRunning(!isRunning)
  }

  const resetCounting = () => {
    setTimer(currentPhase.seconds)
    setRunning(false)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
  }

  document.title = formatTime(timer) + ' - ' + currentPhase.name

  return (
    <div className={'App'}>
      <div className={'time-section'}>
        <div className={'phase-name'}>
          {currentPhase.name}
        </div>
        <div className={'time-value'}>
          {formatTime(timer)}
        </div>
      </div>
      <div>
        <button onClick={setRunningFlag}>{isRunning ? 'PAUSE' : 'START'}</button>
        <button onClick={resetCounting}>RESET</button>
      </div>
    </div>
  )
}

const phases = [
  new Phase(0, 'Pomodoro', 25 * 60, 1),
  new Phase(1, 'Short break', 5 * 60, 2),
  new Phase(2, 'Pomodoro', 25 * 60, 3),
  new Phase(3, 'Short break', 5 * 60, 4),
  new Phase(4, 'Pomodoro', 25 * 60, 5),
  new Phase(5, 'Short break', 5 * 60, 6),
  new Phase(6, 'Pomodoro', 25 * 60, 7),
  new Phase(7, 'Long break', 15 * 60, 0)
]

const getPhase = (index) => phases.filter(p => p.orderId === index)[0]

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick () {
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default App
