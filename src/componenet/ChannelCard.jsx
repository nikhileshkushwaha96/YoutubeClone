import React from 'react'
import { Link } from 'react-router-dom'
import {Box,Typography,CardContent,CardMedia} from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import {demoProfilePicture } from "../utils/Content"



const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box 
    sx={{
      boxShadow:"none",borderRadius:"20px",
      display:"flex",justifyContent:"center",
      alignItems:"center",margin:"auto",marginTop,}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{flexDirection:"column",display:"flex",justifyContent:"center",
        alignItems:"center",color:"#fff"}}>
            <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:"50%", height:"180px", width:"180px", mb:"2px",border:"1px solid #e3e3e3"}}
            />

            <Typography variant='h6'>
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{fontSize:14,color:"gray",ml:5}}/>
            
            </Typography>

            </CardContent>


        </Link>

    </Box>
  )
}

export default ChannelCard