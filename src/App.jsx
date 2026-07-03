import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
