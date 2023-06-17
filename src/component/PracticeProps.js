import React from 'react'
import './PracticeProps.css'

function PracticeProps(props) {
    var saveDataHere = props.props4Practice
  return (
    <div className='wrapper'>
    {saveDataHere.map((element)=>(

    <div className='controlElement2'>
{/* 
        how can I target each row image size 200Px width and each row have 4 pics */}
<img src={element.image} className='targetIMG'/>
<h2 className='targetTitle'>{element.title}</h2>
    </div>


    ))}  
    </div>
  )
}

export default PracticeProps

// function Box(props) {
//     var saveData = props.propsName
//   return (
//     <div className='mainBox'>
//  {saveData.map((element) => (
//     <div className='controlElement'>
//        <img src={element.image} className='controlImage'/>
//      <h2 className='controlTitle'>{element.title}</h2>
//      </div>
// ))}
//      </div>
//   )
// }
