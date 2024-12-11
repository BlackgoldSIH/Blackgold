import React from 'react'
import Sidebar from '../../components/HeaderFooter/Sidebar'
import Topbar from '../../components/HeaderFooter/Topbar'
import './home.css'
import Card from '../../components/ProjectCard/Card'
import ManageProjects from '../ManageProjects/ManageProjects'
import Reports from '../Forms/Reports'
import AdminComments from '../../components/Utils/AdminComments'
import SubmitRevision from '../../components/Utils/Submision'
import SubmissionHistory from '../../components/Utils/SubmissionHistory'
function Base({PageContent}) {
  return (
    <div className="container">
        <div className="home_content">
            <div className="home_left">
                <Sidebar />
            </div>
            <div className="home_right">
              <Topbar />
              {PageContent}
            </div>
        </div>
    </div>
  )
}

export default Base
