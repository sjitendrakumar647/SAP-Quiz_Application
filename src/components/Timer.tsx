"use client"

import { useEffect } from "react"

interface TimerProps {
  timeRemaining: number
  setTimeRemaining: (time: number) => void
  storageKey: string
}

const Timer = ({ timeRemaining, setTimeRemaining, storageKey }: TimerProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = prev <= 0 ? 0 : prev - 1
        // Save time to session storage
        sessionStorage.setItem(storageKey, newTime.toString())

        if (newTime <= 0) {
          clearInterval(timer)
        }

        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [setTimeRemaining, storageKey])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getTimerColor = () => {
    const oneHour = 60 * 60
    if (timeRemaining < 30 * 60) return "timer-critical" // Less than 30 minutes
    if (timeRemaining < oneHour) return "timer-warning" // Less than 1 hour
    return "timer-normal"
  }

  return (
    <div className={`timer ${getTimerColor()}`} >
      <h3>Time Remaining</h3>
      <div className="time-display">{formatTime(timeRemaining)}</div>
    </div>
  )
}

export default Timer
