import React from 'react'
import './topbar.css'

import { Link } from 'react-router-dom'
function Topbar() {
  return (
    <div className="container">
        <div className="topbar_content">
            <div className="topbar_menu">
                <i class="ri-menu-line"></i>
            </div>
            <div className="topbar_menu_two">
                <div className="topbar_search">
                    <input type="search" name="" id="" /><i class="ri-search-line"></i>
                </div>
                <div className="topbar_notify">
                    <i class="ri-notification-3-line"></i>
                </div>
                <div className="topbar_mail">
                    <i class="ri-mail-line"></i>
                </div>
                <div className="topbar_hr"></div>
                <div className="topbar_account">
                    <div className="topbar_acc_icon">
                        <i class="ri-account-circle-line"></i>
                    </div>
                    <div className="topbar_user">
                        <p>Krishna Borse</p>
                        <span>Admin</span>
                    </div>
                    <div className="topbar_more"><i class="ri-arrow-down-s-line"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
