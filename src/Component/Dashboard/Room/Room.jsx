import React from 'react'
import Nav from '../Common/Nav'
import SideNav from '../Common/SideNav'
import Form from './Form'
import Table from './Table'

export default function AdminRoom() {
  return (
    <div className='dashboard'>
      <Nav />
      <div class="admin-dashbord-container">
        <SideNav />
        <div class="admin-dashboard-details user-dashbord-container">
          <Table />
          <Form />
        </div>
      </div>
    </div>
  )
}


