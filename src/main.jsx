import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter,Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Entertainment from './components/Entertainment/Entertainment';
import Business from './components/Business/Business';
import Sports from './components/Sports/Sports';
import Innovation from './components/Innovation/Innovation';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Submitted from './components/Contact/Submitted';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='entertainment' element={<Entertainment/>}/>
      <Route path='business' element={<Business/>}/>
      <Route path='sports' element={<Sports/>}/>
      <Route path='innovation' element={<Innovation/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='submitted' element={<Submitted/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
