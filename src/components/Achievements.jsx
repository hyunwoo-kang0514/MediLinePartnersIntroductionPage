import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import clientsExperiencesPage from '../../images/clients_experiences_page.png';
import raDrugExperiences from '../../images/RA_Drug_Experiences.png';
import raDeviceExperiences from '../../images/RA_Device_Experiences.png';
import pvProjectExperiences from '../../images/PV_Project_Experiences.png';
import iccServiceExperiences from '../../images/ICC_Service_Experiences.png';
import './Achievements.css';

const Achievements = ({ language }) => {
  const [counts, setCounts] = useState({
    clients: 0,
    raDrug: 0,
    raDevice: 0,
    pv: 0,
    icc: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const targetValues = {
    clients: 100,
    raDrug: 215,
    raDevice: 164,
    pv: 30,
    icc: 20
  };

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          title: "Key Achievements",
          subtitle: "Many customers are creating success with Mediline Partners.",
          achievements: [
            { key: 'clients', label: 'Clients', value: targetValues.clients },
            { key: 'raDrug', label: 'RA Projects (Drug)', value: targetValues.raDrug },
            { key: 'raDevice', label: 'RA Projects\n(Medical Device)', value: targetValues.raDevice },
            { key: 'pv', label: 'PV Project', value: targetValues.pv },
            { key: 'icc', label: 'ICC Service', value: targetValues.icc }
          ]
        };
      case 'chn':
        return {
          title: "主要成就",
          subtitle: "许多客户与Mediline Partners一起创造成功。",
          achievements: [
            { key: 'clients', label: '客户', value: targetValues.clients },
            { key: 'raDrug', label: 'RA项目(药品)', value: targetValues.raDrug },
            { key: 'raDevice', label: 'RA项目(医疗器械)', value: targetValues.raDevice },
            { key: 'pv', label: 'PV项目', value: targetValues.pv },
            { key: 'icc', label: 'ICC服务', value: targetValues.icc }
          ]
        };
      default: // kor
        return {
          title: "주요성과",
          subtitle: "많은 고객사가 메디라인파트너스와 함께 성공을 만들어가고 있습니다.",
          achievements: [
            { key: 'clients', label: 'Clients', value: targetValues.clients },
            { key: 'raDrug', label: 'RA Projects (Drug)', value: targetValues.raDrug },
            { key: 'raDevice', label: 'RA Projects\n(Medical Device)', value: targetValues.raDevice },
            { key: 'pv', label: 'PV Project', value: targetValues.pv },
            { key: 'icc', label: 'ICC Service', value: targetValues.icc }
          ]
        };
    }
  };

  const content = getContent();

  // 카운터 애니메이션 함수
  const animateCounter = (key, targetValue, duration = 3000) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuart 이징 함수
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);

      setCounts(prev => ({
        ...prev,
        [key]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // 스크롤 감지 및 애니메이션 시작
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      // 각 카운터를 순차적으로 시작 (약간의 딜레이)
      setTimeout(() => animateCounter('clients', targetValues.clients), 200);
      setTimeout(() => animateCounter('raDrug', targetValues.raDrug), 400);
      setTimeout(() => animateCounter('raDevice', targetValues.raDevice), 600);
      setTimeout(() => animateCounter('pv', targetValues.pv), 800);
      setTimeout(() => animateCounter('icc', targetValues.icc), 1000);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

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
  };

  return (
    <section className="achievements" ref={ref}>
      {/* LSK 스타일의 Experiences 섹션 */}
      <div className="experiences-section">
        <div className="experiences-content">
          <motion.div 
            className="experiences-text"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 className="experiences-title" variants={itemVariants}>
              {language === 'eng' ? 'EXPERIENCES' : 
               language === 'chn' ? '经验' : 'EXPERIENCES'}
            </motion.h2>
            <motion.p className="experiences-description" variants={itemVariants}>
              {language === 'eng' 
                ? "We provide high-level, efficient clinical trial services that meet global standards."
                : language === 'chn'
                ? "我们提供满足全球标准的高水平、高效的临床试验服务。"
                : "글로벌 기준을 충족하는 높은 수준의 효율적인 임상시험 서비스를 제공합니다."
              }
            </motion.p>
            <motion.a href="#services" className="view-more-link" variants={itemVariants}>
              {language === 'eng' ? 'VIEW MORE →' : 
               language === 'chn' ? '查看更多 →' : 'VIEW MORE →'}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 통계 카드 섹션 */}
      <div className="stats-section">
        <div className="stats-container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {content.achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.key}
                className="stat-card"
                style={index === 0 ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${clientsExperiencesPage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : index === 1 ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${raDrugExperiences})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : index === 2 ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${raDeviceExperiences})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : index === 3 ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${pvProjectExperiences})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : index === 4 ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${iccServiceExperiences})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="stat-icon">
                  {/* 아이콘 제거 - 텍스트에 집중 */}
                </div>
                <div className="stat-number">
                  {counts[achievement.key]}+
                </div>
                <div className="stat-label">
                  {achievement.label}
                </div>
                <div className="stat-line"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Achievements;
