import { useQuery } from '@apollo/client'
import {  CircularProgress, Divider } from '@mui/material'
import { GET_Experiences } from '../../Graphql/Query'
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { toast } from 'react-toastify';
function Experience() {
    const { loading, error, data } = useQuery(GET_Experiences)
    try {
        if (error) {
             toast.error(error.message)
        }
    } catch (error) {
        console.log(error)
    }
    const Collapsed = (HeaderClassId: string, ContentClassId: string) => {
        const Content = document.getElementById(ContentClassId) as HTMLElement
        if (Content) {
            Content.style.display = Content.style.display === 'none' ? 'block' : 'none';
        }

    }
    return (
        <div id="experience" className=' pl-3 pr-3 lg:pl-[350px] lg:pr-[350px] ' >
            <h1 className=' text-center font-bold text-2xl mt-10 mb-5 '>Work Experiences</h1>
            {loading ? <div className=' flex justify-center mt-5'> <CircularProgress /> </div> :
                <div id="collapsible" >
                    {data && data.Experience.map(((item: any, index: any) => {
                        return (
                            <div className=' py-5' key={index} >
                                <div id={`collapsible-header${index}`} onClick={() => {
                                    Collapsed(`collapsible-header${index}`, `collapsible-content${index}`)
                                }}>
                                    <div className=' grid grid-cols-12' >
                                        <div className=' col-span-12'>
                                            <div className=' flex justify-between items-center' >
                                                <div className=' flex  items-center gap-3'>
                                                <BusinessCenterIcon className=' text-[#666666] '/>
                                                <h1 className='font-semibold text-lg text-[#666666] capitalize'>{item.Posting}</h1>
                                                </div>
                                                <div>
                                                    <p className=' px-4 py-1 text-[#018C0F] bg-[#D7FFE0] rounded-full text-sm font-semibold'>Full Time</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className=' flex items-center justify-between  gap-6'>
                                                    <div className=' flex items-center gap-3'>
                                                        < ApartmentIcon className=' text-[#666666] '/>
                                                        <h1 className='text-lg text-[#666666] capitalize'>{item.CompanyName.toLowerCase()}</h1>
                                                    </div>
                                                    <div className=' flex gap-3 font-semibold m-2 text-[#666666] capitalize'>
                                                        <DateRangeIcon className=' text-[#666666] '/>
                                                        <h1>{item.StartDate}</h1>
                                                        <p>-</p>
                                                        <h1>{item.EndDate}</h1>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div id={`collapsible-content${index}`} style={{ display: 'none' }} className=' mt-4'>
                                    <h5 className=' pl-5 font-semibold '>Task/Responsibility</h5>
                                    {item && item.TaskOrResponsnibility.map((Taskitem:string,index:number) => {
                                        return (
                                            <div className=' flex gap-2 m-2' key={index}>
                                                <ArrowForwardIcon />
                                                <h1>{Taskitem}</h1>
                                            </div>
                                        )
                                    })}
                                </div>
                                <Divider variant="middle" />
                            </div>
                           
                        )
                    }))}

                </div>}
        </div>
    )
}

export default Experience
