import React from 'react'

const TimerInput = ({ hours, minutes, seconds, handleInputChange,handleStart }) => {
   return (
      <div className='flex flex-col justify-center'>
         <h2 className='font-semibold text-2xl text-gray-800 mx-auto mt-2'>CountDown Timer</h2>
         <div className='flex justify-center items-center '>
            <div className='mt-4'>
               <input value={(hours)} type="text" id='hour' className='input' placeholder='HH' onChange={(e) => handleInputChange(e)} />
               <input value={(minutes)} type="text" id='minute' className='input' placeholder='MM' onChange={(e) => handleInputChange(e)} />
               <input value={(seconds)} type="text" id='second' className='input' placeholder='SS' onChange={(e) => handleInputChange(e)} />
            </div>
            <button className='mt-4' onClick={() => handleStart()} >Start</button>
         </div>
      </div>)
}

export default TimerInput;