import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gantt.css";
import { useParams } from "react-router-dom";

const GanttChart = () => {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState("name"); // Default sorting by name
    const {projectid} = useParams();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/accounts/addTimelines", {
          id: projectid, // Replace with dynamic project ID if needed
        });
        const data = response.data.data; // Assuming API response has a `data` field
        setTasks(data.map((task) => ({
          id: task.id,
          name: task.task,
          start: task.startDate,
          end: task.endDate,
          description: `Status: ${task.status}`, // Customize description as needed
        })));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const sortTasks = (tasks, option) => {
    switch (option) {
      case "start":
        return [...tasks].sort((a, b) => new Date(a.start) - new Date(b.start));
      case "end":
        return [...tasks].sort((a, b) => new Date(a.end) - new Date(b.end));
      case "name":
      default:
        return [...tasks].sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedTasks = sortTasks(tasks, sortOption);

  const getChartDates = () => {
    const allDates = tasks.flatMap((task) => [new Date(task.start), new Date(task.end)]);
    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));

    const dates = [];
    let currentDate = minDate;
    while (currentDate <= maxDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const chartDates = getChartDates();

  return (
    <div className="gantt-chart-container">
      {/* Filter and Sort Section */}
      <div className="filter-section">
        <label htmlFor="sortOption" className="filter-label">Sort By: </label>
        <select id="sortOption" value={sortOption} onChange={handleSortChange} className="sort-dropdown">
          <option value="name">Task Name</option>
          <option value="start">Start Date</option>
          <option value="end">End Date</option>
        </select>
      </div>

      {/* Gantt Chart */}
      <div className="gantt-chart">
        <div className="header">
          <div className="task-header">Task</div>
          <div className="dates-header">
            {chartDates.map((date, index) => (
              <div key={index} className="date-cell">
                {date.toISOString().slice(5, 10)} {/* Display MM-DD */}
              </div>
            ))}
          </div>
        </div>
        <div className="body">
          {sortedTasks.map((task) => {
            const taskStart = new Date(task.start);
            const taskEnd = new Date(task.end);

            return (
              <div key={task.id} className="task-row">
                <div className="task-name" title={task.description}>{task.name}</div>
                <div className="task-bar-container">
                  {chartDates.map((date, index) => {
                    const isWithinTask = date >= taskStart && date <= taskEnd;

                    return (
                      <div
                        key={index}
                        className={`date-cell ${isWithinTask ? "task-bar" : ""}`}
                        title={isWithinTask ? task.description : ""}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GanttChart;
