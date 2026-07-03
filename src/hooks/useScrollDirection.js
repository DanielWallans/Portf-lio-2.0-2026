import { useState, useEffect } from 'react';

/**
 * Hook customizado para identificar a direção da rolagem e controlar a visibilidade do header.
 * @param {number} threshold - Posição do topo a partir da qual o header pode ser ocultado (padrão: 120)
 * @returns {boolean} Retorna se o elemento deve estar visível
 */
export const useScrollDirection = (threshold = 120) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Se rolar para baixo e passar do limite, esconde. Se rolar para cima, mostra.
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(Math.max(currentScrollY, 0));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, threshold]);

  return visible;
};
