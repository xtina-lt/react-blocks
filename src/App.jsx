import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'

function App() {

  // FUNCTIONS

  // WHAT USER SEES
  return (
    <>
      <Header/>
      <div class="container">
        <Navigation/>
        <MainContent/>
      </div>
    </>
  )
}

export default App
