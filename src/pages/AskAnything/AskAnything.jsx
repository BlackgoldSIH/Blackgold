import React from "react";
import "./askAnything.css";

const questions = [
  { id: 1, question: "How to upload a file through the panel ?" },
  { id: 2, question: "Process for audit." },
  { id: 3, question: "How to find out current expenses with all details ?" },
  { id: 4, question: "Final review checklist" },
];

const AskAnything = () => {
  return (
    <div className="help-dashboard">
      {/* Header Section */}
      <header className="help-header">
        <h1>
          Hello, <span>Investigator!</span>
        </h1>
        <p>How can I help you today?</p>
      </header>

      {/* Question Cards */}
      <div className="question-cards">
        {questions.map((item) => (
          <div key={item.id} className="card">
            <p>{item.question}</p>
            <div className="icon">
              <i className="fas fa-globe"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Response */}
      <div className="chat-response">
        <div className="question">
          <span className="bubble">a</span>
          <p>How to find out current expenses with all details ?</p>
        </div>
        <div className="answer">
          <span className="star-icon">⭐</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Typing Box */}
      <div className="typing-box">
        <input
          type="text"
          placeholder="Start typing here..."
          className="input-box"
        />
      </div>
    </div>
  );
};

export default AskAnything;
