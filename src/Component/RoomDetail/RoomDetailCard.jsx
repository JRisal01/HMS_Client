import React, {useEffect, useState} from 'react'

export default function RoomDetailCard({features}) {
  //  console.log(features)
  return (
    <div className="room-detail-card">
        {features?.map((items,i)=>(
            <div className="room-detail-card-body">
                {items}
            </div>
        ))}
    </div>
  )
}
