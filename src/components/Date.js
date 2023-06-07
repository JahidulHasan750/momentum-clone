import React from 'react';
import Moment from 'react-moment';
import { MomentTimezone } from 'moment';

const DateToday = () => {
    let today= new Date();
    let date= today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();
  return (
    <div><p className='text-4xl p-5'>{date}</p></div>
  )
}

export default DateToday