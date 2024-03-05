import { useEffect, useRef } from 'react'
import { useState } from 'react'

const Clock = () => {
 
  const [days,setDay]=useState()
  const [hours,setHours]=useState()
  const [minutes,setMinutes]=useState()
  const [seconds,setSeconds]=useState()
  
  let interval=useRef()
  
  const StartTimer=()=>{
  const destination= new Date('Feb 30 , 2024 00:00:00').getTime()
    interval = setInterval(() => {
      const now= new Date().getTime()
      const difference=destination-now

    const days=Math.floor(difference/(1000*60*60*24))

    const hours=Math.floor(difference %(1000*60*60*24)/(1000*60*60))

    const minutes=Math.floor(difference %(1000*60*60)/(1000*60))

    const seconds=Math.floor(difference %(1000*60)/1000)
   
    if(destination<0){clearInterval(interval.current)}

    else{
      setDay(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
  }
    },1000);
 

    
  }
  useEffect(()=>{
    StartTimer()
    return clearInterval(interval.current)
  },[])
  return (
 <div className="clock_wrapper d-flex align-items-center gap-3">
  <div className="clock_data d-flex align-items-center gap-3">
    <div >
      <h1 className='text-white fs-1' >{days}</h1>
      <h5 className='text-white fs-5'>Days</h5>
    </div>
    <span className='text-white fs-4'>:</span>
  </div>
  <div className="clock_data d-flex align-items-center gap-3">
    <div >
      <h1 className='text-white fs-1' >{hours}</h1>
      <h5 className='text-white fs-5'>Hours</h5>
    </div>
    <span className='text-white fs-4'>:</span>
  </div>
  <div className="clock_data d-flex align-items-center gap-3">
    <div >
      <h1 className='text-white fs-1' >{minutes}</h1>
      <h5 className='text-white fs-5'>Minutes</h5>
    </div>
    <span className='text-white fs-4'>:</span>
  </div>
  <div className="clock_data d-flex align-items-center gap-3">
    <div >
      <h1 className='text-white fs-1' >{seconds}</h1>
      <h5 className='text-white fs-5'>Seconds</h5>
    </div>

  </div>
  
 </div>
  )
}

export default Clock