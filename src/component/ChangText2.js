import React, { useState } from 'react'

function ChangText2() {
    const[change, setChange] = useState('old cat')

    const ChangeNewText =()=>{
        setChange('new cat')
    }
  return (
   <div>
    <h2>{change}</h2>
<button onClick={ChangeNewText}>Click here</button>


      
    </div>
  )
}

export default ChangText2
