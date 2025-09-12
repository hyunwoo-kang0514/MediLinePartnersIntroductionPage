import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import companyIntroImage from '../../images/Company_Introduction_Page.png';
import './AboutUs.css';

const AboutUs = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

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
  };

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          subtitle: "Company Introduction",
          title: "ABOUT COMPANY",
          companySection: {
            title: "Company Introduction",
            description: "Mediline Partners Co., Ltd. is a professional consulting company that provides pharmaceutical/medical device licensing and pharmacovigilance services.",
            details: `We are not a simple outsourcing vendor, but present integrated solutions by mutually linking procedures throughout the entire development cycle. As another team for clients leading R&D, we support integrated solutions across the entire R&D process, from <strong>R&D strategic planning, non-clinical, clinical, GMP, IND/NDA, to PV</strong>. With a practical and strategic approach, we realize a <strong>Real Total Package Service</strong> for market entry optimized for our clients.`
          },
          personnelSection: {
            title: "Message from CEO",
            description: "We promise to be a reliable partner for pharmaceutical safety management to ensure safe use of your company's pharmaceuticals.",
            details: `In Korea, pharmaceutical license holders must have a pharmaceutical safety management officer and conduct post-marketing safety management. As safety information becomes diverse and pharmacovigilance regulations are gradually strengthened, expectations for pharmacovigilance work are increasing, but it is not easy to find professional personnel to perform this work.\n\nMedisafe provides professional services for pharmacovigilance work. Based on more than 20 years of pharmacovigilance and licensing experience in multinational companies, we cooperate with clients to comply not only with domestic regulations but also with international guidelines.`
          }
        };
      case 'chn':
        return {
          subtitle: "公司介绍",
          title: "ABOUT COMPANY",
          companySection: {
            title: "公司介绍",
            description: "Mediline Partners Co., Ltd.是一家提供药品/医疗器械许可和药物警戒服务的专业咨询公司。",
            details: `我们不是简单的外包供应商，而是通过相互关联整个开发周期的程序来提供综合解决方案。作为领导研发的客户公司的另一个团队，我们支持从<strong>研发战略规划、非临床、临床、GMP、IND/NDA到PV</strong>的整个研发过程的综合解决方案。通过实用和战略性的方法，我们为客户实现优化的市场进入<strong>Real Total Package Service</strong>。`
          },
          personnelSection: {
            title: "CEO致辞",
            description: "我们承诺成为药品安全管理的可靠合作伙伴，确保贵公司药品的安全使用。",
            details: `在韩国，药品许可持有人必须配备药品安全管理负责人并进行上市后安全管理。随着安全信息的多样化和药物警戒法规的逐步加强，对药物警戒工作的期望水平也在提高，但要找到执行这项工作的专业人员并不容易。\n\nMedisafe为药物警戒工作提供专业服务。基于20多年在跨国公司的药物警戒和许可经验，我们与客户合作，不仅遵守国内法规，还遵守国际指导原则。`
          }
        };
      default: // kor
        return {
          subtitle: "회사소개",
          title: "ABOUT COMPANY",
          companySection: {
            title: "회사소개",
            description: "(주)메디라인파트너스는 의약품/의료기기 인허가 및 약물감시 서비스를 제공하는 전문 컨설팅 기업입니다.",
            details: `단순한 아웃소싱 벤더가 아닌, 개발 전주기의 절차를 상호 연계하여 통합 해법을 제시합니다. 연구개발을 이끌어가는 고객사의 또 다른 팀으로서 <strong>R&D 전략 기획 비임상, 임상, GMP, IND/NDA, PV까지 R&D 전 과정에 걸친 통합 솔루션</strong>을 지원합니다. 실용적이고 전략적인 접근으로, 의뢰사에 최적화된 시장진입을 위한 <strong>Real Total Package Service</strong>를 실현합니다.`
          },
          personnelSection: {
            title: "인사말",
            description: "귀사의 의약품 및 의료기기의 초기 개발 단계에서부터 허가, 그리고 그 과정에서 안전관리까지 함께 걷는 파트너가 될 것을 약속 드립니다.",
            details: `메디라인파트너스는 지난 <strong>25년간</strong> 다국적 제약사, 바이오벤처, 국내외 의료기기 회사들과 함께하며 쌓아온 <strong>경험과 노하우</strong>를 바탕으로, 국내 규정은 물론 <strong>ICH 등 국제 가이드라인</strong>을 충실히 준수하는 <strong>전문 컨설팅 서비스</strong>를 제공합니다.\n\n앞으로도 <strong>신뢰할 수 있는 인허가 전문 파트너</strong>로서, 귀사의 <strong>성공적인 시장 진입</strong>과 <strong>지속 가능한 성장</strong>에 함께하겠습니다.\n\n<strong style="color: #333; font-weight: 700;">감사합니다.<br>(주)메디라인파트너스 올림</strong>`
          }
        };
    }
  };

  const content = getContent();

  return (
    <section id="about" className="about-company">
      <motion.div
        ref={ref}
        className="about-company-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="about-company-header" variants={itemVariants}>
          <div className="header-subtitle">{content.subtitle}</div>
          <h2 className="about-company-title">{content.title}</h2>
        </motion.div>

        <div className="about-company-content">
          <motion.div className="company-section" variants={itemVariants}>
            <div className="section-badge">{content.companySection.title}</div>
            <div className="section-content">
              <p className="section-description">{content.companySection.description}</p>
              <p className="section-details" dangerouslySetInnerHTML={{ __html: content.companySection.details }}></p>
            </div>
          </motion.div>

          <motion.div className="personnel-section" variants={itemVariants}>
            <div className="section-badge">{content.personnelSection.title}</div>
            <div className="section-content">
              <p className="section-description">{content.personnelSection.description}</p>
              <p className="section-details" dangerouslySetInnerHTML={{ __html: content.personnelSection.details }}></p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
