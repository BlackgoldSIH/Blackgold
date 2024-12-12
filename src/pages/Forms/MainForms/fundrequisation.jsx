import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FundRequirementForm() {
  const navigate = useNavigate();
  const {projectid} = useParams();
  const [formData, setFormData] = useState({
    projectid : projectid,
    projectName: "",
    projectCode: "",
    companyName: "",
    statementPeriod: "",
    items: [
      { name: "Land & Building", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 },
      { name: "Capital Equipment", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 },
      { name: "Manpower", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 },
      { name: "Consumables", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 },
      { name: "Travel", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 },
      { name: "Contingencies", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 },
      { name: "Attending/Organizing workshop/seminar", approvedCost: 0, fundReceived: 0, interestEarned: 0, expenditureIncurred: 0, fundProvision: 0, fundRequired: 0, balanceFund: 0 }
    ],
  });

  const handleChange = (e, index, field) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    updatedItems[index].balanceFund =
      updatedItems[index].fundReceived +
      updatedItems[index].interestEarned -
      updatedItems[index].expenditureIncurred;

    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const response = await axios.post("http://127.0.0.1:8000/api/accounts/project-fund/",formData);
    console.log(response)
    const test = axios.get("http://127.0.0.1:8000/media/project_proposal.pdf")
    navigate("/invest-home")
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Statement of Fund Requirement</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name of the Project</label>
          <input
            style={styles.input}
            type="text"
            value={formData.projectName}
            onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Project Code</label>
          <input
            style={styles.input}
            type="text"
            value={formData.projectCode}
            onChange={(e) => setFormData({ ...formData, projectCode: e.target.value })}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Name of the Company/Institution</label>
          <input
            style={styles.input}
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Statement Period (Year/Period)</label>
          <input
            style={styles.input}
            type="text"
            value={formData.statementPeriod}
            onChange={(e) => setFormData({ ...formData, statementPeriod: e.target.value })}
          />
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Total Approved Cost</th>
                <th style={styles.th}>Total Fund Received</th>
                <th style={styles.th}>Interest Earned</th>
                <th style={styles.th}>Expenditure Incurred</th>
                <th style={styles.th}>Balance Fund Available</th>
                <th style={styles.th}>Fund Provision</th>
                <th style={styles.th}>Fund Required</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.approvedCost}
                      onChange={(e) => handleChange(e, index, "approvedCost")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.fundReceived}
                      onChange={(e) => handleChange(e, index, "fundReceived")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.interestEarned}
                      onChange={(e) => handleChange(e, index, "interestEarned")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.expenditureIncurred}
                      onChange={(e) => handleChange(e, index, "expenditureIncurred")}
                    />
                  </td>
                  <td style={styles.td}>{item.balanceFund.toFixed(2)}</td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.fundProvision}
                      onChange={(e) => handleChange(e, index, "fundProvision")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.fundRequired}
                      onChange={(e) => handleChange(e, index, "fundRequired")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  inputFocus: {
    borderColor: "#474656",
  },
  tableContainer: {
    overflowX: "auto",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    padding: "12px",
    backgroundColor: "#474656",
    border: "1px solid #ddd",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  td: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
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
  submitButtonHover: {
    backgroundColor: "#3c3d44",
  },
};

export default FundRequirementForm;