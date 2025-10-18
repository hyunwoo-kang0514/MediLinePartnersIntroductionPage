import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import companyImage from '../../images/company_image.png'
import './Contact.css'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS 초기화 (수정)
  React.useEffect(() => {
    emailjs.init({
      publicKey: "-7eCkFzaE_wt7rC7c", // (수정) 실제 Public Key 적용
    });
  }, [])

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          badge: "Contact Us",
          title: "CONTACT US",
          subtitle: "Please feel free to contact us for project inquiries and consultations",
          contactInfo: "Contact Information",
          phone: "Phone",
          email: "Email",
          address: "Address",
          website: "Website",
          inquiryForm: "Inquiry Form",
          name: "Name *",
          emailLabel: "Email *",
          company: "Company Name",
          message: "Inquiry Details *",
          submit: "Submit Inquiry",
          successMessage: "Your inquiry has been successfully submitted. We will contact you shortly.",
          errorMessage: "An error occurred during inquiry submission. Please try again."
        }
      case 'chn':
        return {
          badge: "联系我们",
          title: "CONTACT US",
          subtitle: "如有项目咨询和咨询，请随时联系我们",
          contactInfo: "联系信息",
          phone: "电话",
          email: "电子邮件",
          address: "地址",
          website: "网站",
          inquiryForm: "咨询表单",
          name: "姓名 *",
          emailLabel: "电子邮件 *",
          company: "公司名称",
          message: "咨询详情 *",
          submit: "提交咨询",
          successMessage: "您的咨询已成功提交。我们将尽快与您联系。",
          errorMessage: "咨询提交过程中发生错误。请重试。"
        }
      default: // kor
        return {
          badge: "문의하기",
          title: "CONTACT US",
          subtitle: "프로젝트 문의 및 상담을 위해 언제든 연락주세요",
          contactInfo: "연락처 정보",
          phone: "전화",
          email: "이메일",
          address: "주소",
          website: "웹사이트",
          inquiryForm: "문의 폼",
          name: "이름 *",
          emailLabel: "이메일 *",
          company: "회사명",
          message: "문의내용 *",
          submit: "문의하기",
          successMessage: "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
          errorMessage: "문의 전송 중 오류가 발생했습니다. 다시 시도해 주세요."
        }
    }
  }

  const content = getContent()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS 템플릿 파라미터 설정 (수정)
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || '미입력',
        message: formData.message,
        time: new Date().toLocaleString('ko-KR')
      }

      // EmailJS로 이메일 발송 (수정)
      const serviceId = 'service_qimct0d' // (수정) 실제 서비스 ID 적용
      const templateId = 'template_n2ufb4b' // (수정) 실제 템플릿 ID 적용

      await emailjs.send(serviceId, templateId, templateParams)
      
      console.log('이메일 발송 성공!')
      alert(content.successMessage)
      setFormData({ name: '', email: '', company: '', message: '' })
      
    } catch (error) {
      console.error('이메일 발송 실패:', error)
      alert(content.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
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
          <div className="contact-badge">{content.badge}</div>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>{content.contactInfo}</h3>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>{content.phone}</h4>
                <p>+82-2-6966-4133</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>{content.email}</h4>
                <p>mlp@medilinepartners.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>{content.address}</h4>
                <p>{language === 'eng' ? '818, Seolleung-ro, Gangnam-gu, Seoul' : 
                    language === 'chn' ? '首尔特别市江南区宣陵路818' : 
                    '서울특별시 강남구 선릉로 818'}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h4>{content.website}</h4>
                <p>www.medilinepartners.net</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>{content.inquiryForm}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{content.name}</label>
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
                <label htmlFor="email">{content.emailLabel}</label>
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
                <label htmlFor="company">{content.company}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{content.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 
                  (language === 'eng' ? 'Sending...' : 
                   language === 'chn' ? '发送中...' : '전송 중...') 
                  : content.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 