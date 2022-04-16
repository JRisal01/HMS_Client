
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Form from './Form';


function removeGuest(id){
    console.log(id)
  
    try {
      const response =  axios({
        method: 'delete',
        url: `http://localhost:5000/guest/${id}`,
      });
      window.location.reload(true);
    } catch(error) {
      console.log(error)
    }
  
  }


export default function Table() {

    const [row, setRow] = useState(null);

    const url = 'http://localhost:5000/guest'

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setRow(response.data);
            })
    }, [url])

    console.log(row)

  return (
    <div className="admin-dashboard-table">

        <div>
            <h1 className="admin-dashboard-table-heading">Guest Details</h1>
        </div>

        <table cellspacing="0">
            <tr className="admin-dashboard-table-title">
                <td>#</td>
                <td>Name</td>
                <td>Check In</td>
                <td>Check Out</td>
                <td>Status</td>
                <td>Phone</td>
                <td>Room Type</td>
             
                <td>Actions</td>
            </tr>

            {
                row
                ?.map((items, i) => (
                <tr>
                    <td>{i}</td>
                    <td>{items.name}</td>
                    <td>{items.checkIn}</td>
                    <td>{items.checkOut}</td>
                    <td>{items.status}</td>
                    <td>{items.phoneNumber}</td>
                    <td>{items.roomType}</td>
                  
                    <td><img onClick={(e) => {console.log('asdk')}} src="images/edit.svg" /> <img onClick={() => removeGuest(items._id)} src="images/del.svg" className="dashboard-table-action" /></td>
                </tr>
                ))}



        </table>
    </div>
  )
}
