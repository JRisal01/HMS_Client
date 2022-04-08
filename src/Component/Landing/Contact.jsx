import React, {useState, useEffect} from 'react';
import axios from 'axios';
import validator from 'validator'


const Contact = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[messages, setMessages] = useState("");

  function validateEmail(prop){
    if (validator.isEmail(email)) {
      saveMessage()
    } else {
      alert('Wrong Email')
    }
    
  }


  function saveMessage(){

    let data = {name, email, messages}
    console.log(data)
    setName('')
    setEmail('')
    setMessages('')


    try {
      const response =  axios({
        method: 'post',
        url: 'http://localhost:5000/contactMessage',
        data: data,
        body: data,
        boundary: '',
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch(error) {
      console.log(error)
    }
  
}

    return (
      <div class="contact-container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Surkhet, NP12</div>
              <div class="text-two">Birendranagar 06</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+0098 9893 5647</div>
              <div class="text-two">+0096 3434 5678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">codinglab@gmail.com</div>
              <div class="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from
              here. It's my pleasure to help you.</p>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div class="input-box message-box">
                <textarea type="text" placeholder="Enter your Messages" value={messages} onChange={(e)=>{setMessages(e.target.value)}}/>
              </div>
              <div class="button">
                <button type="button" value="Send Now" onClick={validateEmail}> Send Now </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
};

export default Contact;