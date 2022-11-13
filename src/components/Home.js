// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { listcovid } from '../redux/actions/covidAction'
import { Link } from 'react-router-dom'

function Home() {

const dispatch = useDispatch();

const covidContent = useSelector(state => state.covidReducer)

const {covid}  = covidContent







  useEffect(() => {
dispatch(listcovid())
    // eslint-disable-next-line
  },[]);






console.log("content",covid);



  return (
    <div className='home pb-3 pt-5'>

        
        


<div className='row me-0 ms-0'>
  <div className='col-12 col-lg-8'>
  <h4 className='tophead'>Covid 19 Data by World Wild</h4>
  </div>
  <div className='col-6 col-lg-4'>
    
  </div>
</div>


<Card covid={covid}/> 



    </div>



  )
}

export default Home