import React, { useState } from 'react'
import './header.css'
import Menu from '../menu/menu'
import Modal from '../modal/modal'

const Header = ({ headerData }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [menuClassName, setMenuClassName] = useState('header__container')
  let [lastScrollPosition, setLastScrollPosition] = useState(0)

  const changeMenuBackground = scrollPosition => {
    scrollPosition < 300
      ? setMenuClassName('header__container')
      : setMenuClassName('header__container--scrolled')
  }
  window.addEventListener('scroll', () => {
    setLastScrollPosition(window.scrollY)
    changeMenuBackground(lastScrollPosition)
  })

  const openMenuByKeyboard = event => {
    if (event.keyCode === 13 || event.keyCode === 32) setOpenMenu(true)
  }

  const closeMenuByKeyboard = () => {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        setOpenMenu(false)
      }
    })
  }
  closeMenuByKeyboard()

  const wordsToBold=["pioneer tech","marketing"];

  const makeBold = (input, wordsToBold) => input.replace(new RegExp('(\\b)(' + wordsToBold.join('|') + ')(\\b)','ig'), '$1<b>$2</b>$3');

  return (
    <header className='header'>
      <div className={menuClassName}>
        <a
          className='header__logo'
          href='/'
          title='Dept Agency Logo'
          role='banner'
          tabIndex={0}
          aria-label='Dept Agency Logo'
        >
          {headerData.logo}<span className='header__logo-register'>&#174;</span>
        </a>
        <div
          className='header__menu-desktop'
        >
          {
            headerData.desktopMenuItems?.map( item => {
              return <a
              className='header__menuItem'
              href='/'
              title='Dept Agency Logo'
              role='banner'
              tabIndex={0}
              aria-label={item.name}
              key={item.id}
            >
              {item.name}
            </a>
            })
          }
          asdasd
        </div>
        <div
          className='header__menu'
          onClick={() => setOpenMenu(true)}
          tabIndex={0}
          onKeyDown={e => openMenuByKeyboard(e)}
          aria-label='Open menu'
        >
          <span className='screen-reader-only'>
            click here to open the menu
          </span>
          <p className='header__menu-text'>Menu</p>
          <div className='header__menu-icon'>
            <div className='header__menu-icon-line'></div>
            <div className='header__menu-icon-line'></div>
            <div className='header__menu-icon-line'></div>
          </div>
        </div>
      </div>
      <section className='header__highlight'>
        <img
          className='header__mobile-image'
          src={headerData.mobile}
          alt={headerData.alt}
        />
        <img
          className='header__desktop-image'
          src={headerData.desktop}
          alt={headerData.alt}
        />
        <h1 className='header__title'>{headerData.title}</h1>
        <p className="header__description" dangerouslySetInnerHTML={{__html: makeBold(headerData.alt, wordsToBold)}} />
      </section>

      {openMenu && (
        <Menu headerData={headerData} onClose={() => setOpenMenu(false)} />
      )}
      {openModal && (
        <Modal
          textContent='More view cases'
          onClose={() => setOpenModal(false)}
        />
      )}
    </header>
  )
}

export default Header
