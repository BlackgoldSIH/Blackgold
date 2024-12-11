import React, { useEffect } from 'react'
import './home.css'
import ProjectCards from '../../components/ProjectCard/ProjectCards'
function InvestHome() {

  return (
    <div className="projects_container">
      <ProjectCards item={{"id":localStorage.getItem("id")}}/>
    </div>
  )
}

export default InvestHome
