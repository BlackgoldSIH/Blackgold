import React from "react";
import "./messageGroup.css";

const MessageGroup = () => {
  return (
    <div className="containerr">
      {/* Sidebar Section */}
      <div className="message-sidebar">
        <div className="sidebar-header">
          <h3>Inbox</h3>
          <span className="new-label">2 New</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="chat-list">
          <div className="chat-item active">
            <div className="chat-avatar">C</div>
            <div className="chat-details">
              <h4>CMPDI</h4>
              <p>Recent Message</p>
            </div>
          </div>
          <div className="chat-item">
            <div className="chat-avatar">I</div>
            <div className="chat-details">
              <h4>Co-Investigator 1</h4>
              <p>Recent Message</p>
            </div>
          </div>
          <div className="chat-item">
            <div className="chat-avatar">I</div>
            <div className="chat-details">
              <h4>Co-Investigator 2</h4>
              <p>Recent Message</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-header">
          <div className="header-details">
            <h3>CMPDI</h3>
            <p>Help & Support</p>
          </div>
          <div className="header-actions">...</div>
        </div>

        <div className="chat-messages">
          {/* Received Message */}
          <div className="message received">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              mollis leo proin turpis eu hac. Tortor dolor eu at bibendum
              suspendisse.
            </p>
            <span className="time">11:09 pm</span>
          </div>
          {/* Sent Message */}
          <div className="message sent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              mollis leo proin turpis eu hac. Tortor dolor eu at bibendum
              suspendisse.
            </p>
            <span className="time">12:15 am</span>
          </div>
          {/* Audio Message Received */}
          <div className="message received">
            <div className="audio">
              <div className="wave"></div>
              <span>0:06 sec</span>
            </div>
            <span className="time">12:20 am</span>
          </div>
          {/* Audio Message Sent */}
          <div className="message sent">
            <div className="audio">
              <div className="wave"></div>
              <span>0:06 sec</span>
            </div>
            <span className="time">12:30 am</span>
          </div>
        </div>

        <div className="chat-footer">
          <input type="text" placeholder="Write a message..." />
          <div className="footer-icons">
            <button className="icon">📎</button>
            <button className="icon">🎤</button>
            <button className="icon">➡️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageGroup;
