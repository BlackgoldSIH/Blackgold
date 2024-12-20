import React, { useState } from 'react'
import './common.css'
import { assets } from '../../assets/assets'

import { Link, useNavigate } from 'react-router-dom'



function InvestSidebar() {
    const [activeItem, setActiveItem] = useState('Manage Projects');
    const navigate = useNavigate();
    const handleClick = (item) => {
        setActiveItem(item);
    };
    return (
        <div className="container">
            <div className="sidebar_content">
                <div className="sidebar_heading">
                    <img src={assets.logo} alt="" />
                </div>
                <div className="sidebar_menus">
                    <div className="top_menus">
                        <ul>
                            <Link to='/'>
                                <li
                                    className={activeItem === 'Manage Projects' ? 'active' : ''}
                                    onClick={() => handleClick('Manage Projects')}
                                >
                                    <i className="ri-folder-check-fill"></i> Manage Projects
                                </li>
                            </Link>


                            <Link to='/addProposal' >
                                <li
                                    className={activeItem === 'Track Progress' ? 'active' : ''}
                                    onClick={() => navigate("addProposal")}
                                >
                                    <i className="ri-progress-1-line"></i> Add Proposals
                                </li>
                            </Link>


                            <Link to='/askAnythinginvest'>
                                <li
                                    className={activeItem === 'Ask Anything' ? 'active' : ''}
                                    onClick={() => handleClick('Ask Anything')}
                                >
                                    <i className="ri-user-forbid-line"></i> Ask Anything
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="bottom_menus">
                        <ul>
                            <Link to="/helpinvest">
                            <li
                                className={activeItem === 'Help & Support' ? 'active' : ''}
                                onClick={() => handleClick('Help & Support')}
                            >
                                <i className="ri-progress-1-line"></i> Help & Support
                            </li>
                            </Link>
                            <Link to="/securityinvest">
                            <li
                                className={activeItem === 'Security' ? 'active' : ''}
                                onClick={() => handleClick('Security')}
                            >
                                <i className="ri-survey-line"></i> Security
                            </li>
                            </Link>
                            <li
                                className={activeItem === 'Settings' ? 'active' : ''}
                                onClick={() => handleClick('Settings')}
                            >
                                <i className="ri-user-forbid-line"></i> Settings
                            </li>

                            {/* <li><i class="ri-question-line"></i> Help & Support</li>
                            <li><i class="ri-secure-payment-fill"></i> Security</li>
                            <li><i class="ri-settings-2-line"></i> Settings</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestSidebar
