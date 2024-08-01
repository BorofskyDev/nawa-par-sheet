'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderPlaceholder = () => {
    return (
      <div className={styles.placeholder}>
        <span>Loading...</span>
      </div>
    )
  }

  const toggleTheme = (e) => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    e.preventDefault()
    e.currentTarget.blur()
  }

  return mounted ? (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  ) : (
    renderPlaceholder()
  )
}
