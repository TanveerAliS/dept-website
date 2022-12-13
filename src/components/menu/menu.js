import React from 'react'
import './menu.css'
import useLockBodyScroll from '../../hooks/use-lock-body-scroll'
import Icon from '../../assets/images/caret-right-solid.svg'

const Menu = ({ headerData, onClose }) => {
  useLockBodyScroll() // Call hook to lock body scroll

  const closeMenuByKeyboard = event => {
    if (event.keyCode === 13 || event.keyCode === 32) onClose()
  }

  return (
    <div className='menu' aria-label='Press escape to close this window'>
      <div className='menu__container'>
        <a
          className='menu__logo'
          href='/'
          title='Dept Agency Logo'
          tabIndex={0}
          aria-label='Dept Agency Logo'
        >
          {headerData.logo}
        </a>
        <div
          className='menu__menu-icon'
          tabIndex={0}
          onClick={onClose}
          onKeyDown={e => closeMenuByKeyboard(e)}
          aria-label='Close menu'
        >
          <span className='screen-reader-only'>
            Clique here to close the menu
          </span>
          <div className='menu__close-button'>
            <div className='menu__close-icon-line1'></div>
            <div className='menu__close-icon-line2'></div>
          </div>
        </div>
      </div>
      <nav className='menu__content'>
        <ul className='menu__list' role='navigation'>
          {headerData.menuItems.map(item => (
            <li className='menu__items' key={item.id}>
              <a href={item.url}>
                <img
                  src={Icon}
                  alt='arrow icon'
                  className='menu__triangle-icon'
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='menu__landen'>
        <ul className='menu__landen-items'>
          <li>LANDON</li>
          {headerData.landenItems.map(item => (
            <li key={item.id}>
              <a href={item.url}>
                <img
                  src={Icon}
                  alt='arrow icon'
                  className='menu__triangle-icon'
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
