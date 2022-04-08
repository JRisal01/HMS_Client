import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function Room() {

    const [room, setRoom] = useState(null);

    const url = 'http://localhost:5000/room'

    useEffect( () => {
        axios.get(url)
            .then ( response => {
                setRoom(response.data);
            })  
    }, [url])

    console.log(room)

  return (
    <section class="discover" style={{ 
        backgroundImage: `url("https://media-exp1.licdn.com/dms/image/C561BAQEdIVwaLO46vA/company-background_10000/0/1583259071940?e=2147483647&v=beta&t=C5h4fSdLk7QX_TVtOG3WlfcFwx5IftY8N0jswzAUgM4")` 
      }}>
        <div class="discover__wrapper">
            <h1 class="discover__title">Room</h1>
            <p class="discover__discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci
                tortor, pulvinar non purus quis, commodo dapibus ex. Aliquam luctus erat at.</p>
            <div class="discover__nav">
                <p class="discover__nav-item">Modern</p>
                <div class="discover__nav-dot"></div>
                <p class="discover__nav-item">Cultural</p>
                <div class="discover__nav-dot"></div>
                <p class="discover__nav-item">Endless Pools</p>
                <div class="discover__nav-dot"></div>
                <p class="discover__nav-item">Trakking</p>
            </div>
            <div class="slider">
                <div class="slider__body">
                    <div class="slider-card">
                            {
                        room
                        ?.map((items, i)=>  i<3 && (
                        <div class="slider-card__item slider-card__item--downhill">
                            <h2 class="slider-card__title">{items.roomtype}</h2>
                            <hr class="slider-card__line" />
                        </div>
                        ))}

                    </div>
                </div>
            </div>
            <button className='button'>Viwe More</button>
        </div>
    </section>
  )
}
