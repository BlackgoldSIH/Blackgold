import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProjectProposalForm.css"; // Import CSS styles
import { useNavigate } from "react-router-dom";

const baseURL = "127.0.0.1"
const ProjectProposalForm = () => {
    
  const [formData, setFormData] = useState({
    agency_name: "",
    coordinator: "", 
    sub_agency: "",
    co_investigator: "", 
    issue_definition: "",
    objective: "",
    justification_area: "",
    coal_benefit: "",
    subject_justification: "",
    work_plan: "",
    methodology: "",
    organization: "",
    start_date: new Date().toISOString().split("T")[0],
    end_date: new Date().toISOString().split("T")[0],
  });

  const [tableData, setTableData] = useState({
    capital_expenditure: "",
    total_capital: "",
    salaries: "",
    consumables: "",
    travel: "",
    workshops: "",
    total_revenue: "",
  });

  const [coordinatorOption, setCoordinatorOption] = useState([{ id: 1, username: "omkar" }]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://${baseURL}:8000/api/accounts/getlist`);
        if (response) {
          setCoordinatorOption(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching coordinator options:", error);
      }
    };
    getData();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTableChange = (field, value) => {
    setTableData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://${baseURL}:8000/api/accounts/proposals/`, {
        ...formData,
        ...tableData,
      });
      alert("Project Proposal Submitted Successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit form. Please check your input.");
    }
  };

  const handleDateChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container" style={{"margin-top":"100px"}}>
      <h1 className="heading">Project Proposal for S&T Grant of MOC</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field, index) => (
          <div key={index} className="form-group">
            <label className="label">{field.replace(/_/g, " ").toUpperCase()}</label>
            {field === "start_date" || field === "end_date" ? (
              <input 
                type="date" 
                className="input" 
                value={formData[field]} 
                onChange={(e) => handleDateChange(field, e.target.value)} 
              />
            ) : field === "coordinator" || field === "co_investigator" ? (
              <select
                className="input"
                value={formData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
              >
                <option value="">Select</option>
                {coordinatorOption.map((option) => (
                  <option key={option.id} value={option.id}>{option.username}</option>
                ))}
              </select>
            ) : (
              <input 
                type="text" 
                className="input" 
                value={formData[field]} 
                onChange={(e) => handleInputChange(field, e.target.value)} 
              />
            )}
          </div>
        ))}

        {Object.keys(tableData).map((field, index) => (
          <div key={index} className="form-group">
            <label className="label">{field.replace(/_/g, " ").toUpperCase()}</label>
            <input 
              type="number" 
              className="input" 
              value={tableData[field]} 
              onChange={(e) => handleTableChange(field, e.target.value)} 
            />
          </div>
        ))}

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ProjectProposalForm;