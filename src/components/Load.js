import React, { Component } from 'react'
import book from "./Book.gif"

export class Load extends Component {
  render() {
    return (
        <div className="text-center">
        <img src={book} alt="" />
  
        </div>
    )
  }
}

export default Load
