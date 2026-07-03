import { useState, useEffect, useRef } from 'react';

/**
 * Hook customizado para detectar a entrada de um elemento na viewport.
 * @param {object} options - Opções adicionais do IntersectionObserver (threshold, rootMargin)
 * @returns {[object, boolean]} Retorna a referência do elemento e o estado de visibilidade
 */
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Uma vez revelado, podemos parar de observar para otimizar desempenho
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};
