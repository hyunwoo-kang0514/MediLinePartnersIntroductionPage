import React from 'react'
import './Footer.css'
import companyLogoFinal from '../assets/company_logo_final_transparent.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img 
            src={companyLogoFinal} 
            alt="MediLine Partners Logo" 
            className="footer-logo-image"
          />
        </div>
        
        <div className="footer-contact">
          <p>주소 : 인천 연수구 컨벤시아대로 81 | 대표번호: +82-2-6966-4100 | 이메일 : geeyoon_kang@medihelpline.net</p>
        </div>
        
        <div className="footer-bottom">
          <p>COPYRIGHT © 2024 MEDiLiNE PARTNERS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 