import React, { useState } from 'react'
import './form.css'
import Modal from '../modal/modal'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [openErrorModal, setOpenErrorModal] = useState(false)

  const submit = event => {
    fetch(`/messages`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
      .then(() => setOpenSuccessModal(true))
      .catch(() => setOpenErrorModal(true))
  }

  return (
    <section className='form' role='complementary'>
      <form onSubmit={submit}>
        <div className='form__column'>
          <h2 className='form__title'>
            <span>QUESTION? </span>
            <span>WE ARE HERE </span>
            <span>TO HELP!</span>
          </h2>
        </div>
        <div className='form__column'>
          <div className='form__row'>
            <div className='form__input-field'>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                aria-labelledby='nameLabel'
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor='name' id='nameLabel'>
                name
              </label>
            </div>
            <div className='form__input-field'>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                aria-labelledby='emailLabel'
                onChange={e => setEmail(e.target.value)}
                aria-required='true'
                required
              />
              <label htmlFor='email' id='emailLabel'>
                email
              </label>
              <small className='form__required-message' role='alert'>
                This field is required
              </small>
            </div>
          </div>
          <div className='form__input-field'>
            <textarea
              id='message'
              name='message'
              value={message}
              aria-labelledby='messageLabel'
              onChange={e => setMessage(e.target.value)}
              rows='4'
              maxLength='200'
            />
            <label htmlFor='message' id='messageLabel'>
              message
            </label>
          </div>
          <div className='form__submit'>
            <input type='submit' id='submit' value='Send' />
          </div>
        </div>
      </form>
      {openSuccessModal && (
        <Modal
          textContent='Thank you for your message!'
          onClose={() => setOpenSuccessModal(false)}
        />
      )}
      {openErrorModal && (
        <Modal
          textContent='There was an error, please try again'
          onClose={() => setOpenErrorModal(false)}
        />
      )}
    </section>
  )
}

export default Form
