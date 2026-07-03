import React, { useState, useEffect } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { scrollToSection } from '../utils/scroll';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHeaderVisible = useScrollDirection();

  // Fecha o menu mobile ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('#navigation-menu') && !e.target.closest('#hamburger-menu')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const handleNavClick = (e, targetId) => {
    setMenuOpen(false);
    scrollToSection(e, targetId);
  };

  return (
    <>
      {menuOpen && (
        <div 
          className="menu-backdrop" 
          onClick={() => setMenuOpen(false)}
        />
      )}
      <header style={{ transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
        <div className="header">
        {/* Logo */}
        <div 
          className="logo-container" 
          onClick={(e) => handleNavClick(e, '#')} 
          id="nav-logo"
        >
          <div className="header-title">
            <span className="daniel">Daniel</span>
            <span className="wallans">Wallans</span>
          </div>
        </div>

        {/* Menu Hamburger */}
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navegação"
          id="hamburger-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links de Navegação */}
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`} id="navigation-menu">
          <a 
            href="#home" 
            className="nav-link" 
            id="nav-home-link"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            Início
          </a>
          <a 
            href="#projetos" 
            className="nav-link" 
            id="nav-projetos-link"
            onClick={(e) => handleNavClick(e, '#projetos')}
          >
            Projetos
          </a>
          <a 
            href="#skills" 
            className="nav-link" 
            id="nav-skills-link"
            onClick={(e) => handleNavClick(e, '#skills')}
          >
            Habilidades
          </a>
          <a 
            href="#experiencia" 
            className="nav-link" 
            id="nav-experiencia-link"
            onClick={(e) => handleNavClick(e, '#experiencia')}
          >
            Experiência
          </a>
          <a 
            href="#contato" 
            className="nav-link" 
            id="nav-contato-link"
            onClick={(e) => handleNavClick(e, '#contato')}
          >
            Contato
          </a>
        </nav>

        {/* Ações do Header */}
        <div className="header-actions">
          {/* Alternador de tema Claro / Escuro */}
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro" 
            id="theme-toggle"
          />
          
          <a 
            href="#contato" 
            className="cta-inquiry" 
            id="cta-contact-button"
            onClick={(e) => handleNavClick(e, '#contato')}
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  </>
);
}

export default Header;
