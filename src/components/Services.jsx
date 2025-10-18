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
            { id: 'ra', label: 'RA Licensing' },
            { id: 'pv', label: 'PV Pharmacovigilance' },
            { id: 'icc', label: 'ICC Domestic Agent' }
          ],
          services: {
            ra: [
              {
                title: "1. RA Consulting",
                items: [
                  "Pharmaceutical/Medical Device Licensing Strategy Consulting",
                  "Pharmaceutical/Medical Device GAP Analysis",
                  "Pharmaceutical/Medical Device Feasibility and Market Research Consulting",
                  "MFDS Pre-consultation Support Consulting",
                  "Domestic Regulatory Intelligence Consulting for International Clients"
                ]
              },
              {
                title: "2. RA Writing",
                items: [
                  "Common Technical Document (CTD) Development",
                  "Summary Technical Documentation (STED) Development",
                  "Investigator's Brochure (IB) Development",
                  "Clinical and Licensing Submission Package Writing for Pharmaceuticals/Medical Devices"
                ]
              },
              {
                title: "3. RA Submission",
                items: [
                  "Drug Master File (DMF) Registration",
                  "Investigational New Drug (IND) Application for Pharmaceuticals/Medical Devices",
                  "Pre-IND, Pre-NDA Review for Pharmaceuticals/Medical Devices",
                  "New Drug Application (NDA) for Pharmaceuticals/Medical Devices",
                  "Product License Renewal",
                  "New Medical Technology Assessment (HIRA)",
                  "Development Stage/Rare Disease Drug Designation"
                ]
              },
              {
                title: "4. GMP Compliance Certification",
                items: [
                  "Pharmaceutical/Medical Device GMP (KGMP, ISO13485)",
                  "Domestic and International GMP Audit Support"
                ]
              }
            ],
            pv: [
              {
                title: "1. PV System Set-up",
                items: [
                  "PV System Establishment",
                  "PV SOP Development",
                  "PV Education",
                  "PV Consulting",
                  "PV Audit and Inspection Response"
                ]
              },
              {
                title: "2. PV Writing",
                items: [
                  "Development Safety Update Report (DSUR)",
                  "Risk Management Plan (RMP) and Implementation Result Report",
                  "Periodic Safety Update Report (PSUR)",
                  "Periodic Benefit-Risk Evaluation Report (PBRER)",
                  "Safety Report for Product Renewal"
                ]
              },
              {
                title: "3. Safety Information Processing and Management",
                items: [
                  "Individual Case Safety Report (ICSR) Processing (by source, by country)",
                  "Domestic Adverse Event Expedited/Periodic Reporting",
                  "Foreign Serious Adverse Drug Reactions",
                  "SUSAR Expedited Reporting",
                  "Safety DB Setup and Storage Management",
                  "SMP/PVA Review and Query Evaluation",
                  "Signal Information Management"
                ]
              },
              {
                title: "4. Safety Information Collection",
                items: [
                  "Periodic Literature Search",
                  "Regulatory Authority Websites"
                ]
              }
            ],
            icc: [
              {
                title: "1. License Maintenance", // (수정)
                items: [
                  "License/Certification/Notification Amendment",
                  "License Renewal",
                  "KGMP Periodic Audit"
                ]
              },
              {
                title: "2. Import and Customs Clearance", // (수정)
                items: [
                  "Customs Clearance Report",
                  "Inventory and Distribution Management",
                  "Domestic Quality Control",
                  "KMDIA Import Performance Reporting"
                ]
              },
              {
                title: "3. Safety Information Reporting", // (수정)
                items: [
                  "Adverse Event Reporting",
                  "Complaint Notification",
                  "Corrective and Preventive Action"
                ]
              },
              {
                title: "4. Post-Market Surveillance, PMS", // (수정)
                items: [
                  "Non-Conforming Product Management",
                  "Product Recall"
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
            { id: 'ra', label: 'RA许可' },
            { id: 'pv', label: 'PV药物警戒' },
            { id: 'icc', label: 'ICC国内代理' }
          ],
          services: {
            ra: [
              {
                title: "1. RA 咨询",
                items: [
                  "药品/医疗器械许可战略咨询",
                  "药品/医疗器械GAP分析",
                  "药品/医疗器械可行性与市场调研咨询",
                  "MFDS事前咨询支持",
                  "面向海外客户的韩国法规情报咨询"
                ]
              },
              {
                title: "2. RA 文档撰写",
                items: [
                  "CTD（共同技术文件）开发",
                  "STED（医疗器械汇总技术文档）开发",
                  "研究者手册（IB）编写",
                  "药品/医疗器械临床与许可提交资料撰写"
                ]
              },
              {
                title: "3. RA 申报",
                items: [
                  "DMF（药品主文件）登记",
                  "药品/医疗器械IND申请",
                  "预IND、预NDA事前审查",
                  "药品/医疗器械NDA/申报",
                  "品种续展",
                  "新医疗技术评价（HIRA）",
                  "开发阶段/罕见病用药指定"
                ]
              },
              {
                title: "4. GMP 合规认证",
                items: [
                  "药品/医疗器械GMP（KGMP, ISO13485）",
                  "国内外GMP现场审查支持"
                ]
              }
            ],
            pv: [
              {
                title: "1. PV 系统建立",
                items: [
                  "PV系统构建",
                  "PV SOP制定",
                  "PV培训",
                  "PV咨询",
                  "PV审计及检查应对"
                ]
              },
              {
                title: "2. PV 文档撰写",
                items: [
                  "开发安全性更新报告（DSUR）",
                  "风险管理计划（RMP）及执行结果报告",
                  "定期安全性更新报告（PSUR）",
                  "定期效益-风险评估报告（PBRER）",
                  "品种续展用安全性报告"
                ]
              },
              {
                title: "3. 安全性信息处理与管理",
                items: [
                  "个例安全性报告（ICSR）处理（按来源/发生国家）",
                  "国内不良事件速报/定期报告",
                  "海外严重不良反应",
                  "SUSAR速报",
                  "安全数据库建立与维护",
                  "SMP/PVA审查与质询处理",
                  "信号信息管理"
                ]
              },
              {
                title: "4. 安全性信息收集",
                items: [
                  "定期文献检索",
                  "监管机构网站监测"
                ]
              }
            ],
            icc: [
              {
                title: "1. 进口品种维护管理", // (수정)
                items: [
                  "许可/认证/申报变更",
                  "品种更新",
                  "KGMP定期审查应对"
                ]
              },
              {
                title: "2. 进口及通关", // (수정)
                items: [
                  "进口通关预报告申请/签发",
                  "出入库管理",
                  "国内质量管理",
                  "KMDIA进口实绩报告"
                ]
              },
              {
                title: "3. 安全性信息报告", // (수정)
                items: [
                  "异常事例、副作用报告",
                  "客户投诉报告",
                  "纠正措施(CAPA)"
                ]
              },
              {
                title: "4. 事后管理", // (수정)
                items: [
                  "不合格产品管理",
                  "产品召回"
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
                title: "1. 수입품목 유지 관리", // (수정)
                items: [
                  "허가/인증/신고변경",
                  "품목갱신",
                  "KGMP 정기 심사 대응"
                ]
              },
              {
                title: "2. 수입 및 통관", // (수정)
                items: [
                  "수입통관예정보고 신청/발급",
                  "입출고 관리",
                  "국내 품질관리",
                  "KMDIA 수입실적보고"
                ]
              },
              {
                title: "3. 안전성 정보 보고", // (수정)
                items: [
                  "이상사례, 부작용 보고",
                  "고객불만 보고",
                  "시정조치(CAPA)"
                ]
              },
              {
                title: "4. 사후관리", // (수정)
                items: [
                  "부적합 제품 관리",
                  "제품 회수"
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