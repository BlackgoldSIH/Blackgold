import React, { useState } from 'react'
import Dropdown from '../../components/Utils/Dropdown'
import FormCard from '../../components/Utils/FormsCard'
import './reports.css'
import SubmittedReports from './SubmitedRepo'
import FileManagement from './FileManagement'
function Reports() {
  const [selectedComponent, setComponent] = useState('Submitted Reports')
  return (
    <div className="container">
      <div className="reports_content">
        <div className="dropdown_documents">
          <Dropdown setComponent={setComponent} />
        </div>
        <div className="submited_reports">

        </div>
        <div className="reports_forms">
          {selectedComponent === "Submitted Reports" && <SubmittedReports />}
          {selectedComponent === "Required Forms" && (
            <>
              <FormCard />
              <FormCard />
              <FormCard />
              <FormCard />
            </>
          )}
          {selectedComponent === "Document Repository" && <FileManagement />}

          {/* <SubmittedReports />
            <FormCard />
            <FormCard />
            <FormCard />
            <FormCard />
            <FileManagement /> */}
        </div>
      </div>
    </div>
  )
}

export default Reports
