import React from 'react'
import { useState,useEffect } from 'react'
import {  Box  } from '@mui/system'
import {useParams } from 'react-router-dom'

import { Typography } from '@mui/material'
import {Videos} from './'
import { fetchApi } from '../utils/FetchApi'




const SearchFeed= () => {
   

const {searchTerm}=useParams()
const [videos,setvideos]=useState([])



 useEffect(()=>{
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setvideos(data.items))


  },[searchTerm])

  
  return (
    <Box p={2} sx={{overflow:'auto',height:'92vh',flex:2}}>
    <Typography variant='h4' fontWeight='bold' sx={{color:'white'}}>
      Search Reasult For :
      <span style={ {color:'#f31503'}}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos}/>
   </Box>
  )
}

export default SearchFeed