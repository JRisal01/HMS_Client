
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Edit from './Edit';
import { NavLink } from 'react-router-dom';


function removeRoom(id){
    console.log(id)
  
    try {
      const response =  axios({
        method: 'delete',
        url: `http://localhost:5000/room/${id}`,
      });
      window.location.reload(true);
    } catch(error) {
      console.log(error)
    }
  
  }

export default function Table() {

  

    const [row, setRow] = useState(null);

    const url = 'http://localhost:5000/room'

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setRow(response.data);
            })
    }, [url])

    console.log(row)

  return (
    <div class="user-dashboard-table">

            <div>
                <h1 class="user-dashboard-table-heading">Room Lists</h1>
            </div>

            <table cellspacing="0">
                <tr class="user-dashboard-table-title">
                    <td>Image</td>
                    <td>Name</td>
                    <td>Room type</td>
                    <td>Bed type</td>
                    <td>Number of Room</td>
                    <td>Price</td>
                    <td>Action</td>

                </tr>

                {
                row
                ?.map((items, i) => (
                <tr>
                    <td><img src= {`http://localhost:5000/${items.roomImage}`} width="30px" style={{borderRadius: '50%', width: '40px', height: '40px'}} /></td>
                    <td>{items.name}</td>
                    <td>{items.roomtype}</td>
                    <td>{items.bedtype}</td>
                    <td>{items.noRoom}</td>
                    <td>{items.rate}</td>
                    <td><NavLink to="/room" style={{ width: '180px', height: '50px', fontSize: '12px', padding: '0px'}}>Show More</NavLink></td>
                </tr>
                ))}
            </table>
        </div>
  )
}



{/* <img  src="images/edit.svg" /> <img onClick={() => removeRoom(items._id)} src="images/del.svg" class="dashboard-table-action" /> */}