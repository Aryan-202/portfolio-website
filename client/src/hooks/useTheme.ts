import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}