import React from 'react'
import './Card.css'
import './CountryCard.css'

function CountryCard({item}) {

    console.log("content",item[0]);
  return (
    <>
        
            <div className='country d-flex ms-4 mt-4 ms-lg-5 mt-lg-0'>
                <h3 className='countryname'>Country : <span className='countryval'>{item[0].country_name}</span></h3>
            </div>
        
    
    <div className='maincard'>

    <div className="cards">
    <div className="card countrycard card-1">
    <h2 className="card__title">New cases</h2>
    <h5><span>+</span>{item[0].new_cases}</h5>
      <h2 className="card__title mt-1 mt-lg-5">Total cases</h2>
      <h5>{item[0].cases}</h5>
    </div>
    <div className="card countrycard card-2">
    <h2 className="card__title1">New Deaths</h2>
    <h5><span>+</span>{item[0].new_deaths}</h5>
      <h2 className="card__title1 mt-1 mt-lg-5">Total Deaths</h2>
      <h5>{item[0].deaths}</h5>
    </div>
    <div className="card countrycard card-3">
    
      <h2 className="card__title2 mt-5 mt-lg-5">Active Cases</h2>
      <h5 className='mb-5'>{item[0].active_cases}</h5>
    </div>
    <div className="card countrycard card-4">
    
      <h2 className="card__title3 mt-5 mt-lg-5">Total Recovered</h2>
      <h5 className='mb-5'>{item[0].total_recovered}</h5>
    </div>
    <div className="card countrycard card-2">
    
    <h2 className="card__title4 mt-5 mt-lg-5">Serious Critical</h2>
    <h5 className='mb-5'>{item[0].serious_critical}</h5>
  </div>
    <div className="card countrycard card-1">
      <h2 className="card__title mt-5 mt-lg-5">Total Tests</h2>
      <h5 className='mb-5'>{item[0].total_tests}</h5>

    </div>


  </div>


 



    </div>
    </>
  )
}

export default CountryCard