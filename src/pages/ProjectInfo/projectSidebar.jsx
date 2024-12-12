import React, { useEffect, useState } from 'react'
// import './common.css'
import { assets } from '../../assets/assets'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function ProjectsSidebar(params) {
    const [activeItem, setActiveItem] = useState('Manage Projects');
    const { projectid  } = useParams();
    const handleClick = (item) => {
        setActiveItem(item);
    };
    // useEffect(()=>{
    //     console.log(projectid)
    // },[])
    return (
        <div className="container">
            <div className="sidebar_content">
                <Link to={"/"}>
                <div className="sidebar_heading">
                    <img src={assets.logo} alt="" />
                </div>
                </Link>
                <div className="sidebar_menus">
                    <div className="top_menus">
                        <ul>
     
                            <Link to={`/projectSummary/${projectid}`}>
                                <li
                                    className={activeItem === 'Manage Projects' ? 'active' : ''}
                                    onClick={() => handleClick('Manage Projects')}
                                >
                                    <i className="ri-folder-check-fill"></i> Project Overview
                                </li>
                            </Link>

                            <Link to={`/finances/${projectid}/`} >
                                <li
                                    className={activeItem === 'Track Progress' ? 'active' : ''}
                                    onClick={() => handleClick('Track Progress')}
                                >
                                    <i className="ri-progress-1-line"></i> Financials
                                </li>
                            </Link>


                            <Link to={`/reportsDocs/${projectid}/`}>
                                <li
                                    className={activeItem === 'Reports & Docs' ? 'active' : ''}
                                    onClick={() => handleClick('Reports & Docs')}
                                >
                                    <i className="ri-survey-line"></i> Report and Docs
                                </li>
                            </Link>
                            <Link to={`/notifications/${projectid}/`}>
                                <li
                                    className={activeItem === 'Notifications' ? 'active' : ''}
                                    onClick={() => handleClick('Notifications')}
                                >
                                    <i className="ri-survey-line"></i> Notifications
                                </li>
                            </Link>
                            <Link to={`/ganttChat/${projectid}/`}>
                                <li
                                    className={activeItem === 'Gantt Chart' ? 'active' : ''}
                                    onClick={() => handleClick('Gantt Chart')}
                                >
                                    <i className="ri-survey-line"></i> Gantt Chart
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className="bottom_menus">
                        <ul>
                            <li
                                className={activeItem === 'Help & Support' ? 'active' : ''}
                                onClick={() => handleClick('Help & Support')}
                            >
                                <i className="ri-progress-1-line"></i> Help & Support
                            </li>
                            <li
                                className={activeItem === 'Security' ? 'active' : ''}
                                onClick={() => handleClick('Security')}
                            >
                                <i className="ri-survey-line"></i> Security
                            </li>
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

export default ProjectsSidebar
