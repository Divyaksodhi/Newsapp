// import React, { Component } from 'react'
import React from 'react'
import loadingspinner from './loadingspinner.gif'

// export class Spinner extends Component {
 const Spinner =()=>{ 
  // render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loadingspinner} alt="loadingspinner" />
      </div>
    )
  // }
}

export default Spinner
