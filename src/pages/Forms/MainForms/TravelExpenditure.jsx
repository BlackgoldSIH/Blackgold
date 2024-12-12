import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TravelExpenditureForm() {
  const { projectid } = useParams();
  const [formData, setFormData] = useState({
    projectid: projectid,
    projectName: "",
    projectCode: "",
    principalAgency: "",
    subAgency: "",
    travelDetails: [
      {
        designation: "",
        fromPlace: "",
        toPlace: "",
        distance: 0,
        modeFare: 0,
        noOfTrips: 0,
        travelExpense: 0,
        noOfDays: 0,
        daRate: 0,
        totalDA: 0,
        totalTADA: 0,
      },
    ],
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e, index = null, field = null) => {
    if (index !== null) {
      const updatedTravelDetails = [...formData.travelDetails];
      const value = parseFloat(e.target.value) || 0;
      updatedTravelDetails[index][field] = value;

      if (["modeFare", "noOfTrips"].includes(field)) {
        updatedTravelDetails[index].travelExpense =
          updatedTravelDetails[index].modeFare *
          updatedTravelDetails[index].noOfTrips;
      }

      if (["noOfDays", "daRate"].includes(field)) {
        updatedTravelDetails[index].totalDA =
          updatedTravelDetails[index].noOfDays *
          updatedTravelDetails[index].daRate;
      }

      updatedTravelDetails[index].totalTADA =
        updatedTravelDetails[index].travelExpense +
        updatedTravelDetails[index].totalDA;

      setFormData({ ...formData, travelDetails: updatedTravelDetails });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      travelDetails: [
        ...formData.travelDetails,
        {
          designation: "",
          fromPlace: "",
          toPlace: "",
          distance: 0,
          modeFare: 0,
          noOfTrips: 0,
          travelExpense: 0,
          noOfDays: 0,
          daRate: 0,
          totalDA: 0,
          totalTADA: 0,
        },
      ],
    });
  };

  const handleRemoveRow = (index) => {
    const updatedTravelDetails = [...formData.travelDetails];
    updatedTravelDetails.splice(index, 1);
    setFormData({ ...formData, travelDetails: updatedTravelDetails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/project-travel/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage("Data submitted successfully!");
      console.log("Response:", response.data);
      alert("Form submited")
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      setResponseMessage("Failed to submit data. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Details of Travel Expenditure (TA/DA)</h1>

      {responseMessage && <p style={styles.responseMessage}>{responseMessage}</p>}

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
          <h2 style={styles.subTitle}>Travel Details</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Designation</th>
                <th style={styles.th}>From Place</th>
                <th style={styles.th}>To Place</th>
                <th style={styles.th}>Distance (Km)</th>
                <th style={styles.th}>Fare/Mode (₹)</th>
                <th style={styles.th}>No. of Trips</th>
                <th style={styles.th}>Travel Expense (₹)</th>
                <th style={styles.th}>No. of Days</th>
                <th style={styles.th}>DA Rate/Day (₹)</th>
                <th style={styles.th}>Total DA (₹)</th>
                <th style={styles.th}>Total TA+DA (₹)</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.travelDetails.map((travel, index) => (
                <tr key={index}>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={travel.designation}
                      onChange={(e) =>
                        handleChange(e, index, "designation")
                      }
                      placeholder="Designation"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={travel.fromPlace}
                      onChange={(e) => handleChange(e, index, "fromPlace")}
                      placeholder="From Place"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="text"
                      value={travel.toPlace}
                      onChange={(e) => handleChange(e, index, "toPlace")}
                      placeholder="To Place"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={travel.distance}
                      onChange={(e) => handleChange(e, index, "distance")}
                      placeholder="Distance"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={travel.modeFare}
                      onChange={(e) => handleChange(e, index, "modeFare")}
                      placeholder="Fare"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={travel.noOfTrips}
                      onChange={(e) => handleChange(e, index, "noOfTrips")}
                      placeholder="Trips"
                    />
                  </td>
                  <td style={styles.td}>{travel.travelExpense.toFixed(2)}</td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={travel.noOfDays}
                      onChange={(e) => handleChange(e, index, "noOfDays")}
                      placeholder="Days"
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={styles.input}
                      type="number"
                      value={travel.daRate}
                      onChange={(e) => handleChange(e, index, "daRate")}
                      placeholder="DA Rate"
                    />
                  </td>
                  <td style={styles.td}>{travel.totalDA.toFixed(2)}</td>
                  <td style={styles.td}>{travel.totalTADA.toFixed(2)}</td>
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

export default TravelExpenditureForm;