import React from 'react'
import './Card.css'

function Card({covid}) {
console.log(covid);
  return (
    <div className='maincard'>

    <div className="cards mb-3">
    <div className="card card-1">
    <h2 className="card__title">New cases</h2>
    <h5><span>+</span>{covid.new_cases}</h5>
      <h2 className="card__title mt-1 mt-lg-5">Total cases</h2>
      <h5>{covid.total_cases}</h5>
    </div>
    <div className="card card-2">
    <h2 className="card__title1">New Deaths</h2>
    <h5><span>+</span>{covid.new_deaths}</h5>
      <h2 className="card__title1 mt-1 mt-lg-5">Total Deaths</h2>
      <h5>{covid.total_deaths}</h5>
    </div>
    <div className="card card-3">
    
      <h2 className="card__title2 mt-5 mt-lg-5">Active Cases</h2>
      <h5 className='mb-5'>{covid.active_cases}</h5>
    </div>
    <div className="card card-4">
    
      <h2 className="card__title3 mt-5 mt-lg-5">Total Recovered</h2>
      <h5 className='mb-5'>{covid.total_recovered}</h5>
    </div>
    <div className="card card-2">
    
    <h2 className="card__title4 mt-5 mt-lg-5">Serious Critical</h2>
    <h5 className='mb-5'>{covid.serious_critical}</h5>
  </div>
    <div className="card card-1">
      <h2 className="card__title mt-5">Last Updated</h2>
      <h5 className='mb-5'>{covid.statistic_taken_at}</h5>

    </div>


  </div>


 



    </div>
  )
}

export default Card