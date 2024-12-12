import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting projectid from URL
import axios from "axios";
import "./financeManagement.css";

const FinanceManagement = () => {
  const { projectid } = useParams(); // Get the projectid from URL
  const [financeData, setFinanceData] = useState({
    fundDispersed: 0,
    fundRequired: 0,
    fundUsed: 0,
  });
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch finance data for the specific project
    const fetchFinanceData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/project-finance/", {
          projectid: projectid, // Send projectid as a parameter
        });
        setFinanceData(response.data); // Update state with API response
      } catch (error) {
        console.error("Error fetching finance data:", error);
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    };

    if (projectid) {
      fetchFinanceData();
    }
  }, [projectid]);

  return (
    <div className="dashboard">
      {isLoading ? (
        <p>Loading finance data...</p>
      ) : (
        <>
          {/* Header Section */}
          <div className="header-section">
            <div className="header-card">
              <h3>Fund Dispersed</h3>
              <p className="value">₹{financeData.fundDispersed}</p>
            </div>
            <div className="header-card">
              <h3>Fund Required</h3>
              <p className="value">₹{financeData.fundRequired}</p>
            </div>
            <div className="header-card">
              <h3>Fund Used</h3>
              <p className="value">₹{financeData.fundUsed}</p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="main-content">
            {/* Work Done Section */}
            <div className="work-done">
              <h3>Work Done</h3>
              <p>Chart data can be added here based on fund usage.</p>
            </div>
            {/* Budget Utilization Section */}
            <div className="budget-utilization">
              <h3>Budget Utilization</h3>
              <p>Budget visualization can be based on the API data.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FinanceManagement;
