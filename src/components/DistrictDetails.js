import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';
import DistCard from './DistCard';

function DistrictDetails() {

    const [content,setContent] = useState([]);

    const params = useParams()





    const fetchKerala = async () => {
        const { data } = await axios.get('/keraladata.json');
        // console.log("datas",data.india[0].state_wise[0]);
         setContent(data.Kerala);
       };
    
       useEffect(() => {
        fetchKerala();
        },[]);
       console.log("data",content);

   
const details = content.find((i) => i.dist == params.dist)

console.log(details);

  return (
    <div>
        { details?(
        <DistCard details={details}/>
        ): 'null'}
    </div>
  )
}

export default DistrictDetails