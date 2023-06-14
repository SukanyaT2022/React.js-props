import React from 'react'

function footer(props) {
  var storeData = props.propsFooter
  return (
    <div className='wrapper'>
  {
    storeData.map((element) => (
<div className='controlElement'> 
<h2 className='controlText'>{element.title}</h2>
<img src={element.image} className="controlIMG"/>

</div>
    ))}
    </div>
  )
}

export default footer
