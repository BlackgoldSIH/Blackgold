import React, { useEffect, useState } from 'react'
import Dropdown from '../../components/Utils/Dropdown'
import FormCard from '../../components/Utils/FormsCard'
import './reports.css'
import SubmittedReports from './SubmitedRepo'
import FileManagement from './FileManagement'
import { useParams } from 'react-router-dom'
function Reports() {
  const {projectid} = useParams();

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
              <FormCard obj={{"path":`endorsement/${projectid}`,"id":projectid,"title":"Form-IA","description":"THE HEAD OF THE INSTITUTION (To be given on the letter head)","status":"Completed"}}/>
              <FormCard obj={{"path":`fundrequestion/${projectid}`,"id":projectid,"title":"Form-II","description":"FUND REQUISITION","status":"Completed"}}/>
              <FormCard obj={{"path":`quaterlyexpenditure/${projectid}`,"id":projectid,"title":"Form-III","description":"QUARTERLY EXPENDITURE STATEMENT","status":"Completed"}}/>
              <FormCard obj={{"path":`capitalexpenditure/${projectid}`,"id":projectid,"title":"Form-IV","description":"QUARTERLY EXPENDITURE STATEMENT ON CAPITAL EQUIPMENT","status":"Completed"}}/>
              <FormCard obj={{"path":`quaterlystatus/${projectid}`,"id":projectid,"title":"Form-V","description":"QUARTERLY STATUS REPORT FOR S&T PROJECT OF MoC","status":"Completed"}}/>
              <FormCard obj={{"path":`proCompletion/${projectid}`,"id":projectid,"title":"Form-VI","description":"PROJECT COMPLETION REPORT","status":"Completed"}}/>
              <FormCard obj={{"path":`project-extension/${projectid}`,"id":projectid,"title":"Form-VII","description":"EXTENSION OF PROJECT DURATION  ","status":"Completed"}}/>
              <FormCard obj={{"path":`cost-extension/${projectid}`,"id":projectid,"title":"Form-VIII","description":"REVISION OF THE COST OF THE PROJECT/RE-APPROPRIATION OF FUNDS","status":"Completed"}}/>
              <FormCard obj={{"path":`otherequipment/${projectid}`,"id":projectid,"title":"Form-IX","description":"Details of Equipment other than Computer Hardware / Software already procured under S&T Scheme of Ministry of Coal / R&D fund of CIL in the past - which are related to the below mentioned S&T project ","status":"Completed"}}/>
              <FormCard obj={{"path":`computersoftware/${projectid}`,"id":projectid,"title":"Form-X","description":"Details of Computers, Software and accessories already procured under S&T Scheme of Ministry of Coal / R&D fund of CIL in the past - which are related to the below mentioned S&T project","status":"Completed"}}/>
              <FormCard obj={{"path":`manpower/${projectid}`,"id":projectid,"title":"Form-XI","description":"DETAILS OF MANPOWER COST (SALARY AND WAGES)","status":"Completed"}}/>
              <FormCard obj={{"path":`travelexpenditure/${projectid}`,"id":projectid,"title":"Form-XII","description":"DETAILS OF TRAVEL EXPENDITURE (TA/DA)","status":"Completed"}}/>
            </>
          )}
          {selectedComponent === "Document Repository" && <FileManagement id={projectid}/>}

        </div>
      </div>
    </div>
  )
}

export default Reports
