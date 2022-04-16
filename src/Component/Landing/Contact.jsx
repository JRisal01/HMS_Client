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
      // console.log(error)
    }
  
}

    return (
      <div className="contact-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from
              here. It's my pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="input-box message-box">
                <textarea type="text" placeholder="Enter your Messages" value={messages} onChange={(e)=>{setMessages(e.target.value)}}/>
              </div>
              <div className="button">
                <button type="button" value="Send Now" onClick={validateEmail}> Send Now </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
};

export default Contact;