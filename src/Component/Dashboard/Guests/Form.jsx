import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Table from '../Room/Table';



function saveDuest(data){
    console.log(data)
  
    try {
      const response =  axios({
        method: 'post',
        url: `http://localhost:5000/guest`,
        data: data,
      });
    //   window.location.reload(true);
    } catch(error) {
      console.log(error)
    }


    // axios.post(`http://localhost:5000/guest`, { data })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
  
  }

 


export default function Form({props}) {

    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");
    const [roomType, setRoomType] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const guestInfo = {name, email, phoneNumber, status, roomType, checkIn, checkOut};

    if(props == null){
        console.log("dfasdas")
    }
    else{
        // console.log(props)
        console.log('fuck')
    }
    

  return (
    <div class="admin-dashboard-form-container">

        <div class="admin-dashboard-form">
            <div>
                <h1 class="admin-dashboard-form-title">Add Guest</h1>
            </div>

            <div class="admin-dashboard-form-wrapper">
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div class="admin-dashboard-form-wrapper">
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>

            <div class="admin-dashboard-form-wrapper">
                <label> phoneNumber No. </label>
                <input type='number' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
            </div>

            <div class="admin-dashboard-status-check">
                <div class="admin-dashboard-form-wrapper">
                    <label>Status</label>
                    <select value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                        <option>Paid</option>
                        <option>Unpaid</option>
                        <option>Pending</option>
                    </select>
                </div>

                <div class="admin-dashboard-form-wrapper">
                    <label>Room type</label>
                    <select value={roomType} onChange={(e)=>{setRoomType(e.target.value)}}>
                        <option>Single Room</option>
                        <option>Double Room</option>
                        <option>Standard Room</option>
                        <option>Delxue Room</option>
                    </select>
                </div>
            </div>


            <div class="admin-dashboard-status-check">
                <div class="admin-dashboard-form-wrapper">
                    <label>Check In</label>
                    <input type="date" value={checkIn} onChange={(e)=>{setCheckIn(e.target.value)}} />
                </div>

                <div class="admin-dashboard-form-wrapper">
                    <label>Check Out</label>
                    <input type="date" value={checkOut} onChange={(e)=>{setCheckOut(e.target.value)}} />
                </div>
            </div>

            <div class="admin-dashboard-btn">
                <button onClick={() => saveDuest(guestInfo)}>Submit</button>
            </div>
        </div>
        

    </div>
  )
}
