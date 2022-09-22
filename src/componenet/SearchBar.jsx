import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

import {Search} from "@mui/icons-material"
import { Paper,IconButton } from '@mui/material'

const SearchBar = () => {

  const Navigate = useNavigate()
   
  const [searchTerm,setsearchTerm]= useState('')

  const changeHandler=(e)=>{
    e.preventDefault();

    if(searchTerm){
      Navigate(`/search/${searchTerm}`);

      setsearchTerm("")

    }

   


  }
  
  
  return (
  <Paper component='form'
    onSubmit={changeHandler}
    sx={{borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        mr:{sm:5}, 
        boxShadow:'none'}}>
  <input className='search-bar'
      value={searchTerm}
      placeHolder='Search...'
      onChange={(e)=>setsearchTerm(e.target.value)}/>
  <IconButton type='submit' sx={{p:'10px',color:'red'}}><Search/></IconButton>
    

  </Paper>
  )
}

export default SearchBar