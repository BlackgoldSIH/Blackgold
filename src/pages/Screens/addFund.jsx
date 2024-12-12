import React, { useState, useEffect } from "react";
import axios from "axios";

function AddFund() {
  const [projects, setProjects] = useState([]); // Project list from backend
  const [investigators, setInvestigators] = useState([]); // Investigator list from backend
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedInvestigator, setSelectedInvestigator] = useState("");
  const [fundAmount, setFundAmount] = useState(0);
  const [gstRate, setGstRate] = useState(18); // Default GST rate
  const [otherTaxRate, setOtherTaxRate] = useState(5); // Default Other Tax rate
  const [gst, setGst] = useState(0);
  const [otherTaxes, setOtherTaxes] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  // Fetch projects and investigators from backend
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/accounts/projects/0/`)
      .then((response) => {
        console.log(response.data.data);
        setProjects(response.data.data);
      });

    axios.get("http://127.0.0.1:8000/api/accounts/getlist").then((response) => {
      setInvestigators(response.data.data); // Adjust to match API structure
    });
  }, []);

  const calculateTaxes = (fund) => {
    const gstValue = (fund * gstRate) / 100;
    const otherTaxValue = (fund * otherTaxRate) / 100;
    const remaining = fund - gstValue - otherTaxValue;
    setGst(gstValue);
    setOtherTaxes(otherTaxValue);
    setRemainingAmount(remaining);
  };

  const handleFundChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setFundAmount(value);
    calculateTaxes(value);
  };

  const handleGstChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setGstRate(value);
    calculateTaxes(fundAmount);
  };

  const handleOtherTaxChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setOtherTaxRate(value);
    calculateTaxes(fundAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProject || !selectedInvestigator || fundAmount <= 0) {
      alert("Please fill all fields correctly.");
      return;
    }

    // Submit the data to the backend
    const payload = {
      project: selectedProject,
      investigator: selectedInvestigator,
      fundAmount,
      gstRate,
      otherTaxRate,
      gst,
      otherTaxes,
      remainingAmount,
    };
    console.log(payload)
    const response = await axios.post("http://127.0.0.1:8000/api/accounts/addFund",payload)
    console.log("Payload to be submitted: ", response);
    alert("Fund added successfully!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add Fund</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Project Selector */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Project ID</label>
          <select
            style={styles.select}
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">-- Select Project --</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>

        {/* Investigator Selector */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Investigator</label>
          <select
            style={styles.select}
            value={selectedInvestigator}
            onChange={(e) => setSelectedInvestigator(e.target.value)}
          >
            <option value="">-- Select Investigator --</option>
            {investigators.map((investigator) => (
              <option key={investigator.id} value={investigator.id}>
                {investigator.username}
              </option>
            ))}
          </select>
        </div>

        {/* Fund Input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Enter Fund Amount</label>
          <input
            type="number"
            style={styles.input}
            value={fundAmount}
            onChange={handleFundChange}
          />
        </div>

        {/* Tax Rate Inputs */}
        <div style={styles.formGroup}>
          <label style={styles.label}>GST Rate (%)</label>
          <input
            type="number"
            style={styles.input}
            value={gstRate}
            onChange={handleGstChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Other Tax Rate (%)</label>
          <input
            type="number"
            style={styles.input}
            value={otherTaxRate}
            onChange={handleOtherTaxChange}
          />
        </div>

        {/* Calculated Fields */}
        <div style={styles.calculationContainer}>
          <div style={styles.calculationItem}>
            <label style={styles.label}>GST ({gstRate}%)</label>
            <p style={styles.value}>{gst.toFixed(2)}</p>
          </div>
          <div style={styles.calculationItem}>
            <label style={styles.label}>Other Taxes ({otherTaxRate}%)</label>
            <p style={styles.value}>{otherTaxes.toFixed(2)}</p>
          </div>
          <div style={styles.calculationItem}>
            <label style={styles.label}>Remaining Amount</label>
            <p style={styles.value}>{remainingAmount.toFixed(2)}</p>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>
          Add Fund
        </button>
      </form>
    </div>
  );
}

const styles = {
    container: {
      maxWidth: "800px",
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
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    select: {
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    },
    input: {
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    },
    calculationContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "10px",
    },
    calculationItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#f0f0f0",
      borderRadius: "8px",
    },
    value: {
      fontSize: "16px",
      fontWeight: "bold",
      marginTop: "8px",
    },
    submitButton: {
      padding: "10px 20px",
      backgroundColor: "#474656",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      alignSelf: "center",
    },
  };
  


export default AddFund;
