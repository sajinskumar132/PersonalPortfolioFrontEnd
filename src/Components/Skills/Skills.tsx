import { useQuery } from '@apollo/client'
import { CircularProgress} from '@mui/material'
import { GET_Skills } from '../../Graphql/Query'
import { toast } from 'react-toastify'

function Skills() {
  const { loading, error, data } = useQuery(GET_Skills)
  try {
    if (error) {
      toast.error(error.message)
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <div id="skills" className=' pl-3 pr-3  lg:pl-[350px] lg:pr-[350px] mt-2 '>
      <h1 className=' text-center font-bold  text-2xl mb-3 mt-5'>My Tech Stack</h1>
      <p className=' text-center font-bold text-lg  text-[#666666]'>Technologies I’ve been working with recently</p>
      <div className=' flex flex-wrap justify-center gap-5 mt-8'>
        {loading ? <CircularProgress /> : <>
          {data && data.Skills.map((item: any) => {
            return <div className='bg-gradient-to-r from-blue-600 via-violet-500 to-sky-400 p-[2px] rounded-full'>
              {/* <img src={item.image} alt={item.name} className=' w-24 h-24 '/> */}
              <p className=' text-center text-lg font-semibold bg-white px-3 py-1 rounded-full'>{item.name}</p>
            </div>
          })}
        </>}
      </div>
    </div>
  )
}

export default Skills
