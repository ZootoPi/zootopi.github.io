import React, { useContext } from 'react'
import Content from './Content'
import Header from './Header'
import Navbar from './Navbar'
import { ThemeContext } from './ThemeContext'

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
    </div>
  )
}