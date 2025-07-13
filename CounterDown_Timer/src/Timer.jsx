import React from 'react'

const Timer = ({ hours, minutes, seconds, isPaused, handleReset, handlePause, handleResume }) => {
   return (
      <>
         <div className='flex justify-center items-center mt-4'>
            <div className=''><span className='font-semibold text-3xl text-gray-600'>{hours < 10 ? `0${hours}` : hours}:</span></div>
            <div><span className='font-semibold text-3xl text-gray-600'>{minutes < 10 ? `0${minutes}` : minutes}:</span></div>
            <div><span className='font-semibold text-3xl text-gray-600'>{seconds < 10 ? `0${seconds}` : seconds}</span></div>
         </div>
         <div className='flex justify-center items-center mt-2'>
            {!isPaused ? (<button className='mt-2 mx-2' onClick={() => handlePause()}>Pause</button>) : (<button className='mt-2 mx-2' onClick={() => handleResume()}>Resume</button>)}
            <button className='mt-2 mx-2' onClick={() => handleReset()}>Reset</button>
         </div>

      </>
   )
}

export default Timer;