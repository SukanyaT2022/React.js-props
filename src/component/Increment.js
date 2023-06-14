import React from 'react'
import { useState } from 'react'

function Increment() {
    const[increase, setIncrease] = useState(0)

const Add=()=>{
    setIncrease(increase +1)
}
const Reduce =()=>{
    setIncrease(increase -1 )
}
  return (
    
    <div>
        <h3>{increase}</h3>
    <button onClick={Add}>Click Increase</button>  
    <button onClick={Reduce}>Click Reduce</button>  

    </div>
  )
}

export default Increment

