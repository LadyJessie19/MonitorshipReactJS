import React, { useState } from 'react'

const ClockComp = () => {
    
    const [hour, setHour] = useState(undefined)
    const [minute, setMinute] = useState(undefined)
    const clock = new Date().getHours()
    const time = new Date().getMinutes()

    setInterval(() => {
        setHour(clock)
        setMinute(time)
    }, 1000)

  return (
    <>
        <h2>Relógio</h2>
        {hour}:{minute}
    </>
  )
}

export default ClockComp