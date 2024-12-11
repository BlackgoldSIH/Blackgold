import React from 'react'
import './home.css'
import ProjectCards from '../../components/ProjectCard/ProjectCards'
function AdminHome() {
  return (
    <div className="projects_container">
      <ProjectCards item={{"id":0}}/>
    </div>
  )
}

export default AdminHome
