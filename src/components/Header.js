import React from 'react'
import { Link } from 'react-router-dom'
import './Allstyles.css'

function Header() {
  return (
    <div className='header'>
        <h2><span className='covid'>COVID</span> 19 TRACKER</h2>
        <div>
<Link to={'/'}>
            <button className='btn btn-success '>Home</button>

</Link>          </div>
    </div>
  )
}

export default Header