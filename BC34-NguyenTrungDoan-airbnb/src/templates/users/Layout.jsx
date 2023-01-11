import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import FormPhong from "../../pages/TrangChu/FormPhong"
import Carousel from "../../pages/TrangChu/Carousel/Carousel"
export default function Layout() {
  return (
    <div>
      <Header />
     {/* <FormPhong/> */}

     <Carousel />

      {/* left  */}
      {/* hiện thị content của pages */}
      <Outlet />

      {/* right */}
      <hr className='m-5'/>
      <Footer />
    </div>
  )
}
