import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from "./"
import { fetchApi } from '../utils/FetchApi'

const ChannelDetail = () => {
  const {id} = useParams()
  
  const [channelDetail,setchannelDetail] = useState(null)
  

  const [videos,setvideos] = useState([])


  //console.log(videos)
  useEffect(()=>{
    fetchApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setchannelDetail(data?.items[0]))


    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setvideos(data?.items))

  },[id])

  return (
    <Box>
      <Box >
        <div style={{
        background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        height:"300px",zIndex:10}}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      
        </Box>
     <Box display="flex" p={2} marginRight="150px">
        <Box sx={{mr:{sm:"100px"} }}/>
          <Videos videos={videos}></Videos>
     
     </Box>
   </Box>

  )
}

export default ChannelDetail
