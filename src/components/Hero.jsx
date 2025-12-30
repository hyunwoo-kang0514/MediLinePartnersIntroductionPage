import React from 'react'
import { motion } from 'framer-motion'
import firstImageIntroPage from '../../images/first_image_intropage.png'
import './Hero.css'

const Hero = ({ language }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          heroTitle: 'MediLine Partners is',
          heroSubtitle: 'pharmaceutical and medical device licensing',
          heroDescription: 'consulting agency.',
          label: 'About Us',
          description: "As a strategic partner helping customers succeed, we provide full-cycle One Stop integrated licensing services"
        }
      case 'chn':
        return {
          heroTitle: 'MediLine Partners是',
          heroSubtitle: '药品医疗器械许可及药物警戒',
          heroDescription: '咨询公司。',
          label: 'About Us',
          description: '作为帮助客户成功的战略合作伙伴，我们提供全周期一站式综合许可服务'
        }
      default: // korean subtitile
        return {
          heroTitle: '메디라인파트너스는',
          heroSubtitle: '의약품·의료기기 인허가 및 약물감시',
          heroDescription: '컨설팅 전문기업입니다.',
          label: 'About Us',
          description: '메디라인파트너스는 고객의 성공을 돕는 전략적 파트너로서 인허가 전주기 One Stop 통합 서비스를 지원합니다'
        }
    }
  }

  const content = getContent()

  return (
    <section className="hero" id="home">
      <div className="hero-split">
        {/* 왼쪽 섹션 - 다크 배경 */}
        <div className="hero-left">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            <h1 className="hero-title">
              {content.heroTitle}<br />
              <span className="highlight">{content.heroSubtitle}</span><br />
              {content.heroDescription}
            </h1>
            
            <div className="hero-divider"></div>
            
            <div className="hero-label">
              {content.label}
            </div>
            
            <motion.p 
              className="hero-lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {content.description}
            </motion.p>
          </motion.div>
          
          <div className="hero-scroll-indicator">
            <button 
              className="scroll-circle"
              onClick={scrollToAbout}
              aria-label="Scroll to About Us section"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 오른쪽 섹션 - 라이트 배경 */}
        <div className="hero-right">
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
          >
            <img 
              src={firstImageIntroPage} 
              alt="MediLine Partners"
              className="hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero