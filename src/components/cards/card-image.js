import React, { useState, useEffect } from 'react'
import './cards.css'
import Icon from '../../assets/images/read_more.svg'
import Modal from '../modal/modal'

const CardImage = ({ props, highlight }) => {
  const [openModal, setOpenModal] = useState(false)
  const [highlightClassName, setHighlightClassName] = useState(
    'cards__card-with-image'
  )

  useEffect(() => {
    const changeCardWidth = isHighlight => {
      if (isHighlight)
        setHighlightClassName('cards__card-with-image--highlighted')
    }
    changeCardWidth(highlight)
  })

  const keyboardActivated = event => {
    if (event.keyCode === 13 || event.keyCode === 32) setOpenModal(true)
  }

  return (
    <div className={highlightClassName}>
      <img className='cards__card-image' src={props.image} alt={props.alt} />
      <div className='cards__card-wrapper'>
        <p className='cards__card-name'>{props.name}</p>
        <h2 className='cards__card-title'>{props.title}</h2>
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
      </div>

      {openModal && (
        <Modal
          textContent='More view cases'
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  )
}

export default CardImage
