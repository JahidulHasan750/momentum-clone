import React from 'react'
import Moment from 'react-moment'
import { MomentTimezone } from 'moment'
const Time = () => {
    let today=new Date();
    
    let greeting= ()=>{
        if(today.getHours()>=5 && today.getHours()<= 11){
            
            return "Good Morning. Have a great Day";
        }
        else if(today.getHours()>=11 && today.getHours()<=17){
           
            return "Good Afternoon. Hope you are having a good day.";
            
        }
        else if(today.getHours()>=17 && today.getHours()<=24){
            return "Good Evening. Hope you had a great day.";
        }
        else {
            return "Good Night. Sweet dreams.";
        }
    }
    
    
  return (
    <div className='w-full h-[50%] flex flex-col justify-end items-center text-center'>
        <p className='text-8xl text-bold' ><Moment format='LT'></Moment></p>
        <p className='text-bold text-6xl'>{greeting()}</p>
    </div>
  )
}

export default Time