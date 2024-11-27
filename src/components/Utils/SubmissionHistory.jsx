import React from 'react';
import './utils.css'; // Make sure to create this CSS file

const SubmissionHistory = () => {
  const submissions = [
    { title: 'Project 1', status: 'Reviewed' },
    { title: 'Project 2', status: 'Pending' },
    { title: 'Project 2', status: 'In - Review' },
    { title: 'Project 2', status: 'Pending' },
    { title: 'Project 2', status: 'Reviewed' },
    { title: 'Project 2', status: 'In - Review' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Reviewed':
        return 'status-reviewed';
      case 'Pending':
        return 'status-pending';
      case 'In - Review':
        return 'status-in-review';
      default:
        return '';
    }
  };

  return (
    <div className="submission-history">
      <h2>Submission History &gt;</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.title}</td>
              <td className={getStatusClass(submission.status)}>{submission.status}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionHistory;
