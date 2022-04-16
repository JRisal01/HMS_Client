import React from 'react'
import Nav from './Nav'

export default function Banner() {
  return (
      <>
    <video controls loop autoPlay muted id="myVideo">
        <source src="/storage/videos/promo.mp4" type="video/mp4" />
    </video>
    <section className="banner">
        <Nav />
        <section className="hero">
            <p className="hero__sub-title">Welcome To </p>
            <hr className="hero__line" />
            <h1 className="hero__title">Hotel Paradise</h1>
            <p className="hero__sub-title hero__sub-title--large">Experience the Havenly World</p>
            <button className="hero__button">
                <p className="hero__button-info">Check Availability</p>
                {/* <img src="./src/images/button-right.png" alt="" className="hero__button-arrow" /> */}
            </button>
        </section>

    </section>
        </>
  )
}
