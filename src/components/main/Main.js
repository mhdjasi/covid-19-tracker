import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

function Main() {
  return (
    <div className='mainpart row w-100'>
      <div className=' col-lg-6 '>
        
      <Link to={'/home'} style={{textDecoration:"none",color:'white'}}><div className='startcard w-75'>
              <h3>WORLD DATA</h3>
          </div></Link>

          <Link to={'/country'} style={{textDecoration:"none",color:'white'}} ><div className=' startcard st2 w-75'>
              <h3>COUNTRY WISE DATA</h3>
          </div></Link>

          <Link to={'/kerala'} style={{textDecoration:"none",color:'white'}}><div className=' startcard st3 w-75'>
              <h3>KERALA &nbsp; DATA</h3>
          </div></Link>
          
      </div>
      <div className='col-lg-6 maindiv'>

      </div>
    </div>
  )
}

export default Main