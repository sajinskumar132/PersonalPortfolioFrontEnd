import { useQuery } from '@apollo/client'
import { Alert, Chip, CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { GET_Skills } from '../../Graphql/Query'

function Skills() {
    const {loading,error,data}=useQuery(GET_Skills)
    try {
        if (error) {
          return (
            <Alert severity="error">{error.message}</Alert>
          )
        }
      } catch (error) {
        console.log(error)
      }
      console.log(data)
  return (
    <div id="skills" className=' pl-3 pr-3  lg:pl-[350px] lg:pr-[350px] '>
        {loading ?<CircularProgress /> :<>
      <h1 className=' text-center font-bold  text-2xl mb-3 mt-5'>My Tech Stack</h1>
      <p  className=' text-center font-bold text-lg  text-[#666666]'>Technologies I’ve been working with recently</p>
      <div className=' flex flex-wrap justify-center gap-5 mt-8'>
      {data && data.Skills.map((item:any)=>{return <div className='bg-gradient-to-r from-blue-600 via-violet-500 to-sky-400 p-[2px] rounded-full'>
        {/* <img src={item.image} alt={item.name} className=' w-24 h-24 '/> */}
        <p className=' text-center text-lg font-semibold bg-white px-3 py-1 rounded-full'>{item.name}</p>
      </div>
      })}
      </div>
      </>
      }
    </div>
  )
}

export default Skills
