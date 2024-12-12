import React, { useState } from "react";

function HelpAndSupport() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // Simulating form submission
    console.log("Support Form Submitted:", { name, email, message });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // Reset form submission status after 5 seconds
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Help & Support</h1>

      {/* FAQ Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faq}>
          <details style={styles.details}>
            <summary style={styles.summary}>How do I reset my password?</summary>
            <p style={styles.answer}>
              To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your registered email address.
            </p>
          </details>
          <details style={styles.details}>
            <summary style={styles.summary}>How can I track my task status?</summary>
            <p style={styles.answer}>
              Navigate to the "Task Completion" page, enter your Task ID, and view the current status of your task.
            </p>
          </details>
          <details style={styles.details}>
            <summary style={styles.summary}>How do I contact support?</summary>
            <p style={styles.answer}>
              You can fill out the contact form below or email us directly at support@example.com.
            </p>
          </details>
        </div>
      </section>

      {/* Contact Form */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Support</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              style={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            {isSubmitted ? "Submitted!" : "Submit"}
          </button>
        </form>
      </section>

      {/* Additional Resources */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Additional Resources</h2>
        <ul style={styles.resourceList}>
          <li><a href="/docs" style={styles.link}>Documentation</a></li>
          <li><a href="/tutorials" style={styles.link}>Tutorials</a></li>
          <li><a href="/community" style={styles.link}>Community Forums</a></li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#474656",
    marginBottom: "15px",
  },
  faq: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  details: {
    backgroundColor: "#eaf7ff",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
  },
  summary: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  answer: {
    fontSize: "14px",
    marginTop: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  },
  textarea: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    resize: "vertical",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#474656",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    alignSelf: "center",
  },
  resourceList: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#474656",
    fontSize: "16px",
  },
};

export default HelpAndSupport;