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
              <FormCard obj={{"title":"Form-IA","description":"THE HEAD OF THE INSTITUTION (To be given on the letter head)","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-II","description":"FUND REQUISITION","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-III","description":"QUARTERLY EXPENDITURE STATEMENT","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-IV","description":"QUARTERLY EXPENDITURE STATEMENT ON CAPITAL EQUIPMENT","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-V","description":"QUARTERLY STATUS REPORT FOR S&T PROJECT OF MoC","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-VI","description":"PROJECT COMPLETION REPORT","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-VII","description":"DETAILS OF TRAVEL EXPENDITURE (TA/DA)","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-VIII","description":"REVISION OF THE COST OF THE PROJECT/RE-APPROPRIATION OF FUNDS","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-IX","description":"Details of Equipment other than Computer Hardware / Software already procured under S&T Scheme of Ministry of Coal / R&D fund of CIL in the past - which are related to the below mentioned S&T project ","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-X","description":"Details of Computers, Software and accessories already procured under S&T Scheme of Ministry of Coal / R&D fund of CIL in the past - which are related to the below mentioned S&T project","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-XI","description":"DETAILS OF MANPOWER COST (SALARY AND WAGES)","status":"Completed"}}/>
              <FormCard obj={{"title":"Form-XII","description":"DETAILS OF TRAVEL EXPENDITURE (TA/DA)","status":"Completed"}}/>
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
