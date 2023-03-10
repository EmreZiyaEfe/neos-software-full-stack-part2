import React from 'react'

function Test(props) {
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}

Test.defaultProps = {
    title:"Deger girilmedi"
}
export default Test