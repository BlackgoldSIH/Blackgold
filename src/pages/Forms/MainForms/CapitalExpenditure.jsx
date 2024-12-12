import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CapitalEquipmentExpenditureForm() {
    const {projectid} = useParams();
  const [formData, setFormData] = useState({
    projectid:projectid,
    projectName: "",
    projectCode: "",
    companyName: "",
    statementPeriod: "",
    items: [
      {
        name: "",
        supplier: "",
        units: 0,
        unitValue: 0,
        totalValue: 0,
        approvedCost: 0,
        progressiveExpenditure: 0,
      },
    ],
  });

  const handleChange = (e, index, field) => {
    const value = parseFloat(e.target.value) || 0;
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;

    // Calculate total value and progressive expenditure
    if (field === "units" || field === "unitValue") {
      updatedItems[index].totalValue =
        updatedItems[index].units * updatedItems[index].unitValue;
    }

    // Progressive expenditure calculation (you can adjust this as per your actual logic)
    updatedItems[index].progressiveExpenditure =
      updatedItems[index].approvedCost + updatedItems[index].totalValue;

    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {
          name: "",
          supplier: "",
          units: 0,
          unitValue: 0,
          totalValue: 0,
          approvedCost: 0,
          progressiveExpenditure: 0,
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quarterly Expenditure Statement on Capital Equipment</h1>

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
                <th style={styles.th}>Name of Equipment/Assets</th>
                <th style={styles.th}>Supplier</th>
                <th style={styles.th}>No. of Units</th>
                <th style={styles.th}>Unit Value</th>
                <th style={styles.th}>Total Value</th>
                <th style={styles.th}>Total Approved Cost</th>
                <th style={styles.th}>Progressive Capital Expenditure</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={item.name}
                      onChange={(e) => setFormData({ ...formData, items: formData.items.map((itm, idx) => idx === index ? { ...itm, name: e.target.value } : itm) })}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={item.supplier}
                      onChange={(e) => setFormData({ ...formData, items: formData.items.map((itm, idx) => idx === index ? { ...itm, supplier: e.target.value } : itm) })}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.units}
                      onChange={(e) => handleChange(e, index, "units")}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.unitValue}
                      onChange={(e) => handleChange(e, index, "unitValue")}
                    />
                  </td>
                  <td style={styles.td}>{item.totalValue.toFixed(2)}</td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={item.approvedCost}
                      onChange={(e) => handleChange(e, index, "approvedCost")}
                    />
                  </td>
                  <td style={styles.td}>{item.progressiveExpenditure.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="button" onClick={handleAddRow} style={styles.addRowButton}>
          Add Row
        </button>

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
  addRowButton: {
    backgroundColor: "#474656",
    color: "white",
    fontSize: "16px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
};

export default CapitalEquipmentExpenditureForm;