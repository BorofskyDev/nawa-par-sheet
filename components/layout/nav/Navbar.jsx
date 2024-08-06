'use client'
import { useState } from 'react'
import NavMenu from './navMenu/NavMenu'
import styles from './Navbar.module.scss'
import Hamburger from './hamburger/Hamburger'
import Logo from './logo/Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={styles.navbar} id='nav'>
      <Logo />
      <Hamburger isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <NavMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
    </div>
  )
}
