import React, { useState, useEffect } from 'react'
import './Header.css'
import LanguageToggle from './LanguageToggle'
import companyLogoFinal from '../assets/company_logo_final_transparent.png'

const Header = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const setHeaderHeightVar = () => {
      const headerEl = document.querySelector('.header')
      if (headerEl) {
        const h = headerEl.offsetHeight
        document.documentElement.style.setProperty('--header-h', `${h}px`)
      }
    }
    setHeaderHeightVar()
    window.addEventListener('resize', setHeaderHeightVar)
    return () => window.removeEventListener('resize', setHeaderHeightVar)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getMenuItems = () => {
    switch(language) {
      case 'eng':
        return [
          { href: "#home", text: "Home" },
          { href: "#about", text: "About" },
          { href: "#services", text: "Services" },
          { href: "#clients", text: "Clients" },
          { href: "#contact", text: "Contact" }
        ]
      case 'chn':
        return [
          { href: "#home", text: "首页" },
          { href: "#about", text: "关于我们" },
          { href: "#services", text: "服务" },
          { href: "#clients", text: "客户" },
          { href: "#contact", text: "联系我们" }
        ]
      default: // kor
        return [
          { href: "#home", text: "홈" },
          { href: "#about", text: "회사소개" },
          { href: "#services", text: "서비스" },
          { href: "#clients", text: "고객사" },
          { href: "#contact", text: "문의하기" }
        ]
    }
  }

  const menuItems = getMenuItems()

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img 
            src={companyLogoFinal} 
            alt="MediLine Partners Logo" 
            className="logo-image"
          />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item, index) => {
              const isContact = item.href === "#contact"
              return (
                <li key={index}>
                  <a href={item.href} className={isContact ? 'contact-cta' : ''}>{item.text}</a>
                </li>
              )
            })}
          </ul>
          <LanguageToggle 
            language={language} 
            onLanguageChange={onLanguageChange} 
          />
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header 