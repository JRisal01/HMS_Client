import React from 'react'
import NavBanner from '../Common/NavBanner'
import Contact from '../Landing/Contact'

export default function ContactPage() {
  return (
    <div>
        <NavBanner title = {'Contact'}/>
        <Contact />
        <iframe className='contact_map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7402010766195!2d85.33032134323152!3d27.69442348198285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a2d3d17ce1%3A0xaa1ab6962fdd5007!2sLakhe%20Chaur%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1648972439290!5m2!1sen!2snp"
              width="100%"
              height="700px"
              margin=" auto"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    </div>
  )
}
