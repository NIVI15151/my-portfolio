// components/About.js
import React, { useEffect } from 'react';
import Resume from '../images/NiviGoyal_Resume.pdf'; 

const About = () => {
  useEffect(() => {
    const content = document.getElementById('about-content');
    const resumeContainer = document.getElementById('resume-container');

    if (content && resumeContainer) {
      content.style.opacity = 1;
      resumeContainer.style.opacity = 1;
    }
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div id="about-content" style={styles.content}>
          <h2 style={styles.heading}>About Me</h2>
          <p style={styles.paragraph}>
  Hello, I'm <span style={styles.highlightPurple}>Nivi Goyal</span>, a dynamic web and ML enthusiast, bringing a 
  blend of creativity and technical prowess to the digital realm. With hands-on experience in projects like 
  Movie Recommender and Poppy Chatbot, <span style={styles.highlightPurple}>I craft interactive and user-friendly solutions. My journey,
  </span> marked by proficiency in Python, HTML, CSS, and more,  <span style={styles.highlightBlue}>reflects a passion for web technologies. 
  </span> My academic excellence and collaborative spirit make me an emerging force in the development landscape. Eager to contribute to 
  innovative projects and explore new horizons, I am poised to make impactful strides in the world of web and machine learning.
</p>

          <h3 style={styles.subHeading}>Education</h3>
          <p style={styles.educationDetails}>
            - Bachelor of Technology in Information Technnology <br />
            Banasthali Vidyapith, Graduation Year: 2025<br /><br />

            - Diploma in Internet and Web application <br />
            Banasthali Vidyapith, Graduation Year: 2023<br /><br />

            - Advance Diploma in Networking (Cisco Certified) <br />
            Banasthali Vidyapith, Graduation Year: 2024
          </p>
        </div>

        <div id="resume-container" style={styles.resumeContainer}>
          <a href={Resume} download style={styles.resumeLink}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    background: '#ffffff', // White background color
    color: '#2c3e50', // Dark text color
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: '1',
    opacity: 0,
    transition: 'opacity 1s ease-in-out',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#8e44ad', // Purple color
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    backgroundImage: 'linear-gradient(90deg, #8e44ad, #3498db, #000)', // Gradient from purple to blue to black
    backgroundClip: 'text',
    color: 'transparent',
  },
  highlightPurple: {
    color: '#8e44ad',
  },
  highlightBlue: {
    color: '#3498db',
  },
  subHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#8e44ad', // Purple color
  },
  educationDetails: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#2c3e50', // Dark text color
  },
  resumeContainer: {
    marginLeft: '40px',
    opacity: 0,
    transition: 'opacity 1s ease-in-out 0.5s',
  },
  resumeLink: {
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2c3e50', // Dark text color
    background: '#8e44ad', // Purple button background
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
    textAlign: 'center',
    cursor: 'pointer',
  },
};

export default About;
