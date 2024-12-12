import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EndorsementForm1() {
  const { projectid } = useParams();
  const [formData, setFormData] = useState({
    projectid: projectid,
    projectTitle: "",
    projectLeader: "",
    infrastructureFacilities: false,
    transportManpower: false,
    equipmentProcurement: false,
    financialResponsibility: false,
    headOfInstitution: "",
    seal: "",
    date: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/endorsement-form/", formData);
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Endorsement Form (FORM-IA)</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Project Title</label>
          <input
            style={styles.input}
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            placeholder="Enter project title"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Project Leader/Coordinator</label>
          <input
            style={styles.input}
            type="text"
            name="projectLeader"
            value={formData.projectLeader}
            onChange={handleChange}
            placeholder="Enter project leader/coordinator"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Infrastructure Facilities Provided?</label>
          <input
            type="checkbox"
            name="infrastructureFacilities"
            checked={formData.infrastructureFacilities}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Accommodation, Transport, Manpower Provided?
          </label>
          <input
            type="checkbox"
            name="transportManpower"
            checked={formData.transportManpower}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Equipment Procurement Justified?
          </label>
          <input
            type="checkbox"
            name="equipmentProcurement"
            checked={formData.equipmentProcurement}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Financial Responsibility Assumed?
          </label>
          <input
            type="checkbox"
            name="financialResponsibility"
            checked={formData.financialResponsibility}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Head of the Institution</label>
          <input
            style={styles.input}
            type="text"
            name="headOfInstitution"
            value={formData.headOfInstitution}
            onChange={handleChange}
            placeholder="Enter name of the head"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Seal</label>
          <input
            style={styles.input}
            type="text"
            name="seal"
            value={formData.seal}
            onChange={handleChange}
            placeholder="Enter seal information"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Date</label>
          <input
            style={styles.input}
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Place</label>
          <input
            style={styles.input}
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Enter place"
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit Endorsement
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
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
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#474656",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default EndorsementForm1;
