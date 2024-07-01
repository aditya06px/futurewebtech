import React from 'react'
import { Link } from 'react-router-dom'
import './GetQuotation.css'

function GetQuotation() {
  return (
    <div className='get-quotation'>
       <h2> Want Quotation For Your Project </h2>
       <button><Link to='/contact'> Get Now</Link></button>
    </div>
  )
}

export default GetQuotation;
