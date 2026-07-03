import React from 'react';
import { scrollToSection } from '../utils/scroll';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo" id="footer-brand">DW</div>
        <div className="footer-nav" id="footer-links-group">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Início</a>
          <a href="#projetos" onClick={(e) => scrollToSection(e, '#projetos')}>Projetos</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Habilidades</a>
          <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')}>Contato</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p id="footer-copy">&copy; 2026 Daniel Wallans. Todos os direitos reservados.</p>
        <div className="status" id="footer-availability">
          <div className="status-dot"></div>
          <span>Disponível para novos projetos</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
