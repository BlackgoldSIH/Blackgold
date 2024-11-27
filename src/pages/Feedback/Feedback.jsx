import React from 'react'
import AdminComments from '../../components/Utils/AdminComments'
import SubmitRevision from '../../components/Utils/Submision'
import SubmissionHistory from '../../components/Utils/SubmissionHistory'

function Feedback() {
  return (
    <div className="feedback_container">
        <AdminComments />
        <SubmitRevision />
        <SubmissionHistory />
    </div>
  )
}

export default Feedback
