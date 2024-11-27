import React from 'react';
import './utils.css';

const AdminComments = () => {
  const comments = [
    {
      id: '#402235',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
    },
    {
      id: '#402235',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
    },
    {
      id: '#402235',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
    },
    {
      id: '#402235',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
    },
    {
      id: '#402235',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
    },
  ];

  return (
    <div className="admin_comments">
      <h2>Admin Comments &gt;</h2>
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <input type="checkbox" className="checkbox" />
          <div className="comment_details">
            <div className="comment_header">
              <span className="comment_title">
                Admin comments regarding the project with ID shown below
              </span>
              <span className="comment_id">{comment.id}</span>
              <span className="status_container">
                <span className={`status ${comment.status.toLowerCase()}`}>{comment.status}</span>
                <span className={`completion ${comment.completion.toLowerCase()}`}>{comment.completion}</span>
              </span>
            </div>
            <div className="comment_footer">
              <span className="date_range">
                <span className="label">Start Date:</span>
                <span className="date">{comment.startDate}</span>
              </span>
              <span className="date_range">
                <span className="label">End Date:</span>
                <span className="date">{comment.endDate}</span>
              </span>
              <span className="duration">
                <span className="time_icon">&#x23F3;</span>
                <span className="time">{comment.duration}</span>
              </span>
              <span className="message_icon">&#x1F4AC;</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminComments;
