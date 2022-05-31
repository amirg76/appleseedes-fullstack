import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCounter(prev=>prev+1)  
            console.log(new Date());         
        }, 1000)
        return ()=>{
            console.log("cleanup");         
            clearInterval(timer)
        }
    }, [])

    
return (
    <div>Counter {counter}</div>
  )
}
