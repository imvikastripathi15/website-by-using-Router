import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LayOut from './LayOut.jsx'

import About from './component/About/About.jsx'
import Home from './component/Home/Home.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from "./component/User/User.jsx"

import Github  ,{ githubInfoLoader } from "./component/Github/Github.jsx"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayOut/>,
//     children:[
//       {
//        path: "",
//       element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<LayOut/>}>
       <Route path='' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='Contact-us' element={<Contact/>}/>
       <Route path='User/:id' element={<User/>}/>
       <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
