import React from 'react'
import Nav from './Nav'

export default function Banner() {
  return (
      <>
    <video controls loop autoPlay muted id="myVideo">
        <source src="/storage/videos/promo.mp4" type="video/mp4" />
    </video>
    <section class="banner">
        <Nav />
        <section class="hero">
            <p class="hero__sub-title">Welcome To </p>
            <hr class="hero__line" />
            <h1 class="hero__title">Hotel Paradise</h1>
            <p class="hero__sub-title hero__sub-title--large">Experience the Havenly World</p>
            <button class="hero__button">
                <p class="hero__button-info">Check Availability</p>
                {/* <img src="./src/images/button-right.png" alt="" class="hero__button-arrow" /> */}
            </button>
        </section>

    </section>
        </>
  )
}
