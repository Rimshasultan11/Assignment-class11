"use client"
import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handledeccrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className='w-full h-auto mt-10'>
            <h1 className="text-7xl text-center">{count}</h1>
            <div className='items-center flex justify-center mt-10'>
            <button className="py-2 px-10 bg-[#4e4efa] text-white rounded-md" onClick={handleIncrement}>
                Increment
            </button>

            <button className="py-2 px-10 bg-[#ee6e6e] text-white rounded-md ml-5" onClick={handledeccrement}>
                Decrement
            </button>
            <button className="py-2 px-10 bg-red-700 text-white rounded-md ml-5" onClick={reset}>
                Resat
            </button>
            </div>
        </div>
  )
}

export default Counter
