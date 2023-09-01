

import React from 'react'
import { Outlet } from 'react-router-dom'
import ENav from '../component/ENav'

const RootLayout = () => {
  return (
    <>
          <ENav />
          <Outlet />
     </>
  )
}

export default RootLayout

