import React from 'react'
import './cards.css'

const CardTestemonial = ({ props }) => {
  return (
    <div className='cards__card-with-testemonials' role='article'>
      <h3 className='cards__card-content'>"{props.content}"</h3>
      <h4 className='cards__card-author'>{props.author}</h4>
    </div>
  )
}

export default CardTestemonial
