import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectProposalForm.css"; // Create this file for styling
const baseURL = "127.0.0.1"
const ViewProjectProposalForm = () => {
  const [proposals, setProposals] = useState([]);
  const [showProposals, setShowProposals] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://${baseURL}:8000/api/accounts/proposals/`);
        if (response) {
          setProposals(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching proposals:", error);
      }
    };
    getData();
  }, []);

  const handleDelete = async (proposalId) => {
    try {
      await axios.delete(`http://${baseURL}:8000/api/accounts/proposals/${proposalId}/`);
      alert("Proposal deleted successfully!");
      setProposals(proposals.filter((proposal) => proposal.id !== proposalId));
      setModalVisible(false);
    } catch (error) {
      alert("Failed to delete the proposal.");
      console.error("Delete Error:", error);
    }
  };

  const handleApprove = async (proposalId) => {
    try {
      await axios.patch(`http://${baseURL}:8000/api/accounts/proposals/${proposalId}/`, { status: "approved" });
      alert("Proposal approved successfully!");
      setProposals(proposals.filter((proposal) => proposal.id !== proposalId));
      setModalVisible(false);
    } catch (error) {
      alert("Failed to approve the proposal.");
      console.error("Approve Error:", error);
    }
  };

  const openModal = (proposal) => {
    setSelectedProposal(proposal);
    setModalVisible(true);
  };

  return (
    <div className="container">
      <h1 className="heading">Project Proposals</h1>
      <div className="proposal-list">
        {proposals.map((proposal, index) => (
          <div

            key={index}
            className="proposal-item"
            onClick={()=> {
              openModal(proposal)
              setShowProposals(!showProposals)
            }}
          >
            <h2 className="proposal-title">{proposal.agency_name}</h2>
            <p className="proposal-subtitle">Coordinator: {proposal.organization}</p>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal">
          <div className={`{($showProposals === true) ? "show modal-content" : ""}`}>
            <h2 className="modal-heading">Proposal Details</h2>

            {selectedProposal &&
              Object.entries(selectedProposal).map(([key, value], index) => (
                <div key={index} className="info-box">
                  <strong className="label">{key.replace(/_/g, " ").toUpperCase()}</strong>
                  <p className="info-text">{value ? value.toString() : "N/A"}</p>
                </div>
              ))}

            <div className="button-container">
              <button
                className="delete-button"
                onClick={() => handleDelete(selectedProposal.id)}
              >
                Delete
              </button>

              <button
                className="approve-button"
                onClick={() => handleApprove(selectedProposal.id)}
              >
                Approve
              </button>
            </div>

            <button
              className="back-button"
              onClick={() => setModalVisible(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProjectProposalForm;