import React from 'react'
import { Footer } from '../Componet/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Home } from '../Componet/Home/Home'

export const Layout = () => {
  return (
  <>
        <Home />
        <Outlet />
        <Footer />
  </>
  )
}