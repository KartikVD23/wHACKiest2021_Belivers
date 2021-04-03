import React from 'react'
import "./features.css"
import {FaCheckCircle} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import {FaBullseye} from 'react-icons/fa'
function features() {
    return (
          <div className="row">
        <div className="feat col-sm-4">
        <FaCheckCircle  className="btnicn"  size="100px"/>
            <h3>Easy To Use</h3>
        </div>
        <div className="feat col-lg-4">
        <FaBullseye className="btnicn"   size="100px"/>
        <h3>Elite Clientele</h3>
            </div> 
        <div className="feat col-lg-4">
        <FaHeart className="btnicn"   size="100px"/>
            <h3>Guaranteed to work</h3>
        </div>
        </div>
        
    )
}

export default features

