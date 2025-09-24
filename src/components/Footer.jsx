import React from 'react'
import './Footer.css'
import companyLogoFinal from '../assets/company_logo_final_transparent.png'

const Footer = ({ language }) => {
  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          address: "Address : 818, Seolleung-ro, Gangnam-gu, Seoul | Tel: +82-2-6966-4133 | Email : MLP@medilinepartners.net",
          copyright: "COPYRIGHT © 2024 MEDiLiNE PARTNERS. ALL RIGHTS RESERVED."
        }
      case 'chn':
        return {
          address: "地址：首尔特别市江南区宣陵路818 | 电话：+82-2-6966-4133 | 电子邮件：MLP@medilinepartners.net",
          copyright: "版权所有 © 2024 美迪兰合作伙伴。保留所有权利。"
        }
      default: // kor
        return {
          address: "주소 : 서울특별시 강남구 선릉로 818 | 대표번호: +82-2-6966-4133 | 이메일 : MLP@medilinepartners.net",
          copyright: "COPYRIGHT © 2024 MEDiLiNE PARTNERS. ALL RIGHTS RESERVED."
        }
    }
  }

  const content = getContent()

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
          <p>{content.address}</p>
        </div>
        
        <div className="footer-bottom">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 