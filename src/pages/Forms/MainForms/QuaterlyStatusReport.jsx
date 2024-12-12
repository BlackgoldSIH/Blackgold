import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function QuarterlyStatusReportForm() {
  const { projectid } = useParams();
  const [formData, setFormData] = useState({
    projectName: "",
    projectCode: "",
    progress: "",
    principalImplementingAgency: "",
    subImplementingAgency: "",
    projectCoordinator: "",
    startDate: "",
    approvedCompletionDate: "",
    workDone: "",
    slippage: "",
    correctiveActions: "",
    workNextQuarter: "",
    barChart: null,
    formIII: null,
    formIV: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      formPayload.append("projectName", formData.projectName);
      formPayload.append("projectCode", formData.projectCode);
      formPayload.append("progress", formData.progress);
      formPayload.append("principalImplementingAgency", formData.principalImplementingAgency);
      formPayload.append("subImplementingAgency", formData.subImplementingAgency);
      formPayload.append("projectCoordinator", formData.projectCoordinator);
      formPayload.append("startDate", formData.startDate);
      formPayload.append("approvedCompletionDate", formData.approvedCompletionDate);
      formPayload.append("workDone", formData.workDone);
      formPayload.append("slippage", formData.slippage);
      formPayload.append("correctiveActions", formData.correctiveActions);
      formPayload.append("workNextQuarter", formData.workNextQuarter);
      formPayload.append("barChart", formData.barChart);
      formPayload.append("formIII", formData.formIII);
      formPayload.append("formIV", formData.formIV);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/quarterly-status-report/",
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
      <h1 style={styles.title}>Quarterly Status Report for S&T Project</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>1. Name of the Project with Project Code</label>
          <input
            style={styles.input}
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>2. Progress for the Quarter Ending</label>
          <textarea
            style={styles.input}
            name="progress"
            placeholder="Progress"
            value={formData.progress}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>3. Principal Implementing Agency(s)</label>
          <input
            style={styles.input}
            type="text"
            name="principalImplementingAgency"
            placeholder="Implementing Agency"
            value={formData.principalImplementingAgency}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>4. Sub-Implementing Agency(s)</label>
          <input
            style={styles.input}
            type="text"
            name="subImplementingAgency"
            placeholder="Sub Implementing Agency"
            value={formData.subImplementingAgency}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>5. Project Coordinator/Leader/Principal Investigator</label>
          <input
            style={styles.input}
            type="text"
            name="projectCoordinator"
            placeholder="Project Coordinator"
            value={formData.projectCoordinator}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>6. Date of Commencement</label>
          <input
            style={styles.input}
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>7. Approved Date of Completion</label>
          <input
            style={styles.input}
            type="date"
            name="approvedCompletionDate"
            value={formData.approvedCompletionDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>8. Bar Chart of Activities</label>
          <input
            style={styles.input}
            type="file"
            name="barChart"
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>9. Details of Work Done During the Quarter</label>
          <textarea
            style={styles.input}
            name="workDone"
            placeholder="Details"
            value={formData.workDone}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>10. Slippage, if any, and Reasons Thereof</label>
          <textarea
            style={styles.input}
            name="slippage"
            placeholder="Slippage"
            value={formData.slippage}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>11. Corrective Actions Taken</label>
          <textarea
            style={styles.input}
            name="correctiveActions"
            placeholder="Corrective Actions"
            value={formData.correctiveActions}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>12. Work Expected to be Done in Next Quarter</label>
          <textarea
            style={styles.input}
            name="workNextQuarter"
            placeholder="Work Expected"
            value={formData.workNextQuarter}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>13. Quarterly Expenditure Statements (Forms-III & IV)</label>
          <input
            style={styles.input}
            type="file"
            name="formIII"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            type="file"
            name="formIV"
            onChange={handleChange}
          />
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
    marginBottom: "20px",
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

export default QuarterlyStatusReportForm;
