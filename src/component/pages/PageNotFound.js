import React from 'react'
import {Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
       <h2>PageNotFound</h2>
       <Link to='/'>Go back home page </Link> 

    </div>
  )
}

export default PageNotFound