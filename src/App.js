// src/App.js
import React from 'react';
import Home from './Components/home';
import Contactme from './Components/contactme';
import About from './Components/about';
import Projects from './Components/projects';
import Skills from './Components/skills';
import Achievements from './Components/achievements';
// ... import other components

function App() {
  return (
    <div>
      <header>
      <Home />
      </header>
      <main>
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contactme />

        {/* Other components go here */}
      </main>
    </div>
  );
}



const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
  },
  header: {
    background: '#2c3e50',
    padding: '20px 0',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
  },
};

export default App;
