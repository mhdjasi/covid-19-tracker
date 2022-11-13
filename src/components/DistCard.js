import React from 'react'
import './Distcard.css'


function DistCard({details}) {
  return (
    <div className='maincard'>

<h4 className='disthead'>{details.dist}</h4>
        <div className='cards mt-5 pb-4'>
            <div className="card itemcard card-11">
        <h2 className="card__title0 mt-4 mt-lg-4">Active Cases</h2>
        <h5 className='mb-5'>{details.active}</h5>
      </div>
      <div className="card itemcard card-12">
        <h2 className="card__title0 mt-4 mt-lg-5">Confirmed Cases</h2>
        <h5 className='mb-5'>{details.confirmed}</h5>
      </div>
      <div className="card itemcard card-13">
        <h2 className="card__title0 mt-4 mt-lg-5">Deceased Persons</h2>
        <h5 className='mb-5'>{details.deceased}</h5>
      </div>
      <div className="card itemcard card-14">
        <h2 className="card__title0 mt-4 mt-lg-5">Recovered</h2>
        <h5 className='mb-5'>{details.recovered}</h5>
      </div>
      <div className="card itemcard card-15">
        <h2 className="card__title0 mt-4 mt-lg-5">Migrated Other</h2>
        <h5 className='mb-5'>{details.active}</h5>
      </div>
      <div className="card itemcard card-16">
        <h2 className="card__title0 mt-4 mt-lg-5">Delta Cases</h2>
        <h5 className='mb-5'>Confirmed : &nbsp;{details.delta.confirmed}</h5>
      </div>
      <div className="card itemcard card-17">
        <h2 className="card__title0 mt-4 mt-lg-5">Delta Cases</h2>
        <h5 className='mb-5'>Recovered : &nbsp;{details.delta.recovered}</h5>
      </div>
        </div>
    </div>
  )
}

export default DistCard