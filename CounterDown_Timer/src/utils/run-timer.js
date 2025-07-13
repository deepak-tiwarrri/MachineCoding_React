export const runTimer = (sec, min, hour, timerId,setSeconds,setMinutes,setHours) => {
    if (sec > 0) {
      setSeconds(sec => sec - 1);
    }
    else if (sec === 0 && min > 0) {
      setMinutes(min => min - 1);
      setSeconds(59);
    } else if (min === 0 && hour > 0) {
      setHours(hour => hour - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (sec === 0 && min === 0 && hour === 0) {
      handleReset();
    }
  }
  