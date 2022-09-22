import React from 'react'
import { useState,useEffect } from 'react'
import { Stack, Box  } from '@mui/system'

import { Typography } from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchApi } from '../utils/FetchApi'




const Feed = () => {
   
const [selectedcategory,SetselectedCategory] = useState("New")

const [videos,setvideos]=useState([])



 useEffect(()=>{
    fetchApi(`search?part=snippet&q=${selectedcategory}`)
    .then((data)=>setvideos(data.items))


  },[selectedcategory])

  


  return (
   <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>
    <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
      <Sidebar selectedcategory={selectedcategory} SetselectedCategory={SetselectedCategory}></Sidebar>
      <Typography className='copyright' variant='body2' sx={{color:'#fff', mt:1.5}} >Copyright 2022 from Youtube</Typography>
      
    </Box>
   <Box p={2} sx={{overflow:'auto',height:'92vh',flex:2}}>
    <Typography variant='h4' fontWeight='bold' sx={{color:'white'}}>
      {selectedcategory}
      <span style={ {color:'#f31503'}}>Videos</span>
    </Typography>
    <Videos videos={videos}/>
   </Box>

   </Stack>
  )
}

export default Feed