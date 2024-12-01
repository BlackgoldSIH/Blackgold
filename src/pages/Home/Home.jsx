import React from 'react'
import Sidebar from '../../components/HeaderFooter/Sidebar'
import Topbar from '../../components/HeaderFooter/Topbar'
import './home.css'
import Card from '../../components/ProjectCard/Card'
import ManageProjects from '../ManageProjects/ManageProjects'
import Reports from '../ReportsAndDocs/Reports'
import AdminComments from '../../components/Utils/AdminComments'
import SubmitRevision from '../../components/Utils/Submision'
import SubmissionHistory from '../../components/Utils/SubmissionHistory'
import ProjectCards from '../../components/ProjectCard/ProjectCards'
function Home() {
  return (
    <div className="projects_container">
      <ProjectCards />

      {/* <ManageProjects /> */}
      {/* <Reports /> */}
      {/* <AdminComments />
              <SubmitRevision />
              <SubmissionHistory /> */}

    </div>
  )
}

export default Home
