import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PROJECTS_DATA = [
  {
    id: 'project-learnhub',
    title: 'LearnHub',
    meta: 'Plataforma E-Learning • React • Node.js • Express • CSS3',
    link: 'https://cortexleanhub.vercel.app/',
    images: [
      'img/LearhubIMG/1.png',
      'img/LearhubIMG/2.png',
      'img/LearhubIMG/3.png'
    ],
    interval: 5000
  },
  {
    id: 'project-cafe',
    title: 'Cafeteria Especial',
    meta: 'Design de Interface • HTML5 • CSS3 • JavaScript',
    link: 'https://cafesitedw.vercel.app/',
    images: [
      'img/IMGcafe/1.png',
      'img/IMGcafe/2.png',
      'img/IMGcafe/3.png'
    ],
    interval: 6000
  },
  {
    id: 'project-barbearia',
    title: 'Barbearia Wallans',
    meta: 'Aplicação Interativa • React • Framer Motion • CSS3',
    link: 'https://barbeariadw.vercel.app/',
    images: [
      'img/BarbeariaIMG/1.png',
      'img/BarbeariaIMG/2.png',
      'img/BarbeariaIMG/3.png'
    ],
    interval: 7000
  },
  {
    id: 'project-dcinfor',
    title: 'DC Infor',
    meta: 'Página Corporativa • React • JavaScript • CSS3',
    link: 'https://dcinfor-zeta.vercel.app/',
    images: [
      'img/dcinfor/1.png',
      'img/dcinfor/2.png',
      'img/dcinfor/3.png'
    ],
    interval: 8000
  }
];

function Carousel({ images, intervalTime, projectTitle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [images.length, intervalTime]);

  return (
    <div className="project-media">
      <div className="carousel-container">
        {images.map((imgSrc, index) => (
          <img
            key={imgSrc}
            src={imgSrc}
            alt={`${projectTitle} Slide ${index + 1}`}
            className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            style={{ position: 'relative' }}
          >
            {index === activeIndex && (
              <motion.span
                layoutId={`active-dot-${projectTitle}`}
                className="dot-active-indicator"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'var(--dot-active, #ffffff)',
                  borderRadius: '50%',
                  zIndex: 2
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  // Uso do hook customizado para detectar entrada na tela (Observer 3D)
  const [cardRef, revealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <article
      ref={cardRef}
      className={`project-card ${revealed ? 'revealed' : ''}`}
      id={project.id}
    >
      <Carousel
        images={project.images}
        intervalTime={project.interval}
        projectTitle={project.title}
      />

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-details"
        title={`Visitar ${project.title}`}
      >
        <div className="project-title-bar">
          <h3 className="project-title">{project.title}</h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="project-meta">{project.meta}</div>
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section id="projetos">
      <div className="projetos-header">
        <div className="section-label">
          <span className="tag">Trabalhos Selecionados</span>
          <h2 id="projects-main-title">Soluções Full Stack</h2>
        </div>
        <p className="section-intro" id="projects-intro-text">
          Sistemas completos criados sob medida focando em alta performance e escalabilidade.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
