import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addProjectAdminStyle.css"; // Import CSS file

const ProjectForm = () => {
  const [proposalList, setProposalList] = useState([]);
  const [investigators, setInvestigators] = useState([]); // List of available investigators
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    proposal: "",
    status: "Processing",
    start_date: "",
    end_date: "",
    current_progress_percentage: 0.0,
    progress_status: "",
    duration: "",
    assigned_investigators: [],
    budget: 0,
    funds_used: 0,
  });

  useEffect(() => {
    // Fetch investigators from API (replace with actual endpoint)
    axios.get("http://127.0.0.1:8000/api/accounts/getlist").then((response) => {
      setInvestigators(response.data.data); // Adjust to match API structure
    });
    axios.get("http://127.0.0.1:8000/api/accounts/proposals").then((response) => {
        setProposalList(response.data.data);
        // console.log(proposalList)
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInvestigatorChange = (e) => {
    const options = e.target.options;
    const selectedInvestigators = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedInvestigators.push(options[i].value);
      }
    }
    setFormData({ ...formData, assigned_investigators: selectedInvestigators });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Make POST request to save project data
    axios
      .post("http://127.0.0.1:8000/api/accounts/addNewProject/", formData)
      .then((response) => {
        alert("Project created successfully!");
      })
      .catch((error) => {
        console.error("There was an error creating the project!", error);
      });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Proposal:</label>
        <select
          name="proposal"
          value={formData.proposal}
          onChange={handleChange}
        >
          <option value="">Select a proposal</option>
          {proposalList.map((proposal) => (
            <option key={proposal["id"]} value={proposal["id"]}>
              {proposal["id"]}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Processing">Processing</option>
          <option value="Success">Success</option>
          <option value="In Review">In Review</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="form-group">
        <label>Start Date:</label>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>End Date:</label>
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Current Progress Percentage:</label>
        <input
          type="number"
          name="current_progress_percentage"
          value={formData.current_progress_percentage}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label>Progress Status:</label>
        <textarea
          name="progress_status"
          value={formData.progress_status}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Assigned Investigators:</label>
        <select
          name="assigned_investigators"
          multiple
          value={formData.assigned_investigators}
          onChange={handleInvestigatorChange}
        >
          {investigators.map((investigator) => (
            <option key={investigator.id} value={investigator.id}>
              {investigator.username}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Budget:</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label>Funds Used:</label>
        <input
          type="number"
          name="funds_used"
          value={formData.funds_used}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;

/* CSS File: ProjectForm.css */
