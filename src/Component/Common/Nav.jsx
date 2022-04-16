import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Nav() {

        const handleLogout = () => {
            localStorage.removeItem("token");
            window.location.reload();
            window.location = "/login";
        };
  return (
      
    <section className="main-nav">
            <div className="main-nav__wrapper">
                <div className="main-nav__mobile-wrapper">
                    <div className="main-nav__logo">
                        <button className="main-nav__logo-link"><img src="/storage/logo.png" alt="" /></button>
                    </div>
                    <div className="main-nav__menu">
                        <ul className="main-nav__list">
                            <li className="main-nav__items ">
                                <NavLink to="/" className="main-nav__link">Home</NavLink>
                            </li>
                            <li className="main-nav__items">
                                <NavLink to="/room" className="main-nav__link">Rooms</NavLink>
                            </li>
                            <li className="main-nav__items">
                                <NavLink to="/contact" className="main-nav__link">Contacts</NavLink>
                            </li>
                            <li className="main-nav__items">
                                <NavLink to="/gallery" className="main-nav__link">Gallery</NavLink>
                            </li>
                            <li className="main-nav__items">
                                <NavLink to="/about" className="main-nav__link">ABOUT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <button to="/login" onClick={handleLogout}>
                        Logout
                    </button>

                </div>
                {/* <img src="/storage/hamburger.png" alt="" className="main-nav__hamburger" style="width: 40px;" /> */}
               
            </div>
        </section>
        
  )
}
