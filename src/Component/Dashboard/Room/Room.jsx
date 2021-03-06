import React from 'react'
import Nav from '../Common/Nav'
import SideNav from '../Common/SideNav'
import Form from './Form'
import Table from './Table'

export default function AdminRoom() {
  const [edit, setEdit] = React.useState(null);
  return (
    <div className='dashboard'>
      <Nav />
      <div className="admin-dashbord-container">
        <SideNav />
        <div className="admin-dashboard-details user-dashbord-container">
          <Table  setEdit={setEdit} />
          <Form edit={edit} />
        </div>
      </div>
    </div>
  )
}


