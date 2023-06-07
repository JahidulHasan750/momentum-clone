import React, { useEffect, useState } from 'react'
import axios from 'axios'


const url='https://api.open-meteo.com/v1/forecast?latitude=23.7731&longitude=90.3657&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'

const Weather = () => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    if(!data) return null;
  
  return (
    <div className='px-5 font-semibold text-5xl'>
        <p>{Math.floor(data.current_weather.temperature)}&deg;C</p>
        <p>Dhaka</p>
    </div>
  )
}

export default Weather