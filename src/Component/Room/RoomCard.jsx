import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


import axios from 'axios';

export default function RoomCard() {

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
      <>
   
        <div>
            <section class="cards-wrapper">
            {room?.map((items,i)=>(
              <div class="card-grid-space">
                <Link  to={`/room/${items._id}`} class="card" href="#" >
                  <div>
                    <h1>{items.name + ` Room`}</h1>
                    {items.features?.map((items, i)=>(
                    <span>{items + ` || `}</span>
                    ))}
                    <div class="price">{items.rate + ` NPR / NIGHT`}</div>
                    <div class="tags">
                      <div class="tag">{items.bedtype +  ` Bed`}</div>
                    </div>
                    <Link to={`/room/${items._id}`}><button type="button" class=" View">View More</button></Link>
                  </div>
                </Link>
              </div>
              ))}
            </section>
        </div>
          
    </>
  )
}
