import React from 'react'
import Nav from './Common/Nav'
import SideNav from './Common/SideNav'
import Guest from './Guests/Guest'



export default function Dashboard() {

  return (
    <div className='dashboard'>
      <Nav />
      <div class="admin-dashbord-container">
        <SideNav />
        <Guest />
      </div>
    </div>
  )
}
