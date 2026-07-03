import React from 'react';
import { motion } from 'framer-motion';

const CONTACT_ROWS = [
  {
    num: '01',
    title: 'E-mail',
    actionText: 'danieldiniz03@live.com',
    link: 'mailto:danieldiniz03@live.com'
  },
  {
    num: '02',
    title: 'LinkedIn',
    actionText: 'Conectar Perfil',
    link: 'https://www.linkedin.com/in/danielwallans/'
  },
  {
    num: '03',
    title: 'GitHub',
    actionText: 'Explorar Códigos',
    link: 'https://github.com/DanielWallans'
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

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

function Contact() {
  return (
    <section id="contato">
      <div className="contact-container-outer">
        <div className="contact-header">
          <span className="tag">Contato</span>
          <h2 id="contact-main-heading">Vamos Conversar?</h2>
          <p className="contact-intro">
            Estou sempre aberto a novas parcerias, projetos desafiadores e conversas sobre desenvolvimento web e
            arquitetura de software.
          </p>
        </div>

        <motion.div 
          className="contact-rows"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {CONTACT_ROWS.map((row) => (
            <motion.a
              key={row.num}
              href={row.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
              id={`row-${row.title.toLowerCase()}`}
              variants={rowVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <span className="row-num">{row.num}</span>
              <span className="row-title">{row.title}</span>
              <span className="row-action">
                {row.actionText} <span className="row-arrow">↗</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
