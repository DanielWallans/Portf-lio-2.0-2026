import { useState, useEffect } from 'react';

/**
 * Hook customizado para gerenciamento de tema (Claro / Escuro)
 * @returns {[string, function]} Retorna o tema atual e a função de alternância
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
};
