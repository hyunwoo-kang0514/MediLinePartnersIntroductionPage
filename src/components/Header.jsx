import React, { useState, useEffect } from 'react'
import './Header.css'
import LanguageToggle from './LanguageToggle'

const Header = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoTransitioning, setIsLogoTransitioning] = useState(false)

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
      const scrolled = window.scrollY > 10
      if (scrolled !== isScrolled) {
        setIsLogoTransitioning(true)
        setTimeout(() => {
          setIsScrolled(scrolled)
          setTimeout(() => {
            setIsLogoTransitioning(false)
          }, 150)
        }, 150)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isScrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getMenuItems = () => {
    switch(language) {
      case 'eng':
        return [
          { href: "#home", text: "Home" },
          { href: "#about", text: "About" },
          { href: "#achievements", text: "Achievements" },
          { href: "#services", text: "Services" },
          { href: "#clients", text: "Clients" },
          { href: "#contact", text: "Contact" }
        ]
      case 'chn':
        return [
          { href: "#home", text: "首页" },
          { href: "#about", text: "关于我们" },
          { href: "#achievements", text: "主要成就" },
          { href: "#services", text: "服务" },
          { href: "#clients", text: "客户" },
          { href: "#contact", text: "联系我们" }
        ]
      default: // kor
        return [
          { href: "#home", text: "홈" },
          { href: "#about", text: "회사소개" },
          { href: "#achievements", text: "주요 성과" },
          { href: "#services", text: "서비스" },
          { href: "#clients", text: "고객사" },
          { href: "#contact", text: "문의하기" }
        ]
    }
  }

  const menuItems = getMenuItems()
  const navItems = menuItems.filter(item => item.href !== "#contact")

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo">
          <img 
            src={isScrolled ? "/assets/logo_white.jpg" : "/assets/logo.jpg"} 
            alt="Mediline Partners logo"
            className={isLogoTransitioning ? 'logo-transitioning' : ''}
          />
        </a>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="header-right">
          <a href="#contact" className="contact-btn">
            {language === 'eng' ? 'Contact us' : language === 'chn' ? '联系我们' : '문의하기'}
          </a>
          <LanguageToggle 
            language={language} 
            onLanguageChange={onLanguageChange} 
          />
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 