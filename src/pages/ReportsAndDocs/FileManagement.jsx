import React from "react";
import "./reports.css";

const FileManagement = () => {
  const files = [
    { name: "Project 1.pdf", size: "25 MB", date: "2025/18/16", permission: "Investigator", icon: "📄" },
    { name: "Invoice Nov 17.doc", size: "16 MB", date: "2025/18/16", permission: "View Only", icon: "📄" },
    { name: "Screenshot 22.jpg", size: "155 KB", date: "2025/18/16", permission: "Investigator", icon: "🖼️" },
    { name: "abc.txt", size: "155 KB", date: "2025/18/16", permission: "Admin", icon: "📄" },
    { name: "Landing Page.html", size: "187 KB", date: "2025/18/16", permission: "Admin", icon: "🌐" },
    { name: "Styles.css", size: "1.5 GB", date: "2025/18/16", permission: "Investigator", icon: "📄" },
    { name: "CheatSheet.txt", size: "889 KB", date: "2025/18/16", permission: "View Only", icon: "📄" },
  ];

  const overview = {
    totalReviews: 198,
    responses: 16,
    comments: 11,
    reapplied: 87,
    delete: 2,
  };

  return (
    <div className="file-management-container">
      {/* File Upload Section */}
      <div className="file-upload-section">
        <div className="upload-box">
          <p>Choose a file or drag & drop it here</p>
          <button>Browse File</button>
          <p>JPEG, PNG, PDF, and MP4 formats, up to 50 GB</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* File List */}
        <div className="file-list">
          <div className="file-list-header">
            <h3>Public Files <span>(81 Total)</span></h3>
            <div className="actions">
              <button className="add-button">+</button>
              <button className="filter-button">Filter</button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Last Modified</th>
                <th>File Permission</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index}>
                  <td>
                    <span className="file-icon">{file.icon}</span> {file.name}
                    <div className="file-size">{file.size}</div>
                  </td>
                  <td>{file.date}</td>
                  <td>
                    <span className={`permission ${file.permission.replace(" ", "-").toLowerCase()}`}>
                      {file.permission}
                    </span>
                  </td>
                  <td>
                    <i class="ri-more-2-fill ellipsis"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* File Details & Overview */}
        <div className="sidebar">
          {/* File Details */}
          <div className="file-details">
            <h4>File Details</h4>
            <div className="details-box">
              <span className="file-icon">📄</span>
              <div>
                <p className="file-name">accounts.txt</p>
                <p className="last-modified">Modified 24/10/2024</p>
              </div>
            </div>
          </div>

          {/* File Overview */}
          <div className="file-overview">
            <h4>File Overview</h4>
            <ul>
              <li>Total Reviews <span>{overview.totalReviews}</span></li>
              <li>Responses <span>{overview.responses}</span></li>
              <li>Comments <span>{overview.comments}</span></li>
              <li>Reapplied <span>{overview.reapplied}</span></li>
              <li>Delete <span>{overview.delete}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManagement;
