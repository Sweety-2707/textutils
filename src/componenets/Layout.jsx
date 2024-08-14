import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header title="TextUtils"/>
    <Outlet/>
    </>
  )
}

export default Layout