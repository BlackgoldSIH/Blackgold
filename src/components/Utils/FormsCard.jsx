import React from 'react';
import './utils.css'; // Import the CSS file for styling

const FormCard = ({obj}) => {
    return (
        <div className="form_card">
            <div className="form_card_header">
                <h2>{obj.title}</h2>
                <span className="form_card_status">{obj.status}</span>
            </div>
            <hr className="form_card_divider" />
            <p className="form_card_description">
                {obj.description}
            </p>
            <div className="temp" style={{display:"flex",justifyContent:"space-between"}}>
            <a href="#" className="form_card_download">Fill Form</a>
            <a href="#" className="form_card_download">Download</a>

            </div>
        </div>
    );
};

export default FormCard;
