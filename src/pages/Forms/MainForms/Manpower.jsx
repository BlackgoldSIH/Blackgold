import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ManpowerCostForm() {
  const { projectid } = useParams();
  const [formData, setFormData] = useState({
    projectid: projectid,
    projectName: "",
    projectCode: "",
    principalAgency: "",
    subAgency: "",
    manpowerDetails: [
      {
        designation: "",
        noOfPersons: 0,
        totalMonths: 0,
        salaryPerMonth: 0,
        totalSalary: 0,
        firstYear: 0,
        secondYear: 0,
        thirdYear: 0,
      },
    ],
  });

  const handleChange = (e, index = null, field = null) => {
    if (index !== null) {
      const updatedManpowerDetails = [...formData.manpowerDetails];
      const value = field === "designation" ? e.target.value : parseFloat(e.target.value) || 0;
      updatedManpowerDetails[index][field] = value;

      if (["noOfPersons", "totalMonths", "salaryPerMonth"].includes(field)) {
        updatedManpowerDetails[index].totalSalary =
          updatedManpowerDetails[index].noOfPersons *
          updatedManpowerDetails[index].totalMonths *
          updatedManpowerDetails[index].salaryPerMonth;
      }

      setFormData({ ...formData, manpowerDetails: updatedManpowerDetails });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      manpowerDetails: [
        ...formData.manpowerDetails,
        {
          designation: "",
          noOfPersons: 0,
          totalMonths: 0,
          salaryPerMonth: 0,
          totalSalary: 0,
          firstYear: 0,
          secondYear: 0,
          thirdYear: 0,
        },
      ],
    });
  };

  const handleRemoveRow = (index) => {
    const updatedManpowerDetails = [...formData.manpowerDetails];
    updatedManpowerDetails.splice(index, 1);
    setFormData({ ...formData, manpowerDetails: updatedManpowerDetails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add `projectid` to each manpowerDetail
      const payload = {
        ...formData,
        manpowerDetails: formData.manpowerDetails.map(detail => ({
          ...detail,
          project: formData.projectid, // Add project foreign key
        })),
      };
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/project-manpower/", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Error submitting form. Please check your inputs and try again.");
    }
  };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Details of Manpower Cost</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name of the Project</label>
          <input
            style={styles.input}
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Project Code</label>
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
          <label style={styles.label}>Principal Implementing Agency</label>
          <input
            style={styles.input}
            type="text"
            name="principalAgency"
            value={formData.principalAgency}
            onChange={handleChange}
            placeholder="Enter principal agency"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Sub Implementing Agency</label>
          <input
            style={styles.input}
            type="text"
            name="subAgency"
            value={formData.subAgency}
            onChange={handleChange}
            placeholder="Enter sub-agency"
          />
        </div>

        <div style={styles.tableContainer}>
          <h2 style={styles.subTitle}>Manpower Details</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Designation</th>
                <th style={styles.th}>No. of Persons</th>
                <th style={styles.th}>Total Months</th>
                <th style={styles.th}>Salary/Month (₹)</th>
                <th style={styles.th}>Total Salary (₹)</th>
                <th style={styles.th}>1st Year (₹)</th>
                <th style={styles.th}>2nd Year (₹)</th>
                <th style={styles.th}>3rd Year (₹)</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.manpowerDetails.map((manpower, index) => (
                <tr key={index}>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={manpower.designation}
                      onChange={(e) => handleChange(e, index, "designation")}
                      placeholder="Designation"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={manpower.noOfPersons}
                      onChange={(e) => handleChange(e, index, "noOfPersons")}
                      placeholder="No. of Persons"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={manpower.totalMonths}
                      onChange={(e) => handleChange(e, index, "totalMonths")}
                      placeholder="Total Months"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={manpower.salaryPerMonth}
                      onChange={(e) => handleChange(e, index, "salaryPerMonth")}
                      placeholder="Salary/Month"
                    />
                  </td>
                  <td style={styles.td}>{manpower.totalSalary.toFixed(2)}</td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={manpower.firstYear}
                      onChange={(e) => handleChange(e, index, "firstYear")}
                      placeholder="1st Year"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={manpower.secondYear}
                      onChange={(e) => handleChange(e, index, "secondYear")}
                      placeholder="2nd Year"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={manpower.thirdYear}
                      onChange={(e) => handleChange(e, index, "thirdYear")}
                      placeholder="3rd Year"
                    />
                  </td>
                  <td style={styles.td}>
                    <button
                      type="button"
                      style={styles.deleteButton}
                      onClick={() => handleRemoveRow(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" style={styles.addButton} onClick={handleAddRow}>
            Add Row
          </button>
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
  subTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
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
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  },
  tableContainer: {
   

    overflowX: "auto",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    padding: "8px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  addButton: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#474656",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#FF6347",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  submitButton: {
    backgroundColor: "#474656",
    color: "white",
    fontSize: "16px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ManpowerCostForm;