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

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {/* <Home /> */}
          <Base PageContent={<Home />} />
        </>
      )
    },
    {
      path: '/login',
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
