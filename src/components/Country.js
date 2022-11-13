import React, { useEffect, useState } from 'react'
import './Home.css'

import { useDispatch, useSelector } from 'react-redux'
import { countrycovid } from '../redux/actions/countryAction'
import CountryCard from './CountryCard'
import { Link } from 'react-router-dom'
import axios from 'axios'



function Country() {
  const [content,setContent] =useState([])


  const fetchSearch = async () => {
    const { data } = await axios.get('/coviddata.json');
     setContent(data.countries_stat);
   };


   console.log("search",content);








 const dispatch = useDispatch();

const covidContent = useSelector(state => state.countryReducer)

const {country}  = covidContent







const [filter,setFilter] = useState("USA");


console.log("country",country);

function onFilterValueChanged(event){
console.log(event.target.value);
const result = country.filter((curElem)=>(
    curElem.country_name === event.target.value
));
setFilter(result)
};

console.log("filtered",filter);


  useEffect(() => {
    fetchSearch()
dispatch(countrycovid())
        // eslint-disable-next-line
  },[]);




  return (
    <div className='country'>
                <div className='row me-0 ms-0'>
  <div className='col-8 col-lg-8'>
  <h4 className='tophead'>Covid 19 Data by Country wise</h4>
  </div>
  <div className='col-4 col-lg-4'>

  </div>
</div>
                
<div className='row me-0 ms-0'>
    <div className='col-lg-4'></div>
    <div className='col-lg-4'>
    <div className='selectbox'>
    <select onChange={onFilterValueChanged} className="form-select w-100" aria-label="Default select example">
    <option disabled selected>Select Your Country</option>

{content?.map((item)=> (
   
        <>
      <option  className='options' value={item.country_name} >{item.country_name}</option>
        </>
  
))}
 </select>
      
                </div>
    </div>
    <div className='col-lg-4'>
    </div>

</div>


                
                <CountryCard  item={filter}/> 
    </div>
  )
}

export default Country