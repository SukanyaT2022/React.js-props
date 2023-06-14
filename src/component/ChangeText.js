import React, { useState } from 'react'
function ChangeText() {

const[text, setText] = useState('old friend')
const ChangeText =()=>{
    setText(text=="old friend"? "new friend": "old friend")  // one way this line change new friend and go back to old friend
}
// second way way this line change new friend and go back to old friend
//one way use if else
// const ChangeText =()=>{
//   setText('New friend')
//     if(text === "old friend"){
//       setText ("New friend")
//     }else{
//       setText ("old friend")
//     }
// }

//if not use if else we use 
// (x>10)?console.log():console.log()





  return (
    <div>
   <h2>{text}</h2>   
<button onClick={ChangeText}>Click</button>

    </div>
  )
}

export default ChangeText
