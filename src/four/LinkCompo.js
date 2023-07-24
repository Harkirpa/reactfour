import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
  function LinkCompo() {
  return (
    <div className='navbar'>
      <Link to='/' className='element'>Home</Link>
      <Link to='/student'className='element'>Student</Link>
      <Link to='/contact'className='element'>Contact</Link>
    </div>
  )
}

export default LinkCompo


