'use client'
import { useRef } from 'react'
import { useClickOutside } from '@/libs/hooks/useClickOutside'
import { useToggleMenu } from '@/libs//hooks/useToggleMenu'
import InternalNavLink from '@/components/buttons/navlink/InternalNavLink'
import ThemeToggle from './theme-toggle/ThemeToggle'
import styles from './NavMenu.module.scss'

export default function NavMenu({ isMenuOpen, handleMenuToggle }) {
  const { isOpen, toggleMenu: toggleMenuState } = useToggleMenu(isMenuOpen)
  const menuRef = useRef(null)

  if (isMenuOpen !== isOpen) {
    toggleMenuState(isMenuOpen)
  }

  useClickOutside(menuRef, () => {
    if (isMenuOpen) {
      handleMenuToggle(false)
    }
  })

  const handleLinkClick = () => {
    handleMenuToggle(false)
  }

  const navigationLinks = [
    { href: '/', label: 'Home', clasName: 'red-theme'},
    { href: '/zones', label: 'Zones' },
    { href: '/par-sheets', label: 'PAR Sheets' },
    
  ]

  return (
    <div
      ref={menuRef}
      className={`${styles.navMenu} ${isMenuOpen ? styles.opened : ''}`}
    >
      <nav>
        <ul>
         <li>
          <InternalNavLink href='/' className='red-theme' onClick={handleLinkClick}>Home</InternalNavLink>
         </li>
         <li>
          <InternalNavLink href='/par-sheets' className='green-theme' onClick={handleLinkClick}>Par Sheets</InternalNavLink>
         </li>
         <li>
          <InternalNavLink href='/zones' className='blue-theme' onClick={handleLinkClick}>Zones</InternalNavLink>
         </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  )
}
