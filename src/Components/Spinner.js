import React from 'react'
import Loading from '../loading.gif'
export default function Spinner() {
  return (
    <div className='text-center'>
        <img style={{width:'40px'}} src={Loading} alt="loading" />
    </div>
  )
}
