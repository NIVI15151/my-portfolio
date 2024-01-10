// components/Navigation.js
import React from 'react';

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <a href="#about" style={styles.link}>About</a>
      <a href="#skills" style={styles.link}>Skills</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#achievements" style={styles.link}>Achievements</a>
      {/* Add more navigation links for other sections */}
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '15px',
    textAlign: 'center',
  },
  link: {
    color: '#ecf0f1',
    margin: '0 15px',
    textDecoration: 'none',
  },
};

export default Navigation;
