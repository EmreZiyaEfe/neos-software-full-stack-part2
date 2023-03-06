import React from 'react'

function GetirCard(props) {
  return (
    <div className="myCard">
        <img src={props.cardImg} alt="" />
        <h2>{props.cardTitle}</h2>
        <p>{props.cardBody}</p>
    </div>
  )
}

export default GetirCard