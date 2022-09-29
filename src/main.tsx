import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <div className='w-full min-h-screen text-white bg-primary text-opacity-80 '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
