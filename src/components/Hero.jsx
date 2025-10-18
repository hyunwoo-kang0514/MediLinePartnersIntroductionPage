import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import companyPicture from '../assets/company_picture.png'
import firstImageIntroPage from '../../images/first_image_intropage.png'
import secondImageIntroPage from '../../images/second_image_intropage.png'
import thirdImageIntroPage from '../../images/third_image_intropage.png'
import './Hero.css'

const Hero = ({ language }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)
  
  // Single Source of Truth - State Machine
  const stateRef = useRef('idle') // idle | running | paused | changing
  const startTimeRef = useRef(0)
  const accumulatedPauseRef = useRef(0)
  const pausedAtRef = useRef(0)
  const rafIdRef = useRef(null)
  const currentIndexRef = useRef(0)
  
  // Constants
  const DURATION = 7000 // 7초
  const TEXT_ANIMATION_DELAY = 1600 // 1.6초

  const getTabs = () => {
    switch(language) {
      case 'eng':
        return [
          { 
            id: 0, 
            number: '01', 
            title: 'ABOUT\nUS', 
            content: 'Mediline Partners is a specialized company in pharmaceutical and medical device licensing and pharmacovigilance.',
            heroTitle: 'Mediline Partners is',
            heroSubtitle: 'pharmaceutical and medical device licensing specialist',
            heroDescription: 'company.'
          },
          { 
            id: 1, 
            number: '02', 
            title: 'RA\nSERVICES', 
            content: 'Systematic licensing consulting for successful approval',
            heroTitle: 'Systematic',
            heroSubtitle: 'licensing consulting',
            heroDescription: 'Professional services for successful approval'
          },
          { 
            id: 2, 
            number: '03', 
            title: 'PV\nSERVICES', 
            content: 'Professional pharmacovigilance services for safety assurance',
            heroTitle: 'Professional',
            heroSubtitle: 'pharmacovigilance services',
            heroDescription: 'Systematic management for safety assurance'
          }
        ]
      case 'chn':
        return [
          { 
            id: 0, 
            number: '01', 
            title: '关于\n我们', 
            content: 'Mediline Partners是一家专业的药品和医疗器械许可及药物警戒公司。',
            heroTitle: 'Mediline Partners是',
            heroSubtitle: '药品医疗器械许可及药物警戒专业',
            heroDescription: '公司。'
          },
          { 
            id: 1, 
            number: '02', 
            title: 'RA\n服务', 
            content: '系统性许可咨询，实现成功批准',
            heroTitle: '系统性',
            heroSubtitle: '许可咨询',
            heroDescription: '成功批准的专业服务'
          },
          { 
            id: 2, 
            number: '03', 
            title: 'PV\n服务', 
            content: '专业药物警戒服务，确保安全性',
            heroTitle: '专业',
            heroSubtitle: '药物警戒服务',
            heroDescription: '确保安全性的系统性管理'
          }
        ]
      default: // kor
        return [
          { 
            id: 0, 
            number: '01', 
            title: 'ABOUT\nUS', 
            content: '메디라인파트너스는 의약품 의료기기 인허가 및 약물감시 전문 기업입니다.',
            heroTitle: '메디라인파트너스는',
            heroSubtitle: '의약품·의료기기 인허가 및 약물감시', // (수정)
            heroDescription: '컨설팅 전문기업입니다.'
          },
          { 
            id: 1, 
            number: '02', 
            title: 'RA\n서비스', 
            content: '체계적인 인허가 컨설팅으로 성공적인 승인',
            heroTitle: '체계적인',
            heroSubtitle: '인허가 컨설팅',
            heroDescription: '성공적인 승인을 위한 전문 서비스'
          },
          { 
            id: 2, 
            number: '03', 
            title: 'PV\n서비스', 
            content: '전문적인 약물감시 서비스로 안전성 확보',
            heroTitle: '전문적인',
            heroSubtitle: '약물감시 서비스',
            heroDescription: '안전성 확보를 위한 체계적인 관리'
          }
        ]
    }
  }

  const tabs = getTabs()

  // Single Source of Truth - State Machine Functions
  const startSlide = (index) => {
    console.log(`slideStart(${index})`)
    currentIndexRef.current = index
    setActiveTab(index)
    
    // 새 슬라이드 시작 시에만 게이지 리셋
    resetGauge()
    
    startTimeRef.current = performance.now()
    accumulatedPauseRef.current = 0
    stateRef.current = 'running'
    tick()
  }

  const tick = () => {
    if (stateRef.current !== 'running') return
    
    const now = performance.now()
    const progress = Math.min(1, (now - startTimeRef.current - accumulatedPauseRef.current) / DURATION)
    
    setProgress(progress * 100) // 0-100%로 변환
    console.log(`progressUpdate(${currentIndexRef.current}, ${progress.toFixed(3)})`)
    
    if (progress >= 1) {
      stateRef.current = 'changing'
      nextSlide()
      return
    }
    
    rafIdRef.current = requestAnimationFrame(tick)
  }

  const pause = () => {
    if (stateRef.current !== 'running') return
    stateRef.current = 'paused'
    pausedAtRef.current = performance.now()
    cancelAnimationFrame(rafIdRef.current)
  }

  const resume = () => {
    if (stateRef.current !== 'paused') return
    accumulatedPauseRef.current += performance.now() - pausedAtRef.current
    stateRef.current = 'running'
    tick()
  }

  const nextSlide = () => {
    const currentIndex = currentIndexRef.current
    const nextIndex = (currentIndex + 1) % tabs.length
    console.log(`slideChange(${currentIndex} → ${nextIndex})`)
    
    // 이전 슬라이드에서는 게이지 리셋하지 않음 (100% 유지)
    // DOM 전환 애니메이션 완료 후 새 슬라이드 시작
    setTimeout(() => {
      startSlide(nextIndex)
    }, 100)
  }

  const resetGauge = () => {
    setProgress(0)
  }

  const onUserNav = (targetIndex) => {
    if (stateRef.current === 'paused') resume()
    stateRef.current = 'changing'
    cancelAnimationFrame(rafIdRef.current)
    resetGauge()
    startSlide(targetIndex)
  }

  // 초기화 및 이벤트 리스너
  useEffect(() => {
    // 첫 화면 로드 시 슬라이드 시작
    setTimeout(() => {
      startSlide(0)
    }, TEXT_ANIMATION_DELAY)

    // 탭 비가시성 처리
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pause()
      } else {
        resume()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(rafIdRef.current)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // 탭 클릭 시 수동 변경
  const handleTabClick = (id) => {
    onUserNav(id)
  }

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          title: "Clinical CRO Consulting's",
          subtitle: "Expert Partner",
          description: "From drug development to licensing, experience successful clinical trials with Mediline Partners",
          button1: "About Us",
          button2: "Contact Us"
        }
      case 'chn':
        return {
          title: "临床CRO咨询的",
          subtitle: "专业合作伙伴",
          description: "从药物开发到许可，与Mediline Partners一起体验成功的临床试验",
          button1: "关于我们",
          button2: "联系我们"
        }
      default: // kor
        return {
          title: "임상 CRO 컨설팅의",
          subtitle: "전문 파트너",
          description: "의약품 개발부터 인허가까지, 메디라인파트너스와 함께 성공적인 임상시험을 경험하세요",
          button1: "회사소개",
          button2: "문의하기"
        }
    }
  }

  const content = getContent()
  const currentTab = tabs[activeTab]

  // 각 탭별로 다른 이미지 사용
  const getBackgroundImage = (tabIndex) => {
    switch(tabIndex) {
      case 0: return firstImageIntroPage;  // About Us
      case 1: return secondImageIntroPage; // PV 서비스
      case 2: return thirdImageIntroPage;  // RA 서비스
      default: return companyPicture;
    }
  }
  
  const backgroundImage = getBackgroundImage(activeTab)

  // 애니메이션 variants
  const backgroundVariants = {
    initial: { scale: 1.05, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    },
    exit: { 
      scale: 1.05, 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeIn"
      }
    }
  }

  const titleVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.0,
        delay: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -40,
      transition: { 
        duration: 0.6,
        ease: "easeIn"
      }
    }
  }

  const descriptionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      }
    }
  }

  return (
    <section className="hero" id="home">
      {/* 배경 이미지들을 겹쳐서 배치 */}
      <div className="hero-backgrounds">
        {tabs.map((tab, index) => {
          const image = getBackgroundImage(index)
          return (
            <motion.div
              key={index}
              className={`hero-background ${index === activeTab ? 'active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: index === activeTab ? 1 : 0,
                scale: 1,
                transition: { 
                  duration: 1.2,
                  ease: "easeOut"
                }
              }}
              exit={{ 
                opacity: 0,
                scale: 1.05,
                transition: { 
                  duration: 0.8,
                  ease: "easeIn"
                }
              }}
            />
          )
        })}
      </div>
      
      <div className="hero-container">
        <AnimatePresence mode="wait">
          <motion.div 
            className="hero-content"
            key={activeTab}
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              {currentTab.heroTitle}<br />
              <span className="highlight" style={{ whiteSpace: 'pre-line' }}>{currentTab.heroSubtitle}</span><br />
              {currentTab.heroDescription}
            </motion.h1>
            
            <motion.p 
              className="hero-lead"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {language === 'eng' 
                ? "Strategic partner providing full-cycle One Stop integrated licensing services"
                : language === 'chn'
                ? "作为帮助客户成功的战略合作伙伴，我们提供全周期一站式综合许可服务"
                : "고객의 성공을 돕는 전략적 파트너로서 인허가 전주기 One Stop 통합 서비스를 지원합니다"
              }
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="hero-tabs">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="tab-number">{tab.number}</span>
                <span className="tab-title" style={{ whiteSpace: 'pre-line' }}>{tab.title}</span>
                {activeTab === tab.id && (
                  <div className="tab-underline">
                    <div 
                      className="tab-progress-fill"
                      style={{ 
                        width: `${progress}%`,
                        opacity: progress > 0 ? 1 : 0,
                        transition: 'opacity 0.2s ease'
                      }}
                    ></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero