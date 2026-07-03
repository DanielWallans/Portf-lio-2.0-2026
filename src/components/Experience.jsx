import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE_DATA = [
  {
    id: 'exp-dc-infor',
    role: 'Técnico de TI',
    company: 'DC Infor Suprimentos de Informática e Tecnologia',
    location: 'Matozinhos/MG',
    period: 'Março / 2026 – Junho / 2026',
    tasks: [
      'Diagnóstico e reparo avançado em desktops, notebooks e servidores, garantindo a integridade física dos equipamentos.',
      'Identificação de falhas de hardware e software, otimização de sistemas operacionais e suporte direto ao usuário final.'
    ]
  },
  {
    id: 'exp-freelancer',
    role: 'Desenvolvedor Full Stack (Freelancer)',
    company: 'Trabalhos Autônomos',
    location: 'Remoto',
    period: 'Junho / 2025 – Presente',
    tasks: [
      'Desenvolvimento de sites institucionais, landing pages de alta conversão e sistemas web completos de ponta a ponta.',
      'Integração de APIs, desenvolvimento de back-ends robustos em Node.js e interfaces dinâmicas e responsivas com React.',
      'Otimização de performance de aplicações web e práticas recomendadas de SEO.'
    ]
  },
  {
    id: 'exp-suporte-automacao',
    role: 'Programador de Automação Industrial',
    company: 'Suporte Automação',
    location: 'Matozinhos/MG',
    period: 'Abril / 2025 – Maio / 2025',
    tasks: [
      'Desenvolvimento e suporte de sistemas de automação industrial.',
      'Programação de controladores, análise de processos de produção e testes de equipamentos.'
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

function Experience() {
  return (
    <section id="experiencia">
      <div className="experience-header">
        <div className="section-label">
          <span className="tag">Trajetória</span>
          <h2 id="experience-main-title">Experiência Profissional</h2>
        </div>
        <p className="section-intro" id="experience-intro-text">
          Minha jornada construindo soluções em tecnologia, suporte especializado e desenvolvimento fullstack.
        </p>
      </div>

      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="timeline-line"></div>
        {EXPERIENCE_DATA.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            id={exp.id}
            variants={itemVariants}
          >
            <div className="experience-dot"></div>
            <div className="experience-content">
              <div className="experience-meta-info">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
              <div className="experience-title-bar">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <ul className="experience-tasks">
                {exp.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
