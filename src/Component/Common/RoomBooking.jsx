import React from 'react'

function saveData(data){
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


export default function RoomBooking() {

    const [name, setName] = useState("Jeevan Risal");
    const [email, setEmail] = useState("jrisal74@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState(9869421611);
    const [status, setStatus] = useState("Paid");
    const [roomType, setRoomType] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    //need to update child adult

    const guestInfo = {name, email, phoneNumber, status, roomType, checkIn, checkOut};

  return (
    <div class="booking-form">

        <div  class="booking-form-wrapper">
            <label> CHECK IN</label>
            <input type="date" class="booking-form-input" />
        </div>

        <div class="booking-form-wrapper"> 
            <label> CHECK OUT </label>
            <input type="date" class="booking-form-input" />
        </div>

        <div class="booking-form-wrapper">
             <label for="">ADULT </label>
            <input type="number" class="booking-form-input" />
        </div>

        <div class="booking-form-wrapper">
             <label for="">CHILD </label>
            <input  class="booking-form-input" type="number" />
        </div>

        <p>
            <button onClick={() => saveData(guestInfo)} class="booking-form-btn" >SUBMIT</button>
        </p>
    </div>
  )
}
