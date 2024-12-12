import React, { useState } from 'react'
import './common.css'
import { assets } from '../../assets/assets'

import { Link } from 'react-router-dom'



function AdminSidebar() {
    const [activeItem, setActiveItem] = useState('Manage Projects');
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
                            <Link to='/addProjectAdmin'>
                                <li
                                    className={activeItem === 'Add Project' ? 'active' : ''}
                                    onClick={() => handleClick('Add Project')}
                                >
                                    <i className="ri-folder-check-fill"></i> Add Project
                                </li>
                            </Link>

                            <Link to='/viewProposal' >
                                <li
                                    className={activeItem === 'Track Progress' ? 'active' : ''}
                                    onClick={() => handleClick('Track Progress')}
                                >
                                    <i className="ri-progress-1-line"></i> View Proposals
                                </li>
                            </Link>


                            {/* <Link to='/addInvest'>
                                <li
                                    className={activeItem === 'Reports & Docs' ? 'active' : ''}
                                    onClick={() => handleClick('Reports & Docs')}
                                >
                                    <i className="ri-survey-line"></i> Add investigator
                                </li>
                            </Link> */}

                            <Link to='/addTimeLine'>
                                <li
                                    className={activeItem === 'Add TimeLine' ? 'active' : ''}
                                    onClick={() => handleClick('Add TimeLine')}
                                >
                                    <i className="ri-survey-line"></i> Add TimeLine
                                </li>
                            </Link>
                            <Link to='/addFunds'>
                                <li
                                    className={activeItem === 'Add Fund' ? 'active' : ''}
                                    onClick={() => handleClick('Add Fund')}
                                >
                                    <i className="ri-survey-line"></i> Add Fund
                                </li>
                            </Link>




                            <Link to='/askAnythingadmin'>
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
                            <Link to="/helpadmin">
                            <li
                                className={activeItem === 'Help & Support' ? 'active' : ''}
                                onClick={() => handleClick('Help & Support')}
                            >
                                <i className="ri-progress-1-line"></i> Help & Support
                            </li>
                            </Link>
                            <Link to="/securityadmin">
                            <li
                                className={activeItem === 'Security' ? 'active' : ''}
                                onClick={() => handleClick('Security')}
                            >
                                <i className="ri-survey-line"></i> Security
                            </li></Link>
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

export default AdminSidebar
