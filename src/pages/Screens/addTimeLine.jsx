import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function ProjectTimeline() {
  const [selectedProject, setSelectedProject] = useState("");
  const [timelineTasks, setTimelineTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    task: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  const projects1 = ["Project A", "Project B", "Project C"]; // Example project names
  const [projects, setProjects] = useState([projects1]);
  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    if (
      newTask.task &&
      newTask.startDate &&
      newTask.endDate &&
      newTask.status
    ) {
      setTimelineTasks([...timelineTasks, newTask]);
      setNewTask({ task: "", startDate: "", endDate: "", status: "" });
    } else {
      alert("Please fill in all fields before adding the task.");
    }
  };

  const handleSubmit = async () => {
    if (!selectedProject) {
      alert("Please select a project before submitting the timeline.");
      return;
    }

    const payload = timelineTasks.map((task) => ({
      ...task,
      project: selectedProject, // Include the selected project ID
    }));

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/addTimeline",
        payload
      );
      alert("Timeline submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting timeline:", error);
      alert("There was an error submitting the timeline.");
    }
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/accounts/projects/0/`)
      .then((response) => {
        console.log(response.data.data);
        setProjects(response.data.data);
      });
  }, []);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Project Timeline</h1>

      {/* Dropdown to select project */}
      <div style={styles.projectSelectorContainer}>
        <label style={styles.label}>Select Project:</label>
        <select
          style={styles.select}
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">-- Select a Project --</option>
          {projects.map((project, index) => (
            <option key={index} value={project["id"]}>
              {project["title"]}
            </option>
          ))}
        </select>
      </div>

      {selectedProject && (
        <div style={styles.timelineContainer}>
          <h2 style={styles.subtitle}>Timeline for {selectedProject}</h2>

          {/* Add Timeline Form */}
          <div style={styles.formContainer}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Task</label>
              <input
                style={styles.input}
                type="text"
                name="task"
                value={newTask.task}
                onChange={handleTaskChange}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Start Date</label>
              <input
                style={styles.input}
                type="date"
                name="startDate"
                value={newTask.startDate}
                onChange={handleTaskChange}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>End Date</label>
              <input
                style={styles.input}
                type="date"
                name="endDate"
                value={newTask.endDate}
                onChange={handleTaskChange}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Status</label>
              <select
                style={styles.input}
                name="status"
                value={newTask.status}
                onChange={handleTaskChange}
              >
                <option value="">-- Select Status --</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <button style={styles.addButton} onClick={handleAddTask}>
              Add Task
            </button>
          </div>

          {/* Timeline Table */}
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Task</th>
                  <th style={styles.th}>Start Date</th>
                  <th style={styles.th}>End Date</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {timelineTasks.map((task, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{task.task}</td>
                    <td style={styles.td}>{task.startDate}</td>
                    <td style={styles.td}>{task.endDate}</td>
                    <td style={styles.td}>{task.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button style={styles.submitButton} onClick={handleSubmit}>
            Submit Timeline
          </button>
        </div>
      )}
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
    marginBottom: "20px",
  },
  projectSelectorContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "10px",
  },
  select: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    flexGrow: 1,
    minWidth: "200px",
  },
  timelineContainer: {
    marginTop: "20px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#474656",
    textAlign: "center",
  },
  formContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  addButton: {
    padding: "10px 20px", // Match Submit Button padding
    backgroundColor: "#474656",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    width: "100%",
  },
  submitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#474656", // Match the color of the Add Task button
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    width: "100%",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    padding: "12px",
    backgroundColor: "#474656",
    color: "white",
    border: "1px solid #ddd",
    textAlign: "center",
    fontWeight: "bold",
  },
  td: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
};

export default ProjectTimeline;
