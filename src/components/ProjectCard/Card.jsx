import React from 'react';
import './card.css';
import CustomCircularProgress from './CustomCircularProgress';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
function Card({ data }) { // Destructure props to access `data`
    const navigate = useNavigate();

    const handleClick = (projectId) => {
        navigate(`/projectSummary/${projectId}`);
    };

    return (
        <div className="project_card">
            <div className="product_img">
                <img
                    src={assets.download}
                    alt="Project"
                />
            </div>
            <div className="product_info">
                <div className="product_title">
                    <div className="product_name_id">
                        <h1>{data.title}</h1>
                        <span>ID: #{data.id}</span>
                    </div>
                    <div className="product_process">
                        <span>{data.status}</span>
                    </div>
                </div>
                <div className="product_date_cicle">
                    <div className="product_date">
                        <p>
                            Start Date: <span>{data.start_date}</span>
                        </p>
                        <p>
                            End Date: <span>{data.end_date}</span>
                        </p>
                    </div>
                    <div className="product_circle">
                        <CustomCircularProgress
                            value={data.current_progress_percentage}
                            primaryColor="#ddd"
                            secondaryColor="#4caf50"
                        />
                        <div className="progress_color">
                            <div>
                                <div className="col_one"></div> <p>Completed</p>
                            </div>
                            <div>
                                <div className="col_two"></div> <p>Remaining</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_view">
                    <button
                        className="view-summary-btn"
                        onClick={() => handleClick(data.id)}
                    >
                        View Summary
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
