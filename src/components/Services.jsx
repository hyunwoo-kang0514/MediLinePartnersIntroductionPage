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
                title: "1. Consulting",
                items: [
                  "Step-by-step licensing strategy (Pharmaceuticals, medical devices, combination products, health functional foods, quasi-drugs)",
                  "Establishment of step-by-step clinical strategy",
                  "GAP analysis and feasibility review",
                  "Preparation for MFDS pre-consultation (meeting, civil petition inquiry)",
                  "Domestic Regulatory Intelligence service for overseas customers"
                ]
              },
              {
                title: "2. Document Preparation",
                items: [
                  "Preparation of Common Technical Document (CTD) for pharmaceuticals",
                  "Preparation of Standardized Technical Document (STED) for medical devices",
                  "Preparation of Investigator's Brochure (IB)",
                  "Preparation of clinical submission package",
                  "Preparation of approval submission package",
                  "Preparation of raw material drug submission package",
                  "Development and preparation of synopsis/protocol"
                ]
              },
              {
                title: "3. MFDS Submission and Liaison",
                items: [
                  "Application for Drug Master File (DMF) registration",
                  "Application for pre-review (Pre-IND/NDA)",
                  "Application for Investigational New Drug (IND) approval",
                  "Application for New Drug Application (NDA)",
                  "Application for product renewal",
                  "Application for development stage/orphan drug designation",
                  "Import business license for pharmaceuticals/medical devices"
                ]
              },
              {
                title: "4. GMP Compliance Certification",
                items: [
                  "Pharmaceutical KGMP",
                  "Medical device ISO13485",
                  "Domestic and international GMP audit support"
                ]
              },
              {
                title: "5. Insurance Drug Pricing",
                items: [
                  "Pharmaceutical insurance drug pricing",
                  "New medical technology assessment (HIRA)"
                ]
              }
            ],
            pv: [
              {
                title: "1. Consulting",
                items: [
                  "PV System Establishment",
                  "PV SOP Development",
                  "PV Training",
                  "Response to Regulatory Authority Audit and Inspection"
                ]
              },
              {
                title: "2. Document Preparation",
                items: [
                  "Latest Safety Information Report (DSUR)",
                  "Risk Management Plan (RMP) and Implementation Result Report",
                  "Latest Safety Information Report (PSUR)",
                  "Periodic Benefit-Risk Evaluation Report (PBRER)",
                  "Safety Report for Product Renewal"
                ]
              },
              {
                title: "3. Safety Information Processing and Management",
                items: [
                  "Individual Case Safety Report (ICSR) Processing (by source, by country of occurrence)",
                  "Expedited/Periodic Reporting of Domestic Adverse Events",
                  "Serious Adverse Drug Reactions Abroad",
                  "Expedited SUSAR Reporting",
                  "Safety DB Set up, Storage Management",
                  "SMP/PVA, Review, Query Evaluation",
                  "Signal Management"
                ]
              },
              {
                title: "4. Safety Information Collection",
                items: [
                  "Periodic Literature Search",
                  "Regulatory Authority Sites"
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
                title: "1. 咨询",
                items: [
                  "分阶段许可战略（药品、医疗器械、融合复合产品、健康功能食品、准药品）",
                  "分阶段临床战略建立",
                  "GAP分析及可行性审查",
                  "食药处事前咨询（会议、民愿质询）准备",
                  "面向海外客户的国内法规情报服务"
                ]
              },
              {
                title: "2. 文档撰写",
                items: [
                  "药品国际共通技术文件(CTD)撰写",
                  "医疗器械国际标准化技术文件(STED)撰写",
                  "临床试验研究者资料集(IB)撰写",
                  "临床提交包撰写",
                  "许可提交包撰写",
                  "原料药品提交包撰写",
                  "概要/方案开发及撰写"
                ]
              },
              {
                title: "3. 食药处提交及代管",
                items: [
                  "原料药品登记申请(DMF)",
                  "事前审查申请(Pre-IND/NDA)",
                  "临床试验计划批准申请(IND)",
                  "品种许可申请(NDA)",
                  "品种更新申请",
                  "开发阶段/罕见病药品指定申请",
                  "药品/医疗器械进口业许可"
                ]
              },
              {
                title: "4. GMP合规认证",
                items: [
                  "药品KGMP",
                  "医疗器械ISO13485",
                  "国内外GMP实地审查支持"
                ]
              },
              {
                title: "5. 保险药价",
                items: [
                  "药品保险药价",
                  "新医疗技术评价(HIRA)"
                ]
              }
            ],
            pv: [
              {
                title: "1. 咨询",
                items: [
                  "PV系统构建",
                  "PV SOP制定",
                  "PV培训",
                  "监管机构审计及检查应对"
                ]
              },
              {
                title: "2. 文档撰写",
                items: [
                  "最新安全性信息报告(DSUR)",
                  "风险管理计划(RMP)及执行结果报告",
                  "最新安全性信息报告(PSUR)",
                  "定期效益-风险评估报告(PBRER)",
                  "品种更新用安全性报告"
                ]
              },
              {
                title: "3. 安全性信息处理、管理",
                items: [
                  "个例安全性信息报告(ICSR)处理（按来源、发生国家）",
                  "国内异常事例速报/定期报告",
                  "海外重大药物异常反应",
                  "SUSAR速报",
                  "Safety DB Set up、保管管理",
                  "SMP/PVA、审查、查询评估",
                  "线索信息管理"
                ]
              },
              {
                title: "4. 安全性信息收集",
                items: [
                  "定期文献检索",
                  "监管机构网站"
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
                title: "1. 컨설팅",
                items: [
                  "단계별 인허가 전략 (의약품, 의료기기, 융복합제품, 건강기능식품, 의약외품)",
                  "단계별 임상 전략 수립",
                  "GAP 분석 및 타당성 검토",
                  "식약처 사전상담(미팅, 민원질의) 준비",
                  "해외 고객을 위한 국내 Regulatory Intelligence 서비스"
                ]
              },
              {
                title: "2. 문서 작성",
                items: [
                  "의약품 국제공통기술문서(CTD) 작성",
                  "의료기기 국제표준화기술문서(STED) 작성",
                  "임상시험자자료집(IB) 작성",
                  "임상 제출 패키지 작성",
                  "허가 제출 패키지 작성",
                  "원료의약품 제출 패키지 작성",
                  "시놉시스/프로토콜 개발 및 작성"
                ]
              },
              {
                title: "3. 식약처 제출 및 대관",
                items: [
                  "원료의약품 등록 신청(DMF)",
                  "사전검토 신청(Pre-IND/NDA)",
                  "임상시험계획승인 신청(IND)",
                  "품목허가 신청(NDA)",
                  "품목갱신 신청",
                  "개발단계/희귀의약품 지정 신청",
                  "의약품/의료기기 수입업허가"
                ]
              },
              {
                title: "4. GMP 적합인증",
                items: [
                  "의약품 KGMP",
                  "의료기기 ISO13485",
                  "국내외 GMP 실사지원"
                ]
              },
              {
                title: "5. 보험약가",
                items: [
                  "의약품 보험약가",
                  "신의료기술평가(HIRA)"
                ]
              }
            ],
            pv: [
              {
                title: "1. 컨설팅",
                items: [
                  "PV 시스템 구축",
                  "PV SOP 개발",
                  "PV 교육",
                  "규제기관 Audit 및 Inspection 대응"
                ]
              },
              {
                title: "2. 문서 작성",
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
                  "개별 안전성 정보 보고서(ICSR)처리 (출처별, 발생 국가별)",
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
          <div className="service-badge">
            {language === 'eng' ? 'Our Services' : 
             language === 'chn' ? '我们的服务' : '서비스'}
          </div>
          <h2>
            {language === 'eng' ? 'OUR SERVICES' : 
             language === 'chn' ? '我们的服务' : 'OUR SERVICES'}
          </h2>
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

        {/* 서비스 콘텐츠 - 일렬로 나열 */}
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