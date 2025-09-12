import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Achievements from './components/Achievements'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import KakaoChat from './components/KakaoChat'

function App() {
  const [language, setLanguage] = useState('kor')

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="App">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />
        <AboutUs language={language} />
        <Achievements language={language} />
        <Services language={language} />
        <Clients language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <KakaoChat />
    </div>
  )
}

export default App
