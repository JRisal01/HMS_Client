import React, {useEffect, useState} from 'react'

export default function RoomDetailCard({features}) {
   console.log(features)
  return (
    <div class="room-detail-card">
        {features?.map((items,i)=>(
            <div class="room-detail-card-body">
                {items}
            </div>
        ))}
    </div>
  )
}
