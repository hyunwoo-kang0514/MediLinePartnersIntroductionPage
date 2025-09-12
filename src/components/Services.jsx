import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Services.css'

const Services = ({ language }) => {
  const [activeTab, setActiveTab] = useState('ra')
  
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
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
          title: "Services",
          subtitle: "Professional services for pharmaceutical and medical device licensing and pharmacovigilance",
          tabs: [
            { id: 'ra', label: 'RA 인허가' },
            { id: 'pv', label: 'PV 약물감시' },
            { id: 'icc', label: 'ICC 국내대리인' }
          ],
          services: {
            ra: [
              {
                title: "1. In-Country Caretaker",
                items: [
                  "외국 제조사 국내 품목허가 대리인(License holder)"
                ]
              },
              {
                title: "2. 품목허가 및 보험등재",
                items: [
                  "의약품, 의료기기 수입품목 허가/인증. 신고/변경",
                  "KGMP 인증",
                  "의약품 보험/약가등재",
                  "의료기기 신의료기술평가(HIRA)"
                ]
              },
              {
                title: "3. 수입/통관",
                items: [
                  "주문접수/발주",
                  "통관예정보고/ 진행",
                  "입출고 검사/기록",
                  "국내 품질 관리",
                  "창고 임대 및 재고 관리"
                ]
              },
              {
                title: "4. 개별이상사례보고",
                items: [
                  "국내 이상사례 신속보고/정기보고",
                  "해외 중대한 약물이상반응 신속보고"
                ]
              }
            ],
            pv: [
              {
                title: "1. PV System Set-up",
                items: [
                  "PV 시스템 구축",
                  "PV SOP 개발",
                  "PV 교육",
                  "PV Consulting",
                  "PV Audit 및 Inspection 대응"
                ]
              },
              {
                title: "2. PV Writing",
                items: [
                  "최신 안전성정보 보고서(DSUR)",
                  "위해성관리계획(RMP) 및 이행결과보고서",
                  "최신 안전성 정보 보고서 (PSUR)",
                  "정기적인 유익성-위해성 평가 보고서(PBRER)",
                  "품목갱신을 위한 안전성 보고서"
                ]
              },
              {
                title: "3. 안전성 정보 처리, 관리",
                items: [
                  "개별안전성정보보고서(ICSR)처리 (출처별, 발생 국가별)",
                  "국내 이상사례 신속보고/정기보고",
                  "해외 중대한 약물이상반응",
                  "SUSAR 신속보고",
                  "Safety DB Set up, 보관 관리",
                  "SMP/PVA, 검토, 쿼리 평가",
                  "실마리 정보 관리"
                ]
              },
              {
                title: "4. 안전성 정보 수집",
                items: [
                  "주기적 문헌검색",
                  "규제기관 사이트"
                ]
              }
            ],
            icc: [
              {
                title: "1. RA Consulting",
                items: [
                  "의약품/의료기기 인허가 전략 컨설팅",
                  "의약품/의료기기 GAP 분석",
                  "의약품/의료기기 타당성, 시장 조사 컨설팅",
                  "식약처 사전 상담 지원 컨설팅",
                  "해외 고객을 위한 국내 Regulatory Intelligence 컨설팅"
                ]
              },
              {
                title: "2. RA Writing",
                items: [
                  "의약품국제공통기술문서(CTD) 개발",
                  "의료기기국제표준화기술문서(STED) 개발",
                  "임상시험자자료집(IB) 개발",
                  "의약품/의료기기 임상 및 허가 제출 패키지 작성"
                ]
              },
              {
                title: "3. RA Submission",
                items: [
                  "원료의약품 등록(DMF)",
                  "의약품/의료기기 임상시험계획승인(IND)",
                  "의약품/의료기기 사전검토(Pre-IND, Pre-NDA)",
                  "의약품/의료기기 품목허가/신고(NDA)",
                  "의약품/의료기기 품목갱신",
                  "신의료기술평가(HIRA)",
                  "개발단계/희귀의약품 지정"
                ]
              },
              {
                title: "4. GMP 적합인증",
                items: [
                  "의약품/의료기기 GMP(KGMP, ISO13485)",
                  "국내외 GMP 실사지원"
                ]
              }
            ]
          }
        }
      case 'chn':
        return {
          title: "服务",
          subtitle: "药品和医疗器械许可及药物警戒专业服务",
          tabs: [
            { id: 'ra', label: 'RA 인허가' },
            { id: 'pv', label: 'PV 약물감시' },
            { id: 'icc', label: 'ICC 국내대리인' }
          ],
          services: {
            ra: [
              {
                title: "1. In-Country Caretaker",
                items: [
                  "외국 제조사 국내 품목허가 대리인(License holder)"
                ]
              },
              {
                title: "2. 품목허가 및 보험등재",
                items: [
                  "의약품, 의료기기 수입품목 허가/인증. 신고/변경",
                  "KGMP 인증",
                  "의약품 보험/약가등재",
                  "의료기기 신의료기술평가(HIRA)"
                ]
              },
              {
                title: "3. 수입/통관",
                items: [
                  "주문접수/발주",
                  "통관예정보고/ 진행",
                  "입출고 검사/기록",
                  "국내 품질 관리",
                  "창고 임대 및 재고 관리"
                ]
              },
              {
                title: "4. 개별이상사례보고",
                items: [
                  "국내 이상사례 신속보고/정기보고",
                  "해외 중대한 약물이상반응 신속보고"
                ]
              }
            ],
            pv: [
              {
                title: "1. PV System Set-up",
                items: [
                  "PV 시스템 구축",
                  "PV SOP 개발",
                  "PV 교육",
                  "PV Consulting",
                  "PV Audit 및 Inspection 대응"
                ]
              },
              {
                title: "2. PV Writing",
                items: [
                  "최신 안전성정보 보고서(DSUR)",
                  "위해성관리계획(RMP) 및 이행결과보고서",
                  "최신 안전성 정보 보고서 (PSUR)",
                  "정기적인 유익성-위해성 평가 보고서(PBRER)",
                  "품목갱신을 위한 안전성 보고서"
                ]
              },
              {
                title: "3. 안전성 정보 처리, 관리",
                items: [
                  "개별안전성정보보고서(ICSR)처리 (출처별, 발생 국가별)",
                  "국내 이상사례 신속보고/정기보고",
                  "해외 중대한 약물이상반응",
                  "SUSAR 신속보고",
                  "Safety DB Set up, 보관 관리",
                  "SMP/PVA, 검토, 쿼리 평가",
                  "실마리 정보 관리"
                ]
              },
              {
                title: "4. 안전성 정보 수집",
                items: [
                  "주기적 문헌검색",
                  "규제기관 사이트"
                ]
              }
            ],
            icc: [
              {
                title: "1. RA Consulting",
                items: [
                  "의약품/의료기기 인허가 전략 컨설팅",
                  "의약품/의료기기 GAP 분석",
                  "의약품/의료기기 타당성, 시장 조사 컨설팅",
                  "식약처 사전 상담 지원 컨설팅",
                  "해외 고객을 위한 국내 Regulatory Intelligence 컨설팅"
                ]
              },
              {
                title: "2. RA Writing",
                items: [
                  "의약품국제공통기술문서(CTD) 개발",
                  "의료기기국제표준화기술문서(STED) 개발",
                  "임상시험자자료집(IB) 개발",
                  "의약품/의료기기 임상 및 허가 제출 패키지 작성"
                ]
              },
              {
                title: "3. RA Submission",
                items: [
                  "원료의약품 등록(DMF)",
                  "의약품/의료기기 임상시험계획승인(IND)",
                  "의약품/의료기기 사전검토(Pre-IND, Pre-NDA)",
                  "의약품/의료기기 품목허가/신고(NDA)",
                  "의약품/의료기기 품목갱신",
                  "신의료기술평가(HIRA)",
                  "개발단계/희귀의약품 지정"
                ]
              },
              {
                title: "4. GMP 적합인증",
                items: [
                  "의약품/의료기기 GMP(KGMP, ISO13485)",
                  "국내외 GMP 실사지원"
                ]
              }
            ]
          }
        }
      default: // kor
        return {
          title: "서비스",
          subtitle: "의약품 의료기기 인허가 약물감시 전문 서비스",
          tabs: [
            { id: 'ra', label: 'RA 인허가' },
            { id: 'pv', label: 'PV 약물감시' },
            { id: 'icc', label: 'ICC 국내대리인' }
          ],
          services: {
            ra: [
              {
                title: "1. In-Country Caretaker",
                items: [
                  "외국 제조사 국내 품목허가 대리인(License holder)"
                ]
              },
              {
                title: "2. 품목허가 및 보험등재",
                items: [
                  "의약품, 의료기기 수입품목 허가/인증. 신고/변경",
                  "KGMP 인증",
                  "의약품 보험/약가등재",
                  "의료기기 신의료기술평가(HIRA)"
                ]
              },
              {
                title: "3. 수입/통관",
                items: [
                  "주문접수/발주",
                  "통관예정보고/ 진행",
                  "입출고 검사/기록",
                  "국내 품질 관리",
                  "창고 임대 및 재고 관리"
                ]
              },
              {
                title: "4. 개별이상사례보고",
                items: [
                  "국내 이상사례 신속보고/정기보고",
                  "해외 중대한 약물이상반응 신속보고"
                ]
              }
            ],
            pv: [
              {
                title: "1. PV System Set-up",
                items: [
                  "PV 시스템 구축",
                  "PV SOP 개발",
                  "PV 교육",
                  "PV Consulting",
                  "PV Audit 및 Inspection 대응"
                ]
              },
              {
                title: "2. PV Writing",
                items: [
                  "최신 안전성정보 보고서(DSUR)",
                  "위해성관리계획(RMP) 및 이행결과보고서",
                  "최신 안전성 정보 보고서 (PSUR)",
                  "정기적인 유익성-위해성 평가 보고서(PBRER)",
                  "품목갱신을 위한 안전성 보고서"
                ]
              },
              {
                title: "3. 안전성 정보 처리, 관리",
                items: [
                  "개별안전성정보보고서(ICSR)처리 (출처별, 발생 국가별)",
                  "국내 이상사례 신속보고/정기보고",
                  "해외 중대한 약물이상반응",
                  "SUSAR 신속보고",
                  "Safety DB Set up, 보관 관리",
                  "SMP/PVA, 검토, 쿼리 평가",
                  "실마리 정보 관리"
                ]
              },
              {
                title: "4. 안전성 정보 수집",
                items: [
                  "주기적 문헌검색",
                  "규제기관 사이트"
                ]
              }
            ],
            icc: [
              {
                title: "1. RA Consulting",
                items: [
                  "의약품/의료기기 인허가 전략 컨설팅",
                  "의약품/의료기기 GAP 분석",
                  "의약품/의료기기 타당성, 시장 조사 컨설팅",
                  "식약처 사전 상담 지원 컨설팅",
                  "해외 고객을 위한 국내 Regulatory Intelligence 컨설팅"
                ]
              },
              {
                title: "2. RA Writing",
                items: [
                  "의약품국제공통기술문서(CTD) 개발",
                  "의료기기국제표준화기술문서(STED) 개발",
                  "임상시험자자료집(IB) 개발",
                  "의약품/의료기기 임상 및 허가 제출 패키지 작성"
                ]
              },
              {
                title: "3. RA Submission",
                items: [
                  "원료의약품 등록(DMF)",
                  "의약품/의료기기 임상시험계획승인(IND)",
                  "의약품/의료기기 사전검토(Pre-IND, Pre-NDA)",
                  "의약품/의료기기 품목허가/신고(NDA)",
                  "의약품/의료기기 품목갱신",
                  "신의료기술평가(HIRA)",
                  "개발단계/희귀의약품 지정"
                ]
              },
              {
                title: "4. GMP 적합인증",
                items: [
                  "의약품/의료기기 GMP(KGMP, ISO13485)",
                  "국내외 GMP 실사지원"
                ]
              }
            ]
          }
        }
    }
  }

  const content = getContent()

  return (
    <section id="services" className="services">
      <motion.div 
        ref={ref}
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <div className="service-badge">서비스</div>
          <h2>OUR SERVICES</h2>
          <p>{content.subtitle}</p>
        </motion.div>
        
        {/* 탭 네비게이션 */}
        <motion.div className="services-tabs" variants={itemVariants}>
          {content.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* 서비스 콘텐츠 */}
        <motion.div className="services-content" variants={itemVariants}>
          {content.services[activeTab].map((service, index) => (
            <motion.div 
              key={index} 
              className="service-section"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-items">
                {service.items.map((item, idx) => (
                  <li key={idx} className="service-item">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services 