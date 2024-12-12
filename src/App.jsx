import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home'
import Base from './pages/Home/Base';
import Feedback from './pages/Feedback/Feedback';
import Reports from './pages/Forms/Reports';
import Workflow from './pages/Workflow/Workflow';
import AskAnything from './pages/AskAnything/AskAnything';
import MessageGroup from './pages/Chat/MessageGroup';
import AdminBase from './users/admin/AdminBase';
import AdminHome from './users/admin/adminHome';
import InvestBase from './users/investigator/investBase';

import ProjectProposalForm from './users/investigator/addProposal';
import ViewProjectProposalForm from './users/admin/viewProposals';
import InvestHome from './users/investigator/investHome';
import ProjectDetails from './pages/ProjectInfo/projectSummary';
import ProjectBase from './pages/ProjectInfo/ProjectBase';
import FinanceDashboard from './pages/ProjectInfo/Finance';
import FundRequisition from './pages/Forms/MainForms/fundrequisation';
import ProjectCompletionForm from './pages/Forms/MainForms/ProjectCompletion';
import CreateUser from './pages/Signup/CreateUser';
import ProjectRevisionForm from './pages/Forms/MainForms/ProjectExtension';
import FundRequirementForm from './pages/Forms/MainForms/fundrequisation';
import ExpenditureStatementForm from './pages/Forms/MainForms/QuaterlyExpenditure';
import CapitalEquipmentExpenditureForm from './pages/Forms/MainForms/CapitalExpenditure';
import QuarterlyStatusReportForm from './pages/Forms/MainForms/QuaterlyStatusReport';
import ExtensionOfProjectDurationForm from './pages/Forms/MainForms/ProjectExtension';
import RevisionOfCostForm from './pages/Forms/MainForms/RevisionofCost';
import ComputerSoftwareForm from './pages/Forms/MainForms/ComputerSoftware';
import ManpowerCostForm from './pages/Forms/MainForms/Manpower';
import EquipmentDetailsForm from './pages/Forms/MainForms/EquipmentDetails';
import TravelExpenditureForm from './pages/Forms/MainForms/TravelExpenditure';
import EndorsementForm1 from './pages/Forms/MainForms/Endorsement';
import NotificationApp from './pages/Notifications/Notifications';
import AI from './pages/Aibot/AI';
import ProjectForm from './pages/Screens/addProjectAdmin';
import ProjectTimeline from './pages/Screens/addTimeLine';
import AddFund from './pages/Screens/addFund';
import GanttChart from './components/Utils/Gantt';
import HelpAndSupport from './pages/Screens/helpandsupport';
import SecurityPage from './pages/Screens/security';
function App() {
  const [count, setCount] = useState(0)
  const [serachState, setSearchState] = useState('')
  
  const router = createBrowserRouter([
    {
      path: '/admin-home',
      element: (
        <>
          <AdminBase serachState={serachState} setSerachState={setSearchState} PageContent={<AdminHome serachState={serachState} setSerachState={setSearchState} />}/>
        </>
      )
    },
    {
      path: '/research-home',
      element: (
        <>
          <Base PageContent={<Home />} />
        </>
      )
    },
    {
      path: '/invest-home',
      element: (
        <>
          <InvestBase PageContent={<InvestHome />} />
        </>
      )
    },
    {
      path: '/projectSummary/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<ProjectDetails />} />
        </>
      )
    },
    {
      path: '/review-home',
      element: (
        <>
          <Base PageContent={<Home />} />
        </>
      )
    },
    
    {
      path: '/addProposal',
      element: (
        <>
         <InvestBase PageContent={<ProjectProposalForm />} />
        </>
      )
    },
    {
      path: '/helpadmin',
      element: (
        <>
         <AdminBase PageContent={<HelpAndSupport />} />
        </>
      )
    },
    {
      path: '/helpinvest',
      element: (
        <>
         <InvestBase PageContent={<HelpAndSupport />} />
        </>
      )
    },
    {
      path: '/viewProposal',
      element: (
        <>
          <AdminBase PageContent={<ViewProjectProposalForm />} />
        </>
      )
    },
    {
      path: '/securityinvest',
      element: (
        <>
          <InvestBase PageContent={<SecurityPage />} />
        </>
      )
    },
    {
      path: '/securityadmin',
      element: (
        <>
          <AdminBase PageContent={<SecurityPage />} />
        </>
      )
    },

    {
      path: '/aichat',
      element: (
        <>
          <AI />
        </>
      )
    },
    // {
    //   path: '/addInvest',
    //   element: (
    //     <>
    //       <Signup/>
    //     </>
    //   )
    // },
    {
      path: '/ganttChat/:projectid',
      element: (
        <GanttChart />
      )
    },
    {
      path: '/',
      element: (
        <Signup />
      )
    },
    {
      path: '/createAccount',
      element: (
        <CreateUser />
      )
    },
    {
      path: '/chat',
      element: (
        <Base PageContent={<MessageGroup />} />
      )
    },
    {
      path: '/feedback',
      element: (
        <>
          <Base PageContent={<Feedback />} />
        </>
      )
    },
    {
      path: '/reportsDocs/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<Reports />} />
        </>
      )
    },
    {
      path: '/fundrequestion/:projectid/',
      element: (
        <>
          <ProjectBase PageContent={<FundRequirementForm />} />
        </>
      )
    },
    {
      path: '/proCompletion/:projectid/',
      element: (
        <>
          <ProjectBase PageContent={<ProjectCompletionForm />} />
        </>
      )
    },
    {
      path: '/quaterlyexpenditure/:projectid/',
      element: (
        <>
          <ProjectBase PageContent={<ExpenditureStatementForm />} />
        </>
      )
    },
    {
      path: '/capitalexpenditure/:projectid/',
      element: (
        <>
          <ProjectBase PageContent={<CapitalEquipmentExpenditureForm />} />
        </>
      )
    },
    {
      path: '/quaterlystatus/:projectid/',
      element: (
        <>
          <ProjectBase PageContent={<QuarterlyStatusReportForm />} />
        </>
      )
    },
    {
      path: '/workflow',
      element: (
        <>
          <Base PageContent={<Workflow />} />
        </>
      )
    },
    {
      path: '/askAnythingadmin',
      element: (
        <>
          <AdminBase PageContent={<AskAnything />} />
        </>
      )
    },
    {
      path: '/askAnythinginvest',
      element: (
        <>
          <InvestBase PageContent={<AskAnything />} />
        </>
      )
    },
    {
      path: '/finances/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<FinanceDashboard />} />
        </>
      )
    },
    {
      path: '/project-extension/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<ExtensionOfProjectDurationForm />} />
        </>
      )
    },
    {
      path: '/cost-extension/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<RevisionOfCostForm />} />
        </>
      )
    },
    {
      path: '/computersoftware/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<ComputerSoftwareForm />} />
        </>
      )
    },
    {
      path: '/manpower/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<ManpowerCostForm />} />
        </>
      )
    },
    {
      path: '/travelexpenditure/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<TravelExpenditureForm />} />
        </>
      )
    },
    {
      path: '/endorsement/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<EndorsementForm1 />} />
        </>
      )
    },
    {
      path: '/otherequipment/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<EquipmentDetailsForm />} />
        </>
      )
    },
    {
      path: '/notifications/:projectid',
      element: (
        <>
          <ProjectBase PageContent={<NotificationApp />} />
        </>
      )
    },








    {
      path: '/addProjectAdmin',
      element: (
        <>
          <AdminBase PageContent={<ProjectForm />} />
        </>
      )
    },
    {
      path: '/addTimeLine',
      element: (
        <>
          <AdminBase PageContent={<ProjectTimeline />} />
        </>
      )
    },
    {
      path: '/addFunds',
      element: (
        <>
          <AdminBase PageContent={<AddFund />} />
        </>
      )
    },


  ])

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
      {/* <Signup /> */}
      {/* <Home /> */}
    </>
  )
}

export default App
