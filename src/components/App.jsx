import React from 'react'
import './app.less'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './main/Main'
import Card from "./card/card";

const App = () => {
  const dispatch = useDispatch()

  return (
        <div className='container'>
            <BrowserRouter>
               <Routes>
                   <Route exact path='/' element={<Main/>}/>
                   <Route path='/card/:username/:reponame' element={<Card/>}/>
                   <Route path='*' element={<Main/>}/>
               </Routes>
            </BrowserRouter>
           </div>

  )
}

export default App
