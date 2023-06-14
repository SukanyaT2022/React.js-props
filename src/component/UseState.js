import React, { useState } from 'react'


function UseState() {
    var[add, setAdd] = useState("old comment")
    
    function change(){
        setAdd("new comment")
    }
   
  return (
    <div>
<h1>{add}</h1>
  {console.log(add)}
  <button onClick={change}>Click</button>


    </div>
  )
}

export default UseState
