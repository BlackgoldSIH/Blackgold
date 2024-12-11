import React from "react";

const SubmittedReports = () => {
  const reports = [
    {
      id: "30210345",
      title: "Report Title",
      startDate: "30 min ago",
      endDate: "15 Jan 2025",
      status: "Pending",
    },
    {
      id: "42031520",
      title: "Report Title 2",
      startDate: "2 days ago",
      endDate: "20 Dec 2024",
      status: "In Review",
    },
    {
      id: "52314575",
      title: "Report Title 3",
      startDate: "1 week ago",
      endDate: "1 Dec 2024",
      status: "Discarded",
    },
    {
      id: "32565432",
      title: "Report Title 4",
      startDate: "08 Aug 2024",
      endDate: "21 Nov 2024",
      status: "Approved",
    },
    {
      id: "32565432",
      title: "Report Title 5",
      startDate: "30 Jul 2024",
      endDate: "Deadline Today",
      status: "Approved",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "status-pendings";
      case "In Review":
        return "status-review";
      case "Discarded":
        return "status-discarded";
      case "Approved":
        return "status-approved";
      default:
        return "";
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Submitted Reports</h2>
        <button className="filter-button">Filters</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date (Expected)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>
                <div>
                  <strong>{report.title}</strong>
                  <div className="report-id">ID: {report.id}</div>
                </div>
              </td>
              <td>{report.startDate}</td>
              <td className={report.endDate === "Deadline Today" ? "deadline" : ""}>
                {report.endDate}
              </td>
              <td>
                <span className={`status-badge ${getStatusStyle(report.status)}`}>
                  {report.status}
                </span>
              </td>
              <td>
                <button className="action-button view-button"><i class="ri-eye-line"></i></button>
                <button className="action-button delete-button"><i class="ri-delete-bin-6-line"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>&laquo;</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>&raquo;</button>
      </div>
    </div>
  );
};

export default SubmittedReports;
