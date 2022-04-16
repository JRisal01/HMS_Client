import React, {useState, useEffect} from 'react'
import axios from 'axios';

function saveData(data){
    // console.log(data)
  
    try {
      const response =  axios({
        method: 'post',
        url: `http://localhost:5000/guest`,
        data: data,
        
      });
      window.location.reload(true);
      
    } catch(error) {
    }
  
  }


export default function RoomBooking(props) {


  const [roomDetail, setRoomDetail] = useState(null);



  const room = props.id;


  const user = (JSON.parse(localStorage.getItem("user")));


    const [name, setName] = useState((user.firstName + " " + user.lastName));
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [status, setStatus] = useState("Paid");
    const [roomType, setRoomType] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    useEffect(() => {
      // Update the document title using the browser API
      setRoomType(room);
    });

    console.log(roomType);

    const guestInfo = {name, email, phoneNumber, status, roomType, checkIn, checkOut};

  return (
    <div className="booking-form">

        <div  className="booking-form-wrapper">
            <label> CHECK IN</label>
            <input type="date" className="booking-form-input" value={checkIn} onChange={(e)=>{setCheckIn(e.target.value)}}/>
        </div>

        <div className="booking-form-wrapper"> 
            <label> CHECK OUT </label>
            <input type="date" className="booking-form-input" value={checkOut} onChange={(e)=>{setCheckOut(e.target.value)}}/>
        </div>

        <div className="booking-form-wrapper">
             <label for="">Phone Number </label>
            <input type="number" className="booking-form-input" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        </div>

        <div className="booking-form-wrapper">
             <label for="">Email </label> 
            <input  className="booking-form-input" type="string" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <p>
            <button onClick={() => saveData(guestInfo)} className="booking-form-btn" >SUBMIT</button>
        </p>
    </div>
  )
}
