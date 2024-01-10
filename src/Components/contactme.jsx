// components/ContactMe.js
import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.subHeading}>Have a question or want to work together? Feel free to reach out!</p>

      <form style={styles.form}>
        <div style={styles.formRow}>
          <label style={styles.label} htmlFor="name">Your Name:</label>
          <input style={styles.input} type="text" id="name" name="name" required />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label} htmlFor="email">Your Email:</label>
          <input style={styles.input} type="email" id="email" name="email" required />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label} htmlFor="message">Your Message:</label>
          <textarea style={styles.input} id="message" name="message" rows="4" required></textarea>
        </div>

        <button style={styles.submitButton} type="submit">Send Message</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    background: '#ffffff', // White background
    textAlign: 'center',
    color: '#333', // Dark text color
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#6a1b9a', // Purple color
  },
  subHeading: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  formRow: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center',
  },
  label: {
    flex: '1',
    display: 'block',
    fontSize: '1rem',
    marginRight: '10px',
    textAlign: 'left',
    color: '#333', // Dark text color
  },
  input: {
    flex: '2',
    width: '100%',
    padding: '10px',
    border: '1px solid #bdc3c7',
    borderRadius: '5px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff', // White text color
    background: '#6a1b9a', // Purple button background
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ContactMe;
