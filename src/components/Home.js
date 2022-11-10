import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Home.css'


function Home() {

const [data, setData] = useState([])


  






  return (
    <div className='home'>

        <h4 className='tophead'>Covid 19 Data by World Wild</h4>
<Card data={data}/>

    </div>
  )
}

export default Home