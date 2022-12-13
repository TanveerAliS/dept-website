import React from 'react'
import './modal.css'

const Modal = ({ onClose, textContent }) => {
  return (
    <div className='modal'>
      <div className='modal__content'>
        <h3 className='modal__title'>{textContent}</h3>
        <span className='screen-reader-only'>
          Clique here to close the modal
        </span>
        <button
          className='modal__close-button'
          onClick={onClose}
          tabIndex={0}
          aria-label='Close modal'
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default Modal
