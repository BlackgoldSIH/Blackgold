import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EquipmentDetailsForm() {
    const {projectid} = useParams();
  const [formData, setFormData] = useState({
    projectid: projectid,
    projectName: "",
    projectCode: "",
    principalAgency: "",
    subAgency: "",
    equipmentDetails: [
      {
        equipmentDetails: "",
        noOfSets: 0,
        makeModel: "",
        yearOfProcurement: "",
        procuredProject: "",
        status: "",
        remarks: "",
      },
    ],
    justification: "",
  });

  const handleChange = (e, index = null, field = null) => {
    if (index !== null) {
      const updatedEquipmentDetails = [...formData.equipmentDetails];
      updatedEquipmentDetails[index][field] = e.target.value;
      setFormData({ ...formData, equipmentDetails: updatedEquipmentDetails });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      equipmentDetails: [
        ...formData.equipmentDetails,
        {
          equipmentDetails: "",
          noOfSets: 0,
          makeModel: "",
          yearOfProcurement: "",
          procuredProject: "",
          status: "",
          remarks: "",
        },
      ],
    });
  };

  const handleRemoveRow = (index) => {
    const updatedEquipmentDetails = [...formData.equipmentDetails];
    updatedEquipmentDetails.splice(index, 1);
    setFormData({ ...formData, equipmentDetails: updatedEquipmentDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Details of Equipment Procured Under S&T Scheme
      </h1>

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
          <h2 style={styles.subTitle}>Equipment Details</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Details of Equipment</th>
                <th style={styles.th}>No. of Sets</th>
                <th style={styles.th}>Make & Model</th>
                <th style={styles.th}>Year of Procurement</th>
                <th style={styles.th}>Procured Project</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Remarks</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.equipmentDetails.map((equipment, index) => (
                <tr key={index}>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={equipment.equipmentDetails}
                      onChange={(e) =>
                        handleChange(e, index, "equipmentDetails")
                      }
                      placeholder="Equipment Details"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={equipment.noOfSets}
                      onChange={(e) => handleChange(e, index, "noOfSets")}
                      placeholder="No. of Sets"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={equipment.makeModel}
                      onChange={(e) => handleChange(e, index, "makeModel")}
                      placeholder="Make & Model"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={equipment.yearOfProcurement}
                      onChange={(e) =>
                        handleChange(e, index, "yearOfProcurement")
                      }
                      placeholder="Year"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={equipment.procuredProject}
                      onChange={(e) =>
                        handleChange(e, index, "procuredProject")
                      }
                      placeholder="Procured Project"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={equipment.status}
                      onChange={(e) => handleChange(e, index, "status")}
                      placeholder="Status"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={equipment.remarks}
                      onChange={(e) => handleChange(e, index, "remarks")}
                      placeholder="Remarks"
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

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Justification for Procurement of Additional Equipment
          </label>
          <textarea
            style={styles.input}
            name="justification"
            value={formData.justification}
            onChange={handleChange}
            placeholder="Provide justification"
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

export default EquipmentDetailsForm;