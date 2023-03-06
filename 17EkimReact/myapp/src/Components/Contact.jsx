import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder='Adınız'/>
        <input type="text" placeholder='Soyadınız'/>
        <input type="text" placeholder='Yaşınız'/>
        <input type="submit" />
      </form>
    )
  }
}

export default Contact;