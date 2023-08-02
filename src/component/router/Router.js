import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Main'
import App from '../../App'

const Call = () => {
  return (
   <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
      <Route index element={<Main/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default Call
