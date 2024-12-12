import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProjectCompletionReportForm() {
  const navigate =useNavigate();
  const { projectid } = useParams();
  const [formData, setFormData] = useState({
    projectid: projectid,
    title: "",
    projectCode: "",
    commencementDate: "",
    approvedCompletionDate: "",
    actualCompletionDate: "",
    objectives: "",
    workProgram: "",
    workDetails: "",
    objectivesFulfilled: "",
    reasonsForSlippage: "",
    furtherStudiesNeeded: "",
    conclusionsAndRecommendations: "",
    scopeOfApplication: "",
    associatedPersons: "",
    finalExpenditure: "",
    formIII: null,
    formIV: null,
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
        "http://127.0.0.1:8000/api/accounts/project-completion-report/",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
      const test = axios.get("http://127.0.0.1:8000/media/form_v_report.pdf")
      navigate("/invest-home")
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Project Completion Report</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>1. Project ID</label>
          <input
            style={styles.input}
            type="text"
            name="projectid"
            value={formData.projectid}
            disabled
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>2. Title of the Project</label>
          <input
            style={styles.input}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>3. Project Code</label>
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
          <label style={styles.label}>4. Date of Commencement</label>
          <input
            style={styles.input}
            type="date"
            name="commencementDate"
            value={formData.commencementDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>5. Approved Date of Completion</label>
          <input
            style={styles.input}
            type="date"
            name="approvedCompletionDate"
            value={formData.approvedCompletionDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>6. Actual Date of Completion</label>
          <input
            style={styles.input}
            type="date"
            name="actualCompletionDate"
            value={formData.actualCompletionDate}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>7. Objectives</label>
          <textarea
            style={styles.textarea}
            name="objectives"
            value={formData.objectives}
            onChange={handleChange}
            placeholder="Enter project objectives"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>8. Work Program</label>
          <textarea
            style={styles.textarea}
            name="workProgram"
            value={formData.workProgram}
            onChange={handleChange}
            placeholder="Enter work program details"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>9. Work Details</label>
          <textarea
            style={styles.textarea}
            name="workDetails"
            value={formData.workDetails}
            onChange={handleChange}
            placeholder="Provide details of work done"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>10. Objectives Fulfilled</label>
          <textarea
            style={styles.textarea}
            name="objectivesFulfilled"
            value={formData.objectivesFulfilled}
            onChange={handleChange}
            placeholder="Explain how objectives were fulfilled"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>11. Reasons for Slippage (If Any)</label>
          <textarea
            style={styles.textarea}
            name="reasonsForSlippage"
            value={formData.reasonsForSlippage}
            onChange={handleChange}
            placeholder="Explain reasons for slippage"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>12. Further Studies Needed</label>
          <textarea
            style={styles.textarea}
            name="furtherStudiesNeeded"
            value={formData.furtherStudiesNeeded}
            onChange={handleChange}
            placeholder="Specify the need for further studies"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>13. Conclusions and Recommendations</label>
          <textarea
            style={styles.textarea}
            name="conclusionsAndRecommendations"
            value={formData.conclusionsAndRecommendations}
            onChange={handleChange}
            placeholder="Provide conclusions and recommendations"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>14. Scope of Application</label>
          <textarea
            style={styles.textarea}
            name="scopeOfApplication"
            value={formData.scopeOfApplication}
            onChange={handleChange}
            placeholder="Explain the scope of application"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>15. Associated Persons</label>
          <textarea
            style={styles.textarea}
            name="associatedPersons"
            value={formData.associatedPersons}
            onChange={handleChange}
            placeholder="List persons associated with the project"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>16. Final Expenditure</label>
          <textarea
            style={styles.textarea}
            name="finalExpenditure"
            value={formData.finalExpenditure}
            onChange={handleChange}
            placeholder="Provide final expenditure details"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>17. Upload Form-III</label>
          <input
            style={styles.input}
            type="file"
            name="formIII"
            onChange={(e) => handleFileChange(e, "formIII")}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>18. Upload Form-IV</label>
          <input
            style={styles.input}
            type="file"
            name="formIV"
            onChange={(e) => handleFileChange(e, "formIV")}
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
  },
  textarea: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s ease",
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

export default ProjectCompletionReportForm;
