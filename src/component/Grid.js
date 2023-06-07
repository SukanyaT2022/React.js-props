import React from 'react';
import './Grid.css';

function Grid(props) {
    var storeData = props.propsGrid
  return (
    <div className='wrapper'>
            {storeData.map((element) => (
                  <div className='wrapElement'>
            <img src={element.image} className='targetImage'/>      
    <h3 className='controlText'>{element.title}</h3>
    </div>
           )) } 
    </div>
  )
}

export default Grid