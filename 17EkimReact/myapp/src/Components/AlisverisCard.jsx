import React from 'react'
import Button from 'react-bootstrap/Button';

function AlisverisCard(props) {
  return (
    <div className="alisverisCard">
        <img width={200} src={props.image} alt="" />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <h5>{props.price}</h5>
        <Button variant="primary">İncele</Button>
    </div>
  )
}

export default AlisverisCard