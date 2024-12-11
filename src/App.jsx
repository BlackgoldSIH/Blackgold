import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home'
import Base from './pages/Home/Base';
import Feedback from './pages/Feedback/Feedback';
import Reports from './pages/ReportsAndDocs/Reports';
import Workflow from './pages/Workflow/Workflow';
import AskAnything from './pages/AskAnything/AskAnything';
import MessageGroup from './pages/Chat/MessageGroup';
import AdminBase from './users/admin/AdminBase';
import AdminHome from './users/admin/adminHome';
import InvestBase from './users/investigator/investBase';

import ProjectProposalForm from './users/investigator/addProposal';
import ViewProjectProposalForm from './users/admin/viewProposals';
import InvestHome from './users/investigator/investHome';
function App() {
  const [count, setCount] = useState(0)
  
  const router = createBrowserRouter([
    {
      path: '/admin-home',
      element: (
        <>
          <AdminBase PageContent={<AdminHome />}/>
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
          <ProjectProposalForm />
        </>
      )
    },
    {
      path: '/viewProposal',
      element: (
        <>
          <ViewProjectProposalForm />
        </>
      )
    },

    {
      path: '/',
      element: (
        <Signup />
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
      path: '/reportsDocs',
      element: (
        <>
          <Base PageContent={<Reports />} />
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
      path: '/askAnything',
      element: (
        <>
          <Base PageContent={<AskAnything />} />
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
