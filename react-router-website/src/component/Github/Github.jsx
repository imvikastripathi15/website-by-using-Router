import React from 'react'
import {useEffect,useState}from "react"

import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
// const [data, setData] = useState([])
//     useEffect(() =>{
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
//     setData(data)
// })
//     },[])
  return (
    <div className='bg-gray-200 p-2 text-center text-black' >
     GitHub Username: {data.name}
     

     

    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users/1')
    return response.json()
}