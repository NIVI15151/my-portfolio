// Components/LandingPage.js
import React from 'react';
import photo from '../images/photo.jpg';
import { FaGithub, FaLinkedin, FaTwitter  } from 'react-icons/fa'; // Import social media icons

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#achievements" style={styles.navLink}>Achievements</a>
        <a href="#contactme" style={styles.navLink}>Contact Me</a>
        {/* Add more navigation links for other sections */}
      </nav>

      {/* Social Media Profiles */}
      <div style={styles.socialContainer}>
        <a href="https://github.com/NIVI15151" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/nivi-goyal/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><FaLinkedin size={30} /></a>
        <a href="https://twitter.com/goyal_nivi" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><FaTwitter size={30} /></a>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Welcome to My Portfolio</h1>
        <p style={styles.paragraph}>
          Hello, I'm Nivi Goyal. A passionate web developer with a love for clean code and creative solutions.
        </p>
        <a href="#projects" style={styles.ctaButton}>View Projects</a>
      </div>

      {/* Your Photo */}
      <div style={styles.photoContainer}>
        {/* Replace the src with the actual path to your photo */}
        <img src={photo} alt="Your Photo" style={styles.photo} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100vh',
    background: 'linear-gradient(to right, #6a1b9a, #3498db, #000)', // Purple to blue to black gradient background
    color: '#ecf0f1',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '20px',
  },
  navLink: {
    color: '#ecf0f1',
    fontSize: '18px',
    textDecoration: 'none',
    marginBottom: '15px',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialLink: {
    color: '#ecf0f1',
    margin: '10px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  mainContent: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#3498db',
    background: '#ecf0f1',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
  },
  ctaButtonHover: {
    background: '#2980b9',
  },
  photoContainer: {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '50%',
    border: '5px solid #ecf0f1',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default LandingPage;
