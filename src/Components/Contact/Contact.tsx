import { useQuery } from '@apollo/client';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GET_PersonalInfo } from '../../Graphql/Query';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
function Contact() {
  const { loading, error, data } = useQuery(GET_PersonalInfo)
  try {
    if (error) {
      toast.error(error.message)
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <div id="contact" className=' pl-2 pr-2 mt-5 mb-10'>
      <h1 className='text-center font-bold text-2xl mb-3 '>Contact</h1>
       <p className=' text-lg font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-sky-400 bg-clip-text text-transparent text-center'>For any questions, please email or connect via LinkedIn.</p>
      {loading ? <div className=' flex justify-center mt-3'> <CircularProgress /> </div> :
      <>
       {data && (
       <>
       <div className=' flex justify-center gap-3 flex-wrap mt-3'>
        <div className=' flex gap-2 items-center'>
          <EmailIcon />
          <p className=' font-semibold'>{data.Personalinfo[0].emailId}</p>
        </div>
         <div  className=' flex gap-2 items-center cursor-pointer' onClick={()=>{
           window.location.href = data.Personalinfo[0].linkedinId
         }}>
          <LinkedInIcon />
          <p className=' font-semibold max-w-[200px] break-words'>{data.Personalinfo[0].linkedinId}</p>
         </div>
       </div>
       </>)}
       </>}    
    </div>
  )
}

export default Contact
