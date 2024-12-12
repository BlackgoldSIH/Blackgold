import React from 'react';
import './topbar.css';

function Topbar( searchState, setSearchState ) {
    const handleSearchChange = (e) => setSearchState(e.target.value);


  return (
    <div className="container">
      <div className="topbar_content">
        <div className="topbar_menu">
          <i className="ri-menu-line"></i>
        </div>
        <div className="topbar_menu_two">
          <div className="topbar_search">
            <input
              type="search"
              placeholder="Search..."
            //   value={searchState}
              onChange={handleSearchChange} // Handles input change
            />
            <i className="ri-search-line"></i>
          </div>
          <div className="topbar_notify">
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="topbar_mail">
            <i className="ri-mail-line"></i>
          </div>
          <div className="topbar_hr"></div>
          <div className="topbar_account">
            <div className="topbar_acc_icon">
              <i className="ri-account-circle-line"></i>
            </div>
            {/* <div className="topbar_user">
              <p>Krishna Borse</p>
              <span>Admin</span>
            </div> */}
            <div className="topbar_more">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
