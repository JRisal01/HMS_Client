import React, {useEffect, useState} from 'react'

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

    // console.log(room)

  return (
      <>
   
        <div>
            <section className="cards-wrapper">
            {room?.map((items,i)=>(
              <div className="card-grid-space">
                <a className="card" href="#" style="--bg-img: url('https://thecodest.co/images/code-review.png')" >
                  <div>
                    <h1>{items.name + ` Room`}</h1>
                    {items.features?.map((items, i)=>(
                    <span>{items + ` || `}</span>
                    ))}
                    <div className="price">{items.rate + ` NPR / NIGHT`}</div>
                    <div className="tags">
                      <div className="tag">{items.bedtype +  ` Bed`}</div>
                    </div>
                  </div>
                </a>
              </div>
              ))}
            </section>
        </div>
          
    </>
  )
}
