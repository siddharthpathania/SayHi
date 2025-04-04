import React, { useState } from 'react';
import { Bot, Sun, Moon, Users, Lightbulb, Phone, Image as ImageIcon, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Team />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}

export default App;