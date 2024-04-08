import React from 'react'
import {useParams} from "react-router-dom"
function User() {

    const {id} = useParams()
  return (
    <div className='bg-gray-400 p-2 text-center text-white'  >
      User:   {id}
    </div>
  )
}

export default User
