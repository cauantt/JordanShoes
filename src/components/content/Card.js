import React from 'react'
import './Card.css'

function Card({disc, model, price,img}) {
  return (
    <div className='card'>
        <div className='bg'> <img id="imgcard"src={img} alt="Jordan 1" /></div>
        <div className='description'>
            <p id="disc">{disc}</p>
            <p id="model">{model}</p>
        </div>
        <p id='price'>{price}</p>
        
    </div>
  )
}

export default Card
