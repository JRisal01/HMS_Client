import React from 'react'
import Background from '../../images/background.png'
import Icon from '../../images/logo-1.svg'


export default function RoomBanner(props) {
  // console.log(props)
  return (
    <header className='header'>
        <img src={Background} width="100%" className='roomDetailBanner'/>

        <div className="room-detail-title">
            {props.title + ` Room`}
        </div>

        <div className="room-detail-title-logo">
            <img src={Icon} />
        </div>
    </header>
  )
}
