import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Component/Home/Home'

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}
