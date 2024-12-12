import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ExpenditureStatementForm() {
    const {projectid} = useParams();
  const [formData, setFormData] = useState({
    projectid : projectid,
    projectName: "",
    projectCode: "",
    companyName: "",
    statementPeriod: "",
    items: [
      { name: "Land & Building", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "Capital Equipment", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "Manpower", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "Consumables", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "TA/DA", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "Contingencies", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "Attending/Organizing Seminar", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 },
      { name: "Others", approvedCost: 0, sanctionedProvision: 0, expenditureUpToPreviousYear: 0, expenditureUpToPreviousQuarter: 0, expenditureInCurrentQuarter: 0, progressiveExpenditure: 0 }
    ],
  });

  const handleChange = (e, index, field) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;

    // Calculate the progressive expenditure
    updatedItems[index].progressiveExpenditure =
      updatedItems[index].expenditureUpToPreviousYear +
      updatedItems[index].expenditureUpToPreviousQuarter +
      updatedItems[index].expenditureInCurrentQuarter;

    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quarterly Expenditure Statement</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Project Name</label>
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
          <label style={styles.label}>Name of Company/Institute</label>
          <input
            style={styles.input}
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Statement Period</label>
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
                <th style={styles.th}>Sanctioned Provision</th>
                <th style={styles.th}>Expenditure up to Previous Year</th>
                <th style={styles.th}>Expenditure up to Previous Quarter</th>
                <th style={styles.th}>Expenditure in Current Quarter</th>
                <th style={styles.th}>Progressive Expenditure</th>
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
                      value={item.sanctionedProvision}
                      onChange={(e) => handleChange(e, index, "sanctionedProvision")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.expenditureUpToPreviousYear}
                      onChange={(e) => handleChange(e, index, "expenditureUpToPreviousYear")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.expenditureUpToPreviousQuarter}
                      onChange={(e) => handleChange(e, index, "expenditureUpToPreviousQuarter")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.expenditureInCurrentQuarter}
                      onChange={(e) => handleChange(e, index, "expenditureInCurrentQuarter")}
                    />
                  </td>
                  <td style={styles.td}>{item.progressiveExpenditure.toFixed(2)}</td>
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

export default ExpenditureStatementForm;