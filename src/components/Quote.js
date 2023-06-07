import axios from 'axios';
import React, { useEffect, useState } from 'react'


const url='https://api.quotable.io/quotes/random'

export const Quote = () => {
    const[data,setData]= useState(null);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    if(!data) return null;
    
  return (
    <div className='w-full h-[38%] flex flex-col justify-end items-center gap-3 font-bold text-2xl text-center '>
     <p>{data[0].content}</p>

     <p>{data[0].author}</p>
     
    </div>
  )
}
