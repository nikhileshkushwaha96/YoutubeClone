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


// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?part=snippet%2Cid&channelId=UCBVjMGOIkavEAhyqpxJ73Dw&order=date");
// xhr.setRequestHeader("X-RapidAPI-Key", "caa2ac1ee4mshfffa4001cccb463p10e030jsn76bfe73b6122");
// xhr.setRequestHeader("X-RapidAPI-Hos", "youtube-v31.p.rapidapi.com");

// xhr.send(data);


///////////////////////////
// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date");
// xhr.setRequestHeader("X-RapidAPI-Key", "caa2ac1ee4mshfffa4001cccb463p10e030jsn76bfe73b6122");
// xhr.setRequestHeader("X-RapidAPI-Hos", "youtube-v31.p.rapidapi.com");

// xhr.send(data);