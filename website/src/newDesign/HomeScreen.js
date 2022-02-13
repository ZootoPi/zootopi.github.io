import React from 'react'
import App from './App'
import { ThemeProvider } from './ThemeContext'

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}