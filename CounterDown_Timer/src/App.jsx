import { useEffect, useState } from 'react'
import { runTimer } from './utils/run-timer';
import "./index.css";
import TimerInput from './TimerInput';
import Timer from './Timer';

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState();

  const canStart = Boolean(hours) && Boolean(minutes) && Boolean(seconds);

  function handleStart() {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid input");
      return;
    } else {
      setIsStart(true);
    }

  }
  function handlePause() {
    setIsPaused(true);
    clearInterval(timerId);
  }
  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsStart(false);
    clearInterval(timerId);
  }
  const handleReset = () => {
    resetTimer();
  }
  // console.log(hours, minutes, seconds);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const _number = Number(value);
    if (id === "hour") {
      setHours(_number);
    } else if (id === 'minute') {
      setMinutes(_number);
    } else {
      setSeconds(_number);
    }
  }
  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours, timerId, setSeconds, setMinutes, setHours);
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid, setSeconds, setMinutes, setHours);
      }, 1000)
    }
    setTimerId(tid);

    return () => {
      clearInterval(tid);
    }
  }, [isStart, hours, seconds, minutes])
  return (
    <>
      {
        isStart ? (
          <Timer hours={hours} minutes={minutes} seconds={seconds} handleReset={handleReset} isPaused={isPaused} handlePause={handlePause} handleResume={handleResume} />
        ) : (
          <TimerInput hours={hours} minutes={minutes} seconds={seconds} handleInputChange={handleInputChange} handleStart={handleStart} />
        )
      }

    </>
  )
}

export default App
