import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Newproduct from './pages/Newproduct.jsx';
import Signup from './pages/Signup.jsx';

const router=createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route index element={<Home/>}/>
<Route path='menu' element={<Menu/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='login' element={<Login/>} />
<Route path='newproduct' element={<Newproduct/>} />
<Route path='signup' element={<Signup/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
