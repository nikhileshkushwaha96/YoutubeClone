import React from 'react'
import { Stack,Box } from '@mui/system'
import{VideoCard,ChannelCard} from "./"

const Videos = ({videos,direction}) => {
  // console.log(videos)
  if(!videos?.length) return 'loading'

 
  
  return (
    <Stack gap={2} justifyContent='start' flexWrap='wrap' direction={direction||'row'}>
     
     {videos.map((item,ind)=>(
      <Box key={ind}>

        {item.id.channelId && <ChannelCard channelDetail={item} />}

        {item.id.videoId && <VideoCard video={item}  />}
        
      
      
      </Box>
     ))}
    </Stack>
  )
}

export default Videos