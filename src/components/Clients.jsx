import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Clients.css'

// 로고 파일들을 직접 import
import pfizerLogo from '/pfizer.png'
import celegeneLogo from '/celegene.png'
import abbvieLogo from '/abbvie.png'
import illyLogo from '/illy.png'
import modenaLogo from '/modena.png'
import astraZenekaLogo from '/AstraZeneka.png'
import samsungBioepisLogo from '/Samsung Bioepis.png'
import daewoongLogo from '/Daewoong Pharmaceutical.png'
import pharmAbcineLogo from '/PharmAbcine.png'
import novMetapharmaLogo from '/NOV Metapharma.png'
import hanmiLogo from '/Hanmi Pharm.png'
import ipsenLogo from '/Ipsen.png'
import baxterLogo from '/Baxter.png'
import cslBehringLogo from '/CSL Behring.png'
import allerphaLogo from '/Allerpha International.png'
import abbottLogo from '/Abbott.png'
import innovoLogo from '/Innovo Therapeutics.png'
import cmgLogo from '/CMG제약 (CMG Pharm).png'
import koreaPharmaLogo from '/한국파마 (Korea Pharma).png'
import penumbraLogo from '/Penumbra.png'
import microPortLogo from '/MicroPort.png'
import exoStemTechLogo from '/ExoStemTech.png'
import dowLogo from '/Dow.png'
import infinittLogo from '/Infinitt Healthcare.png'
import sciGenLogo from '/SciGen.png'
import nexelLogo from '/NEXEL.png'
import astonSciLogo from '/Aston Sci..png'
import biosolutionLogo from '/Biosolution.png'

const Clients = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  // 정확한 회사 리스트 (28개) - import된 로고 변수 사용
  const clients = [
    { name: "Pfizer", logo: pfizerLogo, description: "백신 및 의약품 개발" },
    { name: "Celgene", logo: celegeneLogo, description: "암 치료제 전문" },
    { name: "AbbVie", logo: abbvieLogo, description: "바이오제약 혁신" },
    { name: "Eli Lilly", logo: illyLogo, description: "당뇨병 치료제 선도" },
    { name: "Moderna", logo: modenaLogo, description: "메신저 RNA 치료제" },
    { name: "AstraZeneca", logo: astraZenekaLogo, description: "혁신적인 의약품 개발" },
    { name: "Samsung Bioepis", logo: samsungBioepisLogo, description: "바이오시밀러 전문" },
    { name: "대웅제약", logo: daewoongLogo, description: "한국 제약 혁신" },
    { name: "PharmAbcine", logo: pharmAbcineLogo, description: "항체 치료제 전문" },
    { name: "NOV Metapharma", logo: novMetapharmaLogo, description: "대사질환 치료" },
    { name: "한미약품", logo: hanmiLogo, description: "한국 제약 우수성" },
    { name: "Ipsen", logo: ipsenLogo, description: "전문 치료제 개발" },
    { name: "Baxter", logo: baxterLogo, description: "의료기기 솔루션" },
    { name: "CSL Behring", logo: cslBehringLogo, description: "바이오테크 솔루션" },
    { name: "Allerpha International", logo: allerphaLogo, description: "국제 헬스케어" },
    { name: "Abbott", logo: abbottLogo, description: "글로벌 헬스케어 솔루션" },
    { name: "Innovo Therapeutics", logo: innovoLogo, description: "혁신 치료제 개발" },
    { name: "CMG제약", logo: cmgLogo, description: "혁신 의약품 개발" },
    { name: "한국파마", logo: koreaPharmaLogo, description: "한국 제약 솔루션" },
    { name: "Penumbra", logo: penumbraLogo, description: "의료기기 솔루션" },
    { name: "MicroPort", logo: microPortLogo, description: "의료기기 혁신" },
    { name: "ExoStemTech", logo: exoStemTechLogo, description: "엑소좀 줄기세포 기술" },
    { name: "Dow", logo: dowLogo, description: "재료과학 혁신" },
    { name: "Infinitt Healthcare", logo: infinittLogo, description: "헬스케어 IT 솔루션" },
    { name: "SciGen", logo: sciGenLogo, description: "과학 세대" },
    { name: "NEXEL", logo: nexelLogo, description: "차세대 치료제" },
    { name: "Aston Sci.", logo: astonSciLogo, description: "과학적 혁신" },
    { name: "Biosolution", logo: biosolutionLogo, description: "바이오테크 솔루션" }
  ]

  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          title: "Why Choose Us",
          subtitle: "Global pharmaceutical and biotech companies trust MediLine Partners",
          description: "Clinical success partner, why MediLine Partners?",
          subDescription: "Expertise aligned with global standards, numerous success cases, and 20 years of accumulated know-how create a definitive difference."
        }
      case 'ja':
        return {
          title: "選ばれる理由",
          subtitle: "世界の製薬・バイオ企業がメディライン・パートナーズを信頼",
          description: "臨床成功のパートナー、なぜメディライン・パートナーズ？",
          subDescription: "グローバルスタンダードに適合した専門性、数多くの成功事例、20年間蓄積されたノウハウが確実な違いを生み出します。"
        }
      default: // kor
        return {
          title: "이유 있는 선택",
          subtitle: "세계적인 제약사와 바이오 기업들이 메디라인파트너스를 신뢰합니다",
          description: "임상 성공의 파트너, 왜 메디라인파트너스일까요?",
          subDescription: "글로벌 스탠더드에 맞춘 전문성, 수많은 성공 사례, 20년간 축적된 노하우로 확실한 차이를 만듭니다."
        }
    }
  }

  const content = getContent()

  return (
    <section id="clients" className="clients">
      <motion.div 
        ref={ref}
        className="clients-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="clients-header" variants={itemVariants}>
          <h2 className="clients-title">{content.title}</h2>
                    <h1 className="clients-subtitle">
            세계적인 <span className="highlight">제약사</span>와 <span className="highlight">바이오 기업</span>들이<br />
            <span className="highlight">메디라인파트너스</span>를 신뢰합니다
          </h1>
          <p className="clients-description question">
            <span className="highlight">임상 성공</span>의 파트너, 왜 <span className="highlight">메디라인파트너스</span>일까요?
          </p>
          <p className="clients-description answer">
            <span className="highlight">글로벌 스탠더드</span>에 맞춘 전문성, <span className="highlight">수많은 성공 사례</span>, <span className="highlight">20년간 축적된 노하우</span>로<br />
            <span className="highlight">확실한 차이</span>를 만듭니다.
          </p>
        </motion.div>

        {/* 마키 효과로 무한 스크롤되는 브랜드 카드들 */}
        <motion.div className="clients-marquee" variants={itemVariants}>
          <div className="marquee-container">
            <div className="marquee-track">
              {/* 원본 카드들을 3번 반복해서 자연스러운 무한 스크롤 효과 생성 */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`marquee-${index}`}
                  className="marquee-card"
                >
                  <div className="client-logo-container">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="client-logo-img"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="logo-placeholder" style={{ display: 'none' }}>
                      🏢
                    </div>
                  </div>
                  <h3 className="client-name">{client.name}</h3>
                  <p className="client-description">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Clients 