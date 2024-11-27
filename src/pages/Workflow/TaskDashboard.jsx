import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TaskDashboard.css";

const tasks = [
  { id: 1, title: "The Task title with previous requirement dropped", status: "Pending", progress: 30, color: "#E46E19" },
  { id: 2, title: "The Task title with previous requirement dropped", status: "Reviewing", progress: 50, color: "#5C59E8" },
  { id: 3, title: "The Task title with previous requirement dropped", status: "In Queue", progress: 20, color: "#E11D23" },
  { id: 4, title: "The Task title with previous requirement dropped", status: "Almost Done", progress: 80, color: "#1F9254" },
  { id: 5, title: "The Task title with previous requirement dropped", status: "Success", progress: 100, color: "#929292" },
];

const TaskDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Task Progress Section */}
      <div className="task-section">
        <h2 className="section-title">Projects  Tasks </h2>
        {tasks.map((task) => (
          <div key={task.id} className="task-row">
            <div className="task-info">
              <span className="task-title">Task {task.id}</span>
              <span className="task-description">{task.title}</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${task.progress}%`,
                  backgroundColor: task.color,
                }}
              >
                <span className="status-text">{task.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className="sidebar-section">
        {/* WorkLog Card */}
        <div className="worklog-card">
          <h3>Total WorkLog</h3>
          <div className="circular-progress">
            <CircularProgressbar
              value={72}
              text="5w: 2d"
              styles={buildStyles({
                pathColor: "#4caf50",
                textColor: "#000",
                trailColor: "#ddd",
                textSize: "16px",
              })}
            />
          </div>
        </div>

        {/* Calendar Card */}
        <div className="calendar-card">
          <h3>Calendar</h3>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
