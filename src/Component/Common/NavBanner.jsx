import React from 'react'
import Nav from './Nav'

export default function NavBanner(props) {
    console.log(props)
  return (
    <div class="nav_banner">
        <Nav />
        <div class="nav_banner-text">
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}
