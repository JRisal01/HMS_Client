import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Nav() {
  return (
      
    <section class="main-nav">
            <div class="main-nav__wrapper">
                <div class="main-nav__mobile-wrapper">
                    <div class="main-nav__logo">
                        <buttom class="main-nav__logo-link"><img src="/storage/logo.png" alt="" /></buttom>
                    </div>
                    <div class="main-nav__menu">
                        <ul class="main-nav__list">
                            <li class="main-nav__items ">
                                <NavLink to="/" class="main-nav__link">Home</NavLink>
                            </li>
                            <li class="main-nav__items">
                                <NavLink to="/room" class="main-nav__link">Rooms</NavLink>
                            </li>
                            <li class="main-nav__items">
                                <NavLink to="/contact" class="main-nav__link">Contacts</NavLink>
                            </li>
                            <li class="main-nav__items">
                                <NavLink to="/gallery" class="main-nav__link">Gallery</NavLink>
                            </li>
                            <li class="main-nav__items">
                                <NavLink to="/about" class="main-nav__link">ABOUT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/admin" class="main-nav__button"> <button> Admin</button></NavLink>

                </div>
                {/* <img src="/storage/hamburger.png" alt="" class="main-nav__hamburger" style="width: 40px;" /> */}
               
            </div>
        </section>
        
  )
}
