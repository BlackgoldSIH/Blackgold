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
import AdminSidebar from './admin_Sidebar'


function AdminBase({PageContent, setSearchState, searchState}) {
  return (
    <div className="container">
        <div className="home_content">
            <div className="home_left">
                <AdminSidebar />
            </div>
            <div className="home_right">
            <Topbar searchState={searchState} setSearchState={setSearchState} />
            {PageContent}
            </div>
        </div>
    </div>
  )
}

export default AdminBase
