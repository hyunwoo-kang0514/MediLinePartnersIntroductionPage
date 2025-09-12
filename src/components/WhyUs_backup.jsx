import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './WhyUs.css'

const WhyUs = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          title: "Why Choose MEDILINE PARTNERS?",
          subtitle: "Leading the Future of Pharmaceutical Regulatory Affairs",
          description: "We are the premier partner for pharmaceutical companies seeking excellence in drug surveillance and regulatory affairs. With cutting-edge technology and expert knowledge, we deliver solutions that drive success.",
          features: [
            {
              icon: "🎯",
              title: "Expert Excellence",
              description: "20+ years of combined experience in pharmaceutical regulatory affairs"
            },
            {
              icon: "⚡",
              title: "Innovation First",
              description: "Advanced AI-powered solutions for efficient drug surveillance"
            },
            {
              icon: "🌍",
              title: "Global Standards",
              description: "Compliance with international regulatory requirements"
            }
          ]
        }
      case 'chn':
        return {
          title: "为什么选择MEDILINE PARTNERS？",
          subtitle: "引领制药监管事务的未来",
          description: "我们是制药公司在药物监测和监管事务方面寻求卓越的首要合作伙伴。凭借尖端技术和专业知识，我们提供推动成功的解决方案。",
          features: [
            {
              icon: "🎯",
              title: "专业卓越",
              description: "20多年制药监管事务综合经验"
            },
            {
              icon: "⚡",
              title: "创新优先",
              description: "先进的AI驱动解决方案，实现高效药物监测"
            },
            {
              icon: "🌍",
              title: "全球标准",
              description: "符合国际监管要求"
            }
          ]
        }
      default: // kor
        return {
          title: "왜 MEDILINE PARTNERS인가?",
          subtitle: "의약품 규제 전문성의 새로운 기준",
          description: "우리는 의약품 감시 및 규제 전문 분야에서 최고의 파트너입니다. 최첨단 기술과 전문 지식을 바탕으로 성공을 이끄는 솔루션을 제공합니다.",
          features: [
            {
              icon: "🎯",
              title: "전문성의 정점",
              description: "20년 이상의 의약품 규제 전문 경험"
            },
            {
              icon: "⚡",
              title: "혁신 우선",
              description: "AI 기반 최첨단 약물감시 솔루션"
            },
            {
              icon: "🌍",
              title: "글로벌 표준",
              description: "국제 규제 요건 완벽 준수"
            }
          ]
        }
    }
  }

  const content = getContent()

  return (
    <section id="whyus" className="whyus">
      <motion.div 
        ref={ref}
        className="whyus-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="whyus-header" variants={itemVariants}>
          <h2 className="whyus-title">{content.title}</h2>
          <p className="whyus-subtitle">{content.subtitle}</p>
          <p className="whyus-description">{content.description}</p>
        </motion.div>

        <motion.div className="whyus-features" variants={itemVariants}>
          {content.features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 0, 0, 0.2)"
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="whyus-cta"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact" className="cta-button">
            {language === 'eng' ? 'Get Started' : language === 'chn' ? '立即开始' : '시작하기'}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyUs 