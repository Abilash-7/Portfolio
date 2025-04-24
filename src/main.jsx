import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from './components/Resume.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/resume' element={<Resume/>}/>
    </Routes>    
</BrowserRouter>


)
