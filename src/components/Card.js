import React from 'react'
import './Card.css'

function Card({data}) {
  return (
    <div className='maincard'>
{data&&data?.map((item)=>(
    <div class="cards">
    <div class="card card-1">
    <h2 class="card__title">New cases</h2>
    <h5><span>+</span>204,268</h5>
      <h2 class="card__title mt-5">Total cases</h2>
      <h5>509,268,964</h5>
    </div>
    <div class="card card-2">
    <h2 class="card__title1">New Deaths</h2>
    <h5><span>+</span>204,268</h5>
      <h2 class="card__title1 mt-5">Total Deaths</h2>
      <h5>6,242,509</h5>
    </div>
    <div class="card card-3">
    
      <h2 class="card__title2 mt-5">Total Active</h2>
      <h5 className='mb-5'>6,242,509</h5>
    </div>
    <div class="card card-4">
    
      <h2 class="card__title3 mt-5">Total Recovered</h2>
      <h5 className='mb-5'>6,242,509</h5>
    </div>
    <div class="card card-2">
    
    <h2 class="card__title4 mt-5">Serious Critical</h2>
    <h5 className='mb-5'>42,510</h5>
  </div>
    <div class="card card-1">
      <h2 class="card__title mt-5">Statistic taken at</h2>
      <h5 className='mb-5'></h5>

    </div>


  </div>
  ))}

 



    </div>
  )
}

export default Card