import React from 'react';
import './utils.css'; // Import the CSS file for styling

const FormCard = () => {
    return (
        <div className="form_card">
            <div className="form_card_header">
                <h2>Form 1</h2>
                <span className="form_card_status">Completed</span>
            </div>
            <hr className="form_card_divider" />
            <p className="form_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="form_card_download">Download</a>
        </div>
    );
};

export default FormCard;
