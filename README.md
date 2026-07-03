# 🌟 Daniel Wallans — Portfólio Pessoal

Este é o repositório do meu portfólio pessoal e profissional, reestruturado como uma aplicação moderna de página única (SPA) desenvolvida em **React**, utilizando **Framer Motion** para animações interativas de alto nível e **CSS3 (Vanilla)** com suporte nativo a temas escuro/claro.

---

## 🚀 Funcionalidades Principais

- **Visual Premium & Parallax**: Efeito parallax de profundidade 3D na seção de abertura (Hero) controlado pela rolagem da página.
- **Habilidades Dinâmicas**: Apresentação de competências técnicas com barras de carregamento animadas e reatividade a interações (*hover*).
- **Projetos em Carrossel**: Carrosséis automáticos e independentes por projeto, exibindo capturas de tela com indicadores dinâmicos.
- **Linha do Tempo de Experiência**: Uma trajetória profissional limpa, destacando minhas atuações como Técnico de TI, Programador Freelancer e Programador de Automação Industrial.
- **Alternador de Tema (Dark/Light)**: Transição suave de cores e estilos baseada em variáveis CSS customizadas.
- **Responsividade Total**: Experiência visual impecável e otimizada para desktops, tablets e smartphones.

---

## 📂 Estrutura de Diretórios Organizacional

O código está estruturado de maneira extremamente limpa e modularizada:

```text
portfolio-Atualizado/
├── public/                 # Arquivos estáticos (index.html, ícones e imagens organizadas por projetos)
│   └── img/
│       ├── LearhubIMG/     # Imagens atualizadas do projeto LearnHub
│       ├── BarbeariaIMG/   # Imagens do projeto Barbearia
│       └── ...
├── src/
│   ├── components/         # Componentes React reutilizáveis e modulares
│   │   ├── Header.jsx      # Navegação fixa, menu mobile (hamburger) e alternador de tema
│   │   ├── Hero.jsx        # Seção de abertura com apresentação e links sociais
│   │   ├── Skills.jsx      # Grade de habilidades técnicas
│   │   ├── Projects.jsx    # Projetos em destaque com carrossel dinâmico
│   │   ├── Experience.jsx  # Linha do tempo profissional (DC Infor, Freelancer e Suporte Automação)
│   │   ├── Contact.jsx     # Seção de contato com links diretos
│   │   └── Footer.jsx      # Rodapé institucional
│   ├── hooks/              # Hooks customizados para lógica reutilizável
│   │   ├── useTheme.js     # Controle e persistência do tema (Light/Dark)
│   │   ├── useScrollDirection.js # Detecção do sentido do scroll para esconder/mostrar cabeçalho
│   │   └── useIntersectionObserver.js # Detecção de elementos na tela para animações 3D
│   ├── utils/              # Funções utilitárias
│   │   └── scroll.js       # Função de rolagem suave para seções específicas
│   ├── App.jsx             # Montador central das seções do Portfólio
│   ├── index.js            # Ponto de entrada do React
│   └── style.css           # Folha de estilo centralizada com variáveis de design system e temas
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

---

## ⚙️ Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação
1. Clone o repositório ou navegue até a pasta do projeto:
   ```bash
   cd portfolio-Atualizado
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução em Desenvolvimento
Para rodar o projeto localmente com recarregamento em tempo real (*Fast Refresh*):
```bash
npm start
```
A aplicação abrirá no endereço [http://localhost:3000](http://localhost:3000) no seu navegador padrão.

### Build de Produção
Para compilar e otimizar os arquivos estáticos para publicação em produção:
```bash
npm run build
```
Os arquivos prontos para deploy serão criados no diretório `/build`.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** (Biblioteca para construção de interfaces modulares)
- **Framer Motion** (Biblioteca robusta para animações fluidas)
- **CSS3 Vanilla** (Variáveis nativas, animações personalizadas e layout flexbox/grid)
- **React-scripts** (Ferramentas padrão do Create React App para build e desenvolvimento)
- **Git** (Sistema de controle de versão)

---

## ✉️ Contato

Se deseja bater um papo sobre desenvolvimento web, automação ou parcerias freelancer, sinta-se à vontade para se conectar:

- **E-mail:** [danieldiniz03@live.com](mailto:danieldiniz03@live.com)
- **LinkedIn:** [Daniel Wallans](https://www.linkedin.com/in/danielwallans/)
- **GitHub:** [@DanielWallans](https://github.com/DanielWallans)
- **Portfólio Online:** [Acessar Website](https://danielwallans.netlify.app/)
