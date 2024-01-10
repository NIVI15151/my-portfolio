// components/Achievements.js
import React from 'react';
import A1 from '../images/A1.jpg'; // Replace with actual image paths
import A2 from '../images/A2.jpg'; // Replace with actual image paths
import A3 from '../images/A3.jpg'; // Replace with actual image paths
import A4 from '../images/A4.jpg'; // Replace with actual image paths
import A5 from '../images/A5.jpg'; // Replace with actual image paths
import A6 from '../images/A6.png'; // Replace with actual image paths
import A7 from '../images/A7.jpg'; // Replace with actual image paths
import A8 from '../images/A8.jpg'; // Replace with actual image paths

const Achievements = () => {
  return (
    <section id="achievements" style={styles.section}>
      <h2 style={styles.heading}>Achievements</h2>
      <div style={styles.achievementsContainer}>
        {/* Achievement 1 */}
        <div style={styles.achievementCard}>
          <img src={A1} alt="Achievement 1" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Certificate of Excellence</h3>
            <p style={styles.achievementDescription}>
              Awarded with Indira Priyadarshini award (1 lac cash prize) for outstanding performance in 12th class for obtaining 100%.
            </p>
          </div>
        </div>

        {/* Achievement 2 */}
        <div style={styles.achievementCard}>
          <img src={A2} alt="Achievement 2" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Sql for Data Analytics</h3>
            <p style={styles.achievementDescription}>
              Recognized for the skills of data analytics using SQL.
            </p>
          </div>
        </div>

        {/* Achievement 3 */}
        <div style={styles.achievementCard}>
          <img src={A3} alt="Achievement 1" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Web Development</h3>
            <p style={styles.achievementDescription}>
              Learned some web technical skills like HTML, CSS, Bootstrap, js, React.
            </p>
          </div>
        </div>

        {/* Achievement 4 */}
        <div style={styles.achievementCard}>
          <img src={A4} alt="Achievement 2" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Programming with Python</h3>
            <p style={styles.achievementDescription}>
              Practical learning of Python language.
            </p>
          </div>
        </div>

        {/* Achievement 5 */}
        <div style={styles.achievementCard}>
          <img src={A5} alt="Achievement 1" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Certificate of UI/UX Design</h3>
            <p style={styles.achievementDescription}>
              Hands-on practice on figma.
            </p>
          </div>
        </div>

        {/* Achievement 6 */}
        <div style={styles.achievementCard}>
          <img src={A6} alt="Achievement 2" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>We-Hack 2023</h3>
            <p style={styles.achievementDescription}>
              Developed a prototype of LawHub which can solve a real life problem through the technology .
            </p>
          </div>
        </div>

        {/* Achievement 7*/}
        <div style={styles.achievementCard}>
          <img src={A7} alt="Achievement 1" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Quantitative Aptitude</h3>
            <p style={styles.achievementDescription}>
              Solved some aptitude and mathematical questions also learned about basic tricks.
            </p>
          </div>
        </div>

        {/* Achievement 8*/}
        <div style={styles.achievementCard}>
          <img src={A8} alt="Achievement 2" style={styles.achievementImage} />
          <div style={styles.achievementCardContent}>
            <h3 style={styles.achievementTitle}>Forage Program</h3>
            <p style={styles.achievementDescription}>
              Learned about some basic hashing related to hacking through Forage program held by Goldman Sachs.
            </p>
          </div>
        </div>

        {/* Add more achievements as needed */}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    background: 'linear-gradient(to right, #3498db, #6a1b9a, #000)', // Gradient background
    textAlign: 'center',
    color: '#ecf0f1', // Light text color
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#ffcc29', // Golden color
  },
  achievementsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  achievementCard: {
    width: '300px',
    margin: '20px',
    border: '1px solid #bdc3c7',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  achievementImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  },
  achievementCardContent: {
    padding: '15px',
  },
  achievementTitle: {
    color: '#ffcc29', // Golden color
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  achievementDescription: {
    fontSize: '1rem',
    color: '#ecf0f1', // Light text color
  },
};

export default Achievements;
