import React from "react";
import './style.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import styled from "styled-components";

// Styled Components
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  padding: 2rem;
  background-color: #f4f4f4;
`;

const Card = styled.div`
  background: #2b2b3a;
  color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BarGraphContainer = styled.div`
  grid-column: span 2;
  background: #2b2b3a;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TimelineContainer = styled.div`
  grid-column: span 1;
  padding: 1rem;
  background: #d9d9d9;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  color: #d0bfff;
  font-size: 1rem;
`;

// Dummy Data
const barData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 70 },
  { name: "Apr", value: 50 },
  { name: "May", value: 80 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 90 },
  { name: "Sep", value: 60 },
  { name: "Oct", value: 50 },
  { name: "Nov", value: 40 },
  { name: "Dec", value: 60 },
];

const pieData = [
  { name: "Daily Expenses", value: 40, color: "#ffafcc" },
  { name: "Rent", value: 20, color: "#bde0fe" },
  { name: "Food", value: 25, color: "#a2d2ff" },
  { name: "Tax", value: 15, color: "#cdb4db" },
];

const TimelineSteps = [
  { title: "Title 1", description: "Description of the Process and any key points" },
  { title: "Title 2", description: "Description of the Process and any key points" },
  { title: "Title 3", description: "Description of the Process and any key points" },
  { title: "Title 4", description: "Description of the Process and any key points" },
];

// Main React Component
const FinanceDashboard = () => {
  return (
    <div className="finance_container">

    
    <DashboardContainer>
      {/* Top Metrics */}
      <Card>
        <h2>Total Projects</h2>
        <h1>500</h1>
        <p>+12 from last month</p>
      </Card>

      <Card>
        <h2>Total Spending</h2>
        <h1>₹36,672</h1>
        <p>+5% from last month</p>
      </Card>

      <Card>
        <h2>To Achieve</h2>
        <h1>₹291,912</h1>
        <p>+8% from last month</p>
      </Card>

      {/* Bar Graph */}
      <BarGraphContainer>
        <h3>Work Done</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#d0bfff" />
            <YAxis stroke="#d0bfff" />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" fill="#a2d2ff" />
          </BarChart>
        </ResponsiveContainer>
      </BarGraphContainer>

      {/* Budget Utilization */}
      <Card>
        <h3>Budget Utilization</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p>Total: 82,62 INR</p>
      </Card>

      {/* Expense Timeline */}
      <TimelineContainer>
        <h3>Expense Timeline</h3>
        {TimelineSteps.map((step, index) => (
          <div key={index}>
            <Title>
              <span style={{ color: "#2b2b3a" }}>•</span> {step.title}
            </Title>
            <p>{step.description}</p>
          </div>
        ))}
      </TimelineContainer>
    </DashboardContainer>
    </div>
  );
};

export default FinanceDashboard;
