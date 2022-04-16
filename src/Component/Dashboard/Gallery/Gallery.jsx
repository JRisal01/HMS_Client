import React from 'react'
import Nav from '../Common/Nav'
import SideNav from '../Common/SideNav'
import Form from './Form'



export default function Gallery() {

  return (
    <div className='dashboard'>
      <Nav />
      <div className="admin-dashbord-container">
        <SideNav />
        <div className="admin-dashboard-details user-dashbord-container">
        <Form />
        </div>
      </div>
    </div>
  )
}


