import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';

import RoomBooking from '../Common/RoomBooking'
import RoomBanner from './RoomBanner'
import RoomDetailCard from './RoomDetailCard'



export default function RoomDetail() {

    const [detail, setDetail] = useState(null);
    const { id } = useParams();
    const url = `http://localhost:5000/room/${id}`;



    useEffect( () => {
        axios.get(url)
            .then ( response => {
                setDetail(response.data);
                console.log("response.data")
            })
    }, [url])

    console.log(detail)


  return (
      <>
        <RoomBanner title = {detail?.name}/>
        <RoomDetailCard features = {detail?.features}/>
        <RoomBooking />
      </>
  )
}
