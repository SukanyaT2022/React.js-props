import React, { useState } from 'react'

function ChangeText() {

const[text, setText] = useState('old friend')
const ChangeText =()=>{
    setText('New friends')
}

  return (
    <div>
   <h2>{text}</h2>   
<button onClick={ChangeText}>Click</button>

    </div>
  )
}

export default ChangeText
