import React from "react";
import "./financeManagement.css";

const FinanceManagement = () => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-card">
          <h3>Total Projects</h3>
          <p className="value">500</p>
          <p className="change">+25 from last month</p>
        </div>
        <div className="header-card">
          <h3>Total Spending</h3>
          <p className="value">₹36,672</p>
          <p className="change">+5 from last month</p>
        </div>
        <div className="header-card">
          <h3>To Achieve</h3>
          <p className="value">₹291,912</p>
          <p className="change">+45 from last month</p>
        </div>
      </div>

      {/* Work Done & Budget Utilization Section */}
      <div className="main-content">
        <div className="work-done">
          <h3>Work Done</h3>
          <select className="dropdown">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
          <div className="bar-chart">
            <div className="bar" style={{ height: "30%" }}></div>
            <div className="bar" style={{ height: "50%" }}></div>
            <div className="bar" style={{ height: "70%" }}></div>
            <div className="bar active" style={{ height: "90%" }}>
              <span>₹22k</span>
            </div>
            <div className="bar" style={{ height: "60%" }}></div>
            <div className="bar" style={{ height: "40%" }}></div>
          </div>
        </div>
        <div className="budget-utilization">
          <h3>Budget Utilization</h3>
          <div className="pie-chart">
            <p className="total-label">Total</p>
            <p className="total-value">82,62 INR</p>
            <div className="legend">
              <p>Daily Expense: 40%</p>
              <p>Profit: 20%</p>
              <p>Tax: 15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h3>Expense Timeline</h3>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <h4>Title 1</h4>
            <p>Description of the Process and any key points</p>
          </div>
        </div>
        <div className="timeline-item active">
          <div className="timeline-dot"></div>
          <div>
            <h4>Title 2</h4>
            <p>Description of the Process and any key points</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <h4>Title 3</h4>
            <p>Description of the Process and any key points</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <h4>Title 4</h4>
            <p>Description of the Process and any key points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceManagement;
