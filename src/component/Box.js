import React from 'react'
import './Box.css'

function Box(props) {
    var saveData = props.propsName
  return (
    <div className='mainBox'>
 {saveData.map((element) => (
    <div className='controlElement'>
       <img src={element.image} className='controlImage'/>
     <h2 className='controlTitle'>{element.title}</h2>
     </div>
))}
     </div>
  )
}

export default Box;

/*
import "./Card.css";
// Parent to Child

const Card = (props) => {
  const data = props.series;
  return (
    <div className="wrapper">
      {data.map((element) => (
        <div className="card_wrapper">
          <img src={element.image} alt="" className="card_img" />
          <h2 className="card_title">{element.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;




*/