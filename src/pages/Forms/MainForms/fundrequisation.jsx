import React, { useState } from 'react';
import './FundRequisition.css'; // Import the CSS file for styling

const FundRequisition = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [approvedCost, setApprovedCost] = useState('');
  const [fundReceived, setFundReceived] = useState('');
  const [interestEarned, setInterestEarned] = useState('');
  const [expenditure, setExpenditure] = useState('');
  const [fundProvision, setFundProvision] = useState('');
  const [fundRequired, setFundRequired] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      projectTitle,
      approvedCost,
      fundReceived,
      interestEarned,
      expenditure,
      fundProvision,
      fundRequired,
    });
  };

  return (
    <div className="fund-requisition">
      <h1 className="header">FUND REQUISITION</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">Project Title:</label>
        <input
          type="text"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          className="input"
        />

        <table className="table">
          <thead>
            <tr>
              <th className="th">Items</th>
              <th className="th">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">Total approved Cost</td>
              <td className="td">
                <input
                  type="number"
                  value={approvedCost}
                  onChange={(e) => setApprovedCost(e.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td className="td">Total Fund Received as on ..........</td>
              <td className="td">
                <input
                  type="number"
                  value={fundReceived}
                  onChange={(e) => setFundReceived(e.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td className="td">Interest Earned</td>
              <td className="td">
                <input
                  type="number"
                  value={interestEarned}
                  onChange={(e) => setInterestEarned(e.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td className="td">Expenditure incurred till date</td>
              <td className="td">
                <input
                  type="number"
                  value={expenditure}
                  onChange={(e) => setExpenditure(e.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td className="td">Balance fund available as on date .......</td>
              <td className="td">
                <input
                  type="text"
                  readOnly
                  value={fundReceived + interestEarned - expenditure}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td className="td">Fund provision in corresponding Year (As per sanction)</td>
              <td className="td">
                <input
                  type="number"
                  value={fundProvision}
                  onChange={(e) => setFundProvision(e.target.value)}
                  className="input"
                />
              </td>
            </tr>
            <tr>
              <td className="td">Fund Required for the ...............</td>
              <td className="td">
                <input
                  type="number"
                  value={fundRequired}
                  onChange={(e) => setFundRequired(e.target.value)}
                  className="input"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="notes">
          <p><strong>A - Land & Building</strong></p>
          <p><strong>B - Capital equipment</strong></p>
          <p><strong>C - Manpower</strong></p>
          <p><strong>D - Consumables</strong></p>
          <p><strong>E - Travel</strong></p>
          <p><strong>F - Contingencies</strong></p>
          <p><strong>G - Attending/organizing workshop/seminar etc.</strong></p>
          <p><strong>Total</strong></p>
        </div>

        <div className="signature-section">
          <div className="signature-box">
            <input type="file" className="file-input" />
            <label className="signature-label"><strong>Signature of Associate Finance Officer</strong></label>
            <label className="signature-label">Name:</label>
            <input type="text" className="input" />
            <label className="signature-label">Designation:</label>
            <input type="text" className="input" />
            <label className="signature-label">Seal:</label>
            <input type="text" className="input" />
          </div>
          <div className="signature-box">
            <input type="file" className="file-input" />
            <label className="signature-label"><strong>Signature of Project Leader/Coordinator</strong></label>
            <label className="signature-label">Name:</label>
            <input type="text" className="input" />
            <label className="signature-label">Designation:</label>
            <input type="text" className="input" />
            <label className="signature-label">Seal:</label>
            <input type="text" className="input" />
          </div>
        </div>

        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default FundRequisition;
