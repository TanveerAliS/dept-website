import React, { useState } from 'react'
import './cards.css'
import Icon from '../../assets/images/caret-right-solid.svg'
import Modal from '../modal/modal'

const CardText = ({ props }) => {
  const [openModal, setOpenModal] = useState(false)

  const keyboardActivated = event => {
    if (event.keyCode === 13 || event.keyCode === 32) setOpenModal(true)
  }

  return (
    <div className='cards__card-with-text'>
      <p className='cards__card-name'>{props.name}</p>
      <h3 className='cards__card-title'>{props.title}</h3>
      <button
        className='cards_button'
        aria-label='Open the view of this case'
        onClick={() => setOpenModal(true)}
        tabIndex={0}
        onKeyDown={e => keyboardActivated(e)}
      >
        <span className='screen-reader-only'>
          Clique here to open this view case
        </span>
        <img src={Icon} alt='arrow icon' className='cards_button-icon' />
        Read more
      </button>
      {openModal && (
        <Modal
          textContent='More view cases'
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  )
}

export default CardText
