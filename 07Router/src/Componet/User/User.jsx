import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-400 text-3xl text-white'>User: {userid}</div>
  )
}