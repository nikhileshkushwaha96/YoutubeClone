import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardMedia,CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl ,demoChannelUrl, demoVideoUrl,demoChannelTitle} from "../utils/Content"


const VideoCard = ({video:{id:{videoId},snippet}}) => {
   
  
    
    
 return (
     <Card sx={{width:{md:250, xs:"100%"},boxShadow:"none"}}>
    <Link to={videoId?`/videos/${videoId}`: demoVideoUrl}>
    <CardMedia
     image={snippet?.thumbnails?.high?.url}
     alt={snippet?.title}
     sx={{height:180,width:"auto"}} />
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e", height:"106px"}}>
        <Link to={videoId?`/videos/${videoId}`: demoVideoUrl}>
            <Typography
            variant='subtitle1' fontWeight='bold' color="gray">
            {snippet?.title.slice(0,60) ||demoChannelTitle.slice(0,60) }
            <CheckCircle sx={{fontSize:12,color:"gray",ml:5}}/>

            </Typography>
        </Link>
    </CardContent>

</Card>)   
   
   
  

}


export default VideoCard