import React, { useState } from "react";

function SecurityPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match.");
      return;
    }
    // Submit the password change request to the backend
    console.log("Password Change Request Submitted:", { currentPassword, newPassword });
    alert("Password successfully updated!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const toggle2FA = () => {
    // Simulate enabling/disabling 2FA
    setIs2FAEnabled(!is2FAEnabled);
    alert(`Two-Factor Authentication ${!is2FAEnabled ? "Enabled" : "Disabled"}`);
  };

  const handleReportIssue = () => {
    // Redirect or open a modal to report a security issue
    alert("Redirecting to the Security Issue Reporting page...");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Security Settings</h1>

      {/* Password Change Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Change Password</h2>
        <form onSubmit={handlePasswordChange} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Current Password</label>
            <input
              type="password"
              style={styles.input}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>New Password</label>
            <input
              type="password"
              style={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm New Password</label>
            <input
              type="password"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Update Password
          </button>
        </form>
      </section>

      {/* Two-Factor Authentication Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Two-Factor Authentication</h2>
        <p style={styles.description}>
          Two-factor authentication adds an extra layer of security to your account.
        </p>
        <button onClick={toggle2FA} style={styles.toggleButton}>
          {is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
        </button>
      </section>

      {/* Session Management Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Session Management</h2>
        <p style={styles.description}>
          View active sessions and manage devices signed into your account.
        </p>
        <button onClick={() => alert("Redirecting to session management...")} style={styles.toggleButton}>
          Manage Sessions
        </button>
      </section>

      {/* Report Security Issue Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Report a Security Issue</h2>
        <p style={styles.description}>
          If you encounter a security issue, please report it to us immediately.
        </p>
        <button onClick={handleReportIssue} style={styles.toggleButton}>
          Report an Issue
        </button>
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
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
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
  toggleButton: {
    padding: "10px 20px",
    backgroundColor: "#474656",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default SecurityPage;