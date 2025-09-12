import React, { useState } from 'react'
import companyImage from '../../images/company_image.png'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData)
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-background" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${companyImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
      
      <div className="contact-container">
        <div className="section-header">
          <div className="contact-badge">문의하기</div>
          <h2>CONTACT US</h2>
          <p>프로젝트 문의 및 상담을 위해 언제든 연락주세요</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처 정보</h3>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>전화</h4>
                <p>+82-2-6966-4100</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>이메일</h4>
                <p>geeyoon_kang@medihelpline.net</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>주소</h4>
                <p>인천 연수구 컨벤시아대로 81<br />
                5층 509-J385 (송도동 드림시티)</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h4>웹사이트</h4>
                <p>www.medihelpline.co.kr</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>문의 폼</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">이름 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">회사명</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">문의내용 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 