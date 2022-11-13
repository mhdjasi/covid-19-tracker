import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Kerala.css'

function Kerala() {

    const [content,setContent] = useState([]);



    const fetchKerala = async () => {
        const { data } = await axios.get('/keraladata.json');
        // console.log("datas",data.india[0].state_wise[0]);
         setContent(data.Kerala);
       };
    
       useEffect(() => {
        fetchKerala();
        },[]);
       console.log("data",content);




  return (
   
    <div className='cards pt-1'>
    {content?.map((item)=> (
   
   <>
<Link key={item.dist}  to={`/distdetails/${item.dist}`} style={{textDecoration:"none"}}>
    <div className='distcard keralacard'>
            <h4>{item.dist}</h4>
        </div>
</Link>
       </>

))}
    </div>
    
    

    
  )
}

export default Kerala