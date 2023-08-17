import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Alert, CircularProgress, IconButton, Tooltip } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useQuery } from '@apollo/client';
import { GET_PersonalInfo } from '../../Graphql/Query';
import RobotImage from "../../Util/Images/RobotImage.png"
import RobotBackground from "../../Util/Images/RobotBackground.png"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Hero() {

  const { loading, error, data } = useQuery(GET_PersonalInfo)
  const [Text,setText]=useState("")
  useEffect(()=>{
      if(data && data.Personalinfo){
        setText(`I’m ${data.Personalinfo[0].name} Nice to meet you`)
        typeWriter()
      }
  },[data,Text])
  try {
    if (error) {
      toast.error(error.message)
    }
  } catch (error) {
    console.log(error)
  }
  const downloadURI = (url:string, name:string) => {
    const downloadLink = document.createElement("a");
    const fileName = name;
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.click()
  }
  
  var i = 0;
  var speed = 50;
 const typeWriter=()=>{
    if (i < Text.length) {
      document.getElementById("typetext")!.innerHTML += Text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  return (
    <div id="about"  className=' px-5 flex justify-center gap-[280px] items-center flex-wrap lg:pl-52 lg:pr-52 mt-10'>
      {loading ? <CircularProgress /> :
        <>
          {data && (
            <>
              <div>
                <h1 className=' text-4xl font-bold mb-2'><span>Hi, <WavingHandIcon fontSize='large' className=' text-[#ffcc44] text-3xl' /></span> <br/>
                <span id="typetext"></span> </h1>
                <h1 className=' font-semibold text-xl bg-gradient-to-r from-blue-600 via-violet-500 to-sky-400 bg-clip-text text-transparent mb-4 mt-3'>{data.Personalinfo[0].Position}</h1>
                <p className=' lg: max-w-xl font-semibold tracking-wide text-[#666666]'>{data.Personalinfo[0].Description}</p>
                <div className=' mt-3'>
                  <button className=' bg-blue-600 text-white font-bold rounded-lg px-2 py-1' onClick={()=>{
                    downloadURI(data.Personalinfo[0].Resume,"Sajin_S_Kumar Resume")
                  }}>Download Resume</button>
                  <Tooltip title={data.Personalinfo[0].emailId} arrow placement="top">
                    <IconButton >
                      <EmailIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={data.Personalinfo[0].linkedinId} arrow placement="top">
                    <IconButton onClick={()=>{
                      window.location.href = data.Personalinfo[0].linkedinId
                    }} >
                    <LinkedInIcon />
                    </IconButton>
                  </Tooltip>

                </div>

              </div>
              <div className='hidden lg:block relative w-80 h-80 '>
                <img className=' absolute mt-3' src={RobotBackground} alt='RobotBackground' />
                <img className=' absolute ' src={RobotImage} alt='RobotImage' />
              </div></>
          )}
        </>}
    </div>
  )
}

export default Hero
