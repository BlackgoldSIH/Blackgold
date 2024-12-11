import React from 'react'
// import Sidebar from '../../components/HeaderFooter/Sidebar'
import Topbar from '../../components/HeaderFooter/Topbar'
import './home.css'
// import Card from '../../components/ProjectCard/Card'
// import ManageProjects from '../ManageProjects/ManageProjects'
// import Reports from '../ReportsAndDocs/Reports'
// import AdminComments from '../../components/Utils/AdminComments'
// import SubmitRevision from '../../components/Utils/Submision'
// import SubmissionHistory from '../../components/Utils/SubmissionHistory'
// import AdminSidebar from './admin_Sidebar'
import InvestSidebar from './invest_sidebar'

function InvestBase({PageContent}) {
  return (
    <div className="container">
        <div className="home_content">
            <div className="home_left">
                <InvestSidebar />
            </div>
            <div className="home_right">
              <Topbar />
              {PageContent}
            </div>
        </div>
    </div>
  )
}

export default InvestBase
