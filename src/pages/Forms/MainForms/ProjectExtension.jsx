import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ExtensionOfProjectDurationForm() {
  const { projectid } = useParams();
  const [formData, setFormData] = useState({
    projectid: projectid,
    projectName: "",
    projectCode: "",
    implementingAgency: "",
    projectLeader: "",
    startDate: "",
    scheduledCompletionDate: "",
    approvedObjectives: "",
    approvedWorkProgram: "",
    workDetails: "",
    revisedBarChart: null,
    extensionReason: "",
    projectCost: 0,
    actualExpenditure: 0,
    formIII: null,
    formIV: null,
    formV: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/project-extension-report/",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Extension of Project Duration</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>1. Name of the Project</label>
          <input
            style={styles.input}
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name"
          />
          <label style={styles.label}>Code of the Project</label>
          <input
            style={styles.input}
            type="text"
            name="projectCode"
            value={formData.projectCode}
            onChange={handleChange}
            placeholder="Enter project code"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>2. Name of Principal Implementing / Sub-implementing Agency</label>
          <input
            style={styles.input}
            type="text"
            name="implementingAgency"
            value={formData.implementingAgency}
            onChange={handleChange}
            placeholder="Enter implementing agency name"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>3. Name of Project Leader/Coordinator/Principal Investigator</label>
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
          <label style={styles.label}>4. Date of Start of the Project</label>
          <input
            style={styles.input}
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>5. Scheduled Date of Completion of the Project</label>
          <input
            style={styles.input}
            type="date"
            name="scheduledCompletionDate"
            value={formData.scheduledCompletionDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>6. Approved Objective(s)</label>
          <textarea
            style={styles.input}
            name="approvedObjectives"
            value={formData.approvedObjectives}
            onChange={handleChange}
            placeholder="Enter approved objectives"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>7. Approved Work Programme Along With Schedule</label>
          <textarea
            style={styles.input}
            name="approvedWorkProgram"
            value={formData.approvedWorkProgram}
            onChange={handleChange}
            placeholder="Enter approved work program"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>8. Details of the Work Done</label>
          <textarea
            style={styles.input}
            name="workDetails"
            value={formData.workDetails}
            onChange={handleChange}
            placeholder="Enter work details"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>9. Revised Bar Chart / PERT Network</label>
          <div style={styles.fileUploadWrapper}>
            <label style={styles.fileLabel} htmlFor="revisedBarChart">
              {formData.revisedBarChart ? formData.revisedBarChart.name : "Choose Revised Bar Chart"}
            </label>
            <input
              style={styles.fileInput}
              type="file"
              id="revisedBarChart"
              name="revisedBarChart"
              onChange={(e) => handleFileChange(e, "revisedBarChart")}
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>10. Time Extension Proposed and Reasons for Seeking the Extension</label>
          <textarea
            style={styles.input}
            name="extensionReason"
            value={formData.extensionReason}
            onChange={handleChange}
            placeholder="Enter reasons for extension"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>11. Total Cost of the Project and Actual Expenditure Incurred</label>
          <input
            style={styles.input}
            type="number"
            name="projectCost"
            value={formData.projectCost}
            onChange={handleChange}
            placeholder="Enter total cost"
          />
          <input
            style={styles.input}
            type="number"
            name="actualExpenditure"
            value={formData.actualExpenditure}
            onChange={handleChange}
            placeholder="Enter actual expenditure"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Final Expenditure Statement (Forms III, IV & V)</label>
          <div style={styles.fileUploadWrapper}>
            <label style={styles.fileLabel} htmlFor="formIII">
              {formData.formIII ? formData.formIII.name : "Choose Form-III"}
            </label>
            <input
              style={styles.fileInput}
              type="file"
              id="formIII"
              name="formIII"
              onChange={(e) => handleFileChange(e, "formIII")}
            />
          </div>
          <div style={styles.fileUploadWrapper}>
            <label style={styles.fileLabel} htmlFor="formIV">
              {formData.formIV ? formData.formIV.name : "Choose Form-IV"}
            </label>
            <input
              style={styles.fileInput}
              type="file"
              id="formIV"
              name="formIV"
              onChange={(e) => handleFileChange(e, "formIV")}
            />
          </div>
          <div style={styles.fileUploadWrapper}>
            <label style={styles.fileLabel} htmlFor="formV">
              {formData.formV ? formData.formV.name : "Choose Form-V"}
            </label>
            <input
              style={styles.fileInput}
              type="file"
              id="formV"
              name="formV"
              onChange={(e) => handleFileChange(e, "formV")}
            />
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
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
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#555",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s ease",
    marginBottom: "10px",
  },
  fileUploadWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  fileInput: {
    display: "none",
  },
  fileLabel: {
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#e9e9e9",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    textAlign: "center",
    width: "auto",
    transition: "background-color 0.3s ease",
  },
  submitButton: {
    backgroundColor: "#474656",
    color: "white",
    fontSize: "16px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    alignSelf: "center",
    transition: "background-color 0.3s ease",
  },
};

export default ExtensionOfProjectDurationForm;
