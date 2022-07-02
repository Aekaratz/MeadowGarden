import React from 'react'
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'


export default function Route() {
  return (
   <BrowserRouter>
   <MainLayout>
    <Routes>
    <Route>

    </Route>
    </Routes>
   </MainLayout>
   </BrowserRouter>
  )
}
