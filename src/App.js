import React from 'react'
import { Route, BrowserRouter,Routes } from 'react-router-dom'
import {Box} from '@mui/material'

import {Navbar, Feed,VideoDetail,ChannelDetail,SearchFeed } from './componenet'

const App = () => (
  
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
            <Route path ="/"  element={<Feed/>}/>
            <Route path ="/videos/:id"  element={<VideoDetail/>}/>
            <Route path ="/channel/:id"  element={<ChannelDetail/>}/>
            <Route path ="/search/:searchTerm"  element={<SearchFeed/>}/>
        </Routes>
            
        </Box>
    </BrowserRouter>
  )



export default App