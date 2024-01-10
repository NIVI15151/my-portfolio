// components/Projects.js
import React from 'react';
import Movie from '../images/movie.jpg'; 
import Chatbot from '../images/chatbot.jpg'; 
import Voting from '../images/voting.jpg'; 
import Game1 from '../images/game1.jpg'; 
import Game2 from '../images/game2.jpg'; 

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectContainer}>
        {/* Project Cards */}
        {Array.from({ length: 1 }).map((_, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={Movie} alt={`Project ${index + 1}`} style={styles.projectImage} />
            <h3>Movie Recommender System </h3>
            <p><a href="https://github.com/NIVI15151/Movie-Recommender?tab=readme-ov-file" >Github Link</a> </p>
          </div>
        ))}

       {Array.from({ length: 1 }).map((_, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={Chatbot} alt={`Project ${index + 1}`} style={styles.projectImage} />
            <h3>Poppy Chatbot </h3>
            <p><a href="https://nivi15151.github.io/Poppy-Chatbot/" >Demo</a> </p>
          </div>
        ))}

{Array.from({ length: 1 }).map((_, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={Voting} alt={`Project ${index + 1}`} style={styles.projectImage} />
            <h3>Online Voting System </h3>
            <p><a href="https://github.com/NIVI15151/Online-Voting-System" >Github Link</a> </p>
          </div>
        ))}

{Array.from({ length: 1 }).map((_, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={Game1} alt={`Project ${index + 1}`} style={styles.projectImage} />
            <h3>The Guessing game </h3>
            <p><a href="https://github.com/NIVI15151/Small-projects/blob/main/Guess.py" >Github Link</a> </p>
          </div>
        ))}

{Array.from({ length: 1 }).map((_, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={Game2} alt={`Project ${index + 1}`} style={styles.projectImage} />
            <h3>Rock-Paper-Scissors </h3>
            <p><a href="https://github.com/NIVI15151/Small-projects/blob/main/Rock-paper-scissor.c" >Github Link</a> </p>
          </div>
        ))}
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    background: 'linear-gradient(to right, #3498db, #6a1b9a, #000)', // Blue to purple to black gradient background
    textAlign: 'center',
    color: '#ecf0f1', // Light text color
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  projectContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  projectCard: {
    width: '300px',
    margin: '20px 10px',
    padding: '15px',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    textAlign: 'center',
    background: '#2c3e50', // Dark blue color for project card background
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
};

export default Projects;
