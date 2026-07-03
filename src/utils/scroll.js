/**
 * Realiza uma rolagem suave para uma seção da página considerando o recuo do cabeçalho.
 * @param {Event} event - O evento de clique (opcional) para prevenir comportamento padrão
 * @param {string} targetId - O seletor ID do elemento alvo (ex: '#projetos' ou '#')
 * @param {number} offset - Altura de recuo em pixels do cabeçalho fixo (padrão: 90)
 */
export const scrollToSection = (event, targetId, offset = 90) => {
  if (event) event.preventDefault();

  if (targetId === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
