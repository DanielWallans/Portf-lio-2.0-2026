import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
  {
    id: 'skill-html',
    name: 'HTML',
    detail: 'Estruturação & Acessibilidade',
    icon: 'img/icones/html 1.png',
    color: '#e34f26',
    rgb: '227, 79, 38'
  },
  {
    id: 'skill-css',
    name: 'CSS',
    detail: 'Design Responsivo & Estilização',
    icon: 'img/icones/css-3 1.png',
    color: '#1572b6',
    rgb: '21, 114, 182'
  },
  {
    id: 'skill-js',
    name: 'JavaScript',
    detail: 'Lógica de Programação & DOM',
    icon: 'img/icones/js 1.png',
    color: '#f7df1e',
    rgb: '247, 223, 30'
  },
  {
    id: 'skill-react',
    name: 'React',
    detail: 'Componentização & SPAs',
    icon: 'img/icones/react.svg',
    color: '#61dafb',
    rgb: '97, 218, 251'
  },
  {
    id: 'skill-node',
    name: 'Node.js',
    detail: 'APIs Rest & Microsserviços',
    icon: 'img/icones/nodejs.svg',
    color: '#339933',
    rgb: '51, 153, 51'
  },
  {
    id: 'skill-java',
    name: 'Java',
    detail: 'Programação Orientada a Objetos',
    icon: 'img/icones/java.svg',
    color: '#f89820',
    rgb: '248, 152, 32'
  },
  {
    id: 'skill-git',
    name: 'Git',
    detail: 'Versionamento & Colaboração',
    icon: 'img/icones/git.svg',
    color: '#f05032',
    rgb: '240, 80, 50'
  },
  {
    id: 'skill-typescript',
    name: 'TypeScript',
    detail: 'Tipagem Estática & Robustez',
    icon: 'img/icones/typescript.svg',
    color: '#3178c6',
    rgb: '49, 120, 198'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function Skills() {
  return (
    <section id="skills">
      <div className="skills-header">
        <h2 id="skills-title">Habilidades Técnicas</h2>
      </div>

      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SKILLS_DATA.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill"
            id={skill.id}
            style={{ 
              '--theme-color': skill.color, 
              '--theme-rgb': skill.rgb 
            }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="skill-header-card">
              <div className="skill-icon-wrapper">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="skill-info">
                <span>{skill.name}</span>
                <p className="skill-detail">{skill.detail}</p>
              </div>
            </div>
            <div className="skill-bar">
              <div className="skill-progress"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
