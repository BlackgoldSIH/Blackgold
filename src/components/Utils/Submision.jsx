import React, { useState } from 'react';
import './utils.css'; // Import your CSS file
const SubmitRevision = () => {
    const [response, setResponse] = useState('');
    const [file, setFile] = useState(null);
  
    const handleResponseChange = (e) => {
      setResponse(e.target.value);
    };
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic here
      console.log('Response:', response);
      console.log('File:', file);
    };
  
    return (
      <div className="submit-revision">
        <h2>Submit Revision &gt;</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <label htmlFor="response">Write your response</label>
            <textarea
              id="response"
              className="response-textarea"
              value={response}
              onChange={handleResponseChange}
              placeholder="Write a message..."
            />
          </div>
          <div className="form-section">
            <label htmlFor="fileUpload">Upload Files</label>
            <div className="upload-container">
              <input
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="fileUpload">Browse File</label>
              <p>JPEG, PNG, PDG, and MP4 formats, up to 50 GB</p>
            </div>
          </div>
        </form>
        <button type="submit" onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    );
  };
  
  export default SubmitRevision;