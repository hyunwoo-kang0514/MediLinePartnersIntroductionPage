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
// import samsungBioepisLogo from '/Samsung Bioepis.png'
// import daewoongLogo from '/Daewoong Pharmaceutical.png'
// import pharmAbcineLogo from '/PharmAbcine.png'
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
    { name: "NOV Metapharma", logo: novMetapharmaLogo, description: "대사질환 치료" },
    { name: "한미약품", englishName: "Hanmi Pharm", logo: hanmiLogo, description: "한국 제약 우수성" },
    { name: "Ipsen", logo: ipsenLogo, description: "전문 치료제 개발" },
    { name: "Baxter", logo: baxterLogo, description: "의료기기 솔루션" },
    { name: "CSL Behring", logo: cslBehringLogo, description: "바이오테크 솔루션" },
    { name: "Allerpha International", logo: allerphaLogo, description: "국제 헬스케어" },
    { name: "Abbott", logo: abbottLogo, description: "글로벌 헬스케어 솔루션" },
    { name: "Innovo Therapeutics", logo: innovoLogo, description: "혁신 치료제 개발" },
    { name: "CMG제약", englishName: "CMG Pharm", logo: cmgLogo, description: "혁신 의약품 개발" },
    { name: "한국파마", englishName: "Korea Pharma", logo: koreaPharmaLogo, description: "한국 제약 솔루션" },
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
      case 'eng':
        return {
          title: "Clients",
          subtitle: "Our Clients & Collaborators",
          description: "Global partners trust MediLine Partners",
          subDescription: "With expertise aligned to global standards, numerous success stories, and 20 years of accumulated know-how, we create a definitive difference."
        }
      case 'chn':
        return {
          title: "客户",
          subtitle: "Our Clients & Collaborators",
          description: "全球合作伙伴信赖MediLine Partners",
          subDescription: "符合全球标准的专业性、众多成功案例以及20年积累的经验，创造显著差异。"
        }
      default: // kor
        return {
          title: "고객사",
          subtitle: "Our Clients & Collaborators",
          description: "글로벌 파트너사가 메디라인파트너스를 신뢰합니다",
          subDescription: "글로벌 스탠더드에 맞춘 전문성, 수많은 성공 사례, 20년간 축적된 노하우로 확실한 차이를 만듭니다."
        }
    }
  }

  const translateDescription = (korDesc, lang) => {
    const map = {
      "백신 및 의약품 개발": { eng: "Vaccines and pharmaceuticals", chn: "疫苗与药品研发" },
      "암 치료제 전문": { eng: "Oncology specialist", chn: "肿瘤治疗专家" },
      "바이오제약 혁신": { eng: "Biopharma innovation", chn: "生物制药创新" },
      "당뇨병 치료제 선도": { eng: "Leader in diabetes therapeutics", chn: "糖尿病治疗领先" },
      "메신저 RNA 치료제": { eng: "mRNA therapeutics", chn: "mRNA治疗" },
      "혁신적인 의약품 개발": { eng: "Innovative pharmaceuticals development", chn: "创新药物开发" },
      "대사질환 치료": { eng: "Metabolic disease therapeutics", chn: "代谢性疾病治疗" },
      "한국 제약 우수성": { eng: "Excellence in Korean pharma", chn: "韩国制药优势" },
      "전문 치료제 개발": { eng: "Specialty therapeutics development", chn: "专业治疗药物开发" },
      "의료기기 솔루션": { eng: "Medical device solutions", chn: "医疗器械解决方案" },
      "바이오테크 솔루션": { eng: "Biotech solutions", chn: "生物科技解决方案" },
      "국제 헬스케어": { eng: "Global healthcare", chn: "国际医疗保健" },
      "글로벌 헬스케어 솔루션": { eng: "Global healthcare solutions", chn: "全球医疗保健解决方案" },
      "혁신 치료제 개발": { eng: "Innovative therapeutics", chn: "创新治疗药物" },
      "혁신 의약품 개발": { eng: "Innovative drug development", chn: "创新药品开发" },
      "한국 제약 솔루션": { eng: "Korean pharma solutions", chn: "韩国制药方案" },
      "의료기기 혁신": { eng: "Medical device innovation", chn: "医疗器械创新" },
      "엑소좀 줄기세포 기술": { eng: "Exosome stem-cell technology", chn: "外泌体干细胞技术" },
      "재료과학 혁신": { eng: "Materials science innovation", chn: "材料科学创新" },
      "헬스케어 IT 솔루션": { eng: "Healthcare IT solutions", chn: "医疗信息化解决方案" },
      "과학 세대": { eng: "Next-generation science", chn: "新一代科学" },
      "차세대 치료제": { eng: "Next-generation therapeutics", chn: "下一代治疗" },
      "과학적 혁신": { eng: "Scientific innovation", chn: "科学创新" }
    }
    if (lang === 'kor') return korDesc
    const key = map[korDesc]
    if (!key) return korDesc
    return lang === 'eng' ? key.eng : key.chn
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
          <h1 className="clients-subtitle">{content.subtitle}</h1>
          <p className="clients-description question">
            {language === 'eng' ? (
              <>
                <span className="highlight">Global partners</span> trust <span className="highlight">MediLine Partners</span>
              </>
            ) : language === 'chn' ? (
              <>
                <span className="highlight">全球合作伙伴</span>信赖<span className="highlight">MediLine Partners</span>
              </>
            ) : (
              <>
                <span className="highlight">글로벌 파트너사</span>가 <span className="highlight">메디라인파트너스</span>를 신뢰합니다
              </>
            )}
          </p>
          <p className="clients-description answer">
            {language === 'eng' ? (
              <>
                With expertise aligned to <span className="highlight">global standards</span>, <span className="highlight">numerous success stories</span>, and <span className="highlight">20 years of accumulated know-how</span>, we create a <span className="highlight">definitive difference</span>.
              </>
            ) : language === 'chn' ? (
              <>
                凭借符合<span className="highlight">全球标准</span>的专业性、<span className="highlight">众多成功案例</span>和<span className="highlight">20年积累的经验</span>，<br />
                我们创造<span className="highlight">显著差异</span>。
              </>
            ) : (
              <>
                <span className="highlight">글로벌 스탠더드</span>에 맞춘 전문성, <span className="highlight">수많은 성공 사례</span>, <span className="highlight">20년간 축적된 노하우</span>로<br />
                <span className="highlight">확실한 차이</span>를 만듭니다.
              </>
            )}
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
                  <h3 className="client-name">{language === 'kor' ? client.name : (client.englishName || client.name)}</h3>
                  <p className="client-description">{translateDescription(client.description, language)}</p>
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