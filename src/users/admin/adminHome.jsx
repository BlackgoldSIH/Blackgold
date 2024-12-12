import React from 'react'
import './home.css'
import ProjectCards from '../../components/ProjectCard/ProjectCards'
function AdminHome(serachState, setSearchState) {
  return (
    <div className="projects_container">
      <ProjectCards serachState={serachState}  item={{"id":0}}/>
    </div>
  )
}

export default AdminHome
