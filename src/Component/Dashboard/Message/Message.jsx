import React from 'react'
import Nav from '../Common/Nav'
import SideNav from '../Common/SideNav'
import Table from './Table'


export default function Message() {

  return (
    <div className='dashboard'>
      <Nav />
      <div className="admin-dashbord-container">
        <SideNav />
        <div className="admin-dashboard-details user-dashbord-container">
        <Table />
        </div>
      </div>
    </div>
  )
}


