import React from 'react'
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/Content'
import SearchBar from './SearchBar'

const Navbar = () => 
  (
    <Stack direction='row' alignItem='center' p={2}
    sx={{position:'sticky',justifyContent:'space-between',background:'#000',top:0}}>

   <Link to='/' style={{alignitems:'center',display:'flex'}}>
    <img src={logo} alt='logo' height={45}></img>
   </Link>

   <SearchBar/>

 

    </Stack>
  )


export default Navbar