import React, { Children } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
  <Header/>
  <Outlet/>
    </div>
  )
}

export default RootLayout
