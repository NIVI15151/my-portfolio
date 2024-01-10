// components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.skillsContainer}>
        {/* Skill 1 */}
        <div style={styles.skillRow}>
          <div style={styles.skill}>
            <span style={styles.skillName}>HTML</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>70%</div>
              </div>
            </div>
          </div>

          {/* Skill 2 */}
          <div style={styles.skill}>
            <span style={styles.skillName}>CSS</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>50%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skill 3 */}
        <div style={styles.skillRow}>
          <div style={styles.skill}>
            <span style={styles.skillName}>Javascript</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>50%</div>
              </div>
            </div>
          </div>

          {/* Skill 4 */}
          <div style={styles.skill}>
            <span style={styles.skillName}>PHP</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>60%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skill 5 */}
        <div style={styles.skillRow}>
          <div style={styles.skill}>
            <span style={styles.skillName}>C</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>90%</div>
              </div>
            </div>
          </div>

          {/* Skill 6 */}
          <div style={styles.skill}>
            <span style={styles.skillName}>C++</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>85%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill 1 */}
        <div style={styles.skillRow}>
          <div style={styles.skill}>
            <span style={styles.skillName}>SQL</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>80%</div>
              </div>
            </div>
          </div>

          {/* Skill 2 */}
          <div style={styles.skill}>
            <span style={styles.skillName}>UI/UX</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>60%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill 1 */}
        <div style={styles.skillRow}>
          <div style={styles.skill}>
            <span style={styles.skillName}>JAVA</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>40%</div>
              </div>
            </div>
          </div>

          {/* Skill 2 */}
          <div style={styles.skill}>
            <span style={styles.skillName}>PYTHON</span>
            <div style={styles.skillLevel}>
              <div style={styles.skillBar}>
                <div style={styles.skillLevelIndicator}>50%</div>
              </div>
            </div>
          </div>
        </div>
        
        
        

        {/* Add more skills as needed */}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#ffffff', // White background
    textAlign: 'center',
    color: '#333', // Dark text color
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#6a1b9a', // Purple color
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  skillRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  skill: {
    marginRight: '20px',
    width: '200px', // Adjust the width of each skill block
  },
  skillName: {
    marginBottom: '10px',
    color: '#3498db', // Blue color for skill names
  },
  skillLevel: {
    height: '20px',
    backgroundColor: '#3498db', // Blue skill bar
    borderRadius: '10px',
    overflow: 'hidden',
  },
  skillBar: {
    width: '100%',
    height: '100%',
  },
  skillLevelIndicator: {
    height: '100%',
    width: '80%', // Adjust the width based on skill level
    backgroundColor: '#ecf0f1', // Light background for the skill level
    color: '#333', // Dark text color
    textAlign: 'center',
    lineHeight: '20px',
    borderRadius: '10px',
  },
};

export default Skills;
