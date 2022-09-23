import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import {Box,Stack, Typography} from "@mui/material" 
import { CheckCircle } from '@mui/icons-material'
import {Videos} from "./"
import { fetchApi } from '../utils/FetchApi'


const VideoDetail = () => {

  const {id} = useParams()
  //console.log('id:', id);
  
  const [videoDetail,setvideoDetail] = useState(null)
  const [videos,setvideos] =useState(null)


  useEffect(()=>{
    fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`)
             .then((data)=>setvideoDetail(data.items[0]))


    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)    
           .then((data)=>setvideos(data.items))     
  },[id])


   

   if(!videoDetail?.snippet) {
    return 'loading..'}

    
    
  // const VideoDetail: () => "loading.." 

  const {snippet:{title,channelId,channelTitle}} = videoDetail;

  return (
  <Box minHeight="95vh">
    <Stack direction={{xs:'column',md:'row'}} >
      <Box flex={1} >
         <Box sx={{width:'100%',position:'sticky',top:'86px'}} >
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className='react-player' height="74vh" width='95%' 
          controls/>

          <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>{title}</Typography>
          <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm:"subtitle1" ,md:"h6"}}color='#fff'>
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
              </Typography>
            </Link>

          </Stack>
          
          </Box> 

      </Box>
      <Box pd={2} py={{md:1,sx:5}}  justifyContent='center' alignItems='center'>
        <Typography color='#fff' position='sticky'>Suggested Videos</Typography>
      <Videos videos={videos} direction='column'/>

    </Box>

    </Stack>
   

  </Box>
  )
}

export default VideoDetail