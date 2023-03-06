import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <img src={props.resim} alt="" />
        <h2>{props.baslik}</h2>
        <p>{props.icerik}</p>
    </div>
  )
}

export default Card