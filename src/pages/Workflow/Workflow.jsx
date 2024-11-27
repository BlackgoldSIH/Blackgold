import React from 'react';
import './workflow.css'; // Import the CSS file for styling
import TaskDashboard from './TaskDashboard';
import FinanceManagement from './FinanceManagement';

const projects = [
  {
    id: 1,
    title: "Project Title 1",
    projectId: "#402235",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDObTdx-EO2LBDAp-B5Hgg4pOExfPCeuukPg&s",
  },
  {
    id: 2,
    title: "Project Title 2",
    projectId: "#402235",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKM6yAaAjlNac-D6UUnUqeEkaPVMH7Ix6eYw&s",
  },
  {
    id: 3,
    title: "Project Title 3",
    projectId: "#402235",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/03/full/1654280059-4127.jpg?im=FeatureCrop,size=(826,465)",
  },
  // Add more project objects here
];

const Workflow = () => {
  return (
    <div className="projects-container">
      <h2>Projects </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <h3>{project.title}</h3>
              <input type="checkbox" />
            </div>
            <p className="project-id">{project.projectId}</p>
            <img src={project.image} alt={project.title} className="project-image" />
            <p className="project-description">{project.description}</p>
            <button className="view-tasks-btn">View Tasks</button>
          </div>
        ))}
      </div>

      <TaskDashboard />

      <FinanceManagement />
    </div>
  );
};

export default Workflow;
