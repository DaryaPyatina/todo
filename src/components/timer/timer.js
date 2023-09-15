import { useState, useEffect } from 'react'

const Timer = ({ timerStatus, timer }) => {
  const [time, setTimer] = useState({
    min: timer.min,
    sec: timer.sec,
  })

  const tickTimer = () => {
    if (timerStatus === 'play') {
      setTimer({
        ...time,
        min: +time.sec === 0 ? time.min - 1 : time.min,
        sec: time.sec > 0 ? time.sec - 1 : 59,
      })
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      tickTimer()
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  })

  return (
    <span className="timer">
      {time.min < 0 ? '0'.padStart(2, '0') : time.min.toString().padStart(2, '0')}:
      {time.min < 0 ? '0'.padStart(2, '0') : time.sec.toString().padStart(2, '0')}
    </span>
  )
}
export default Timer
