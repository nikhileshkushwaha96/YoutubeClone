
import axios from "axios";

const BaseUrl = 'https://youtube-v31.p.rapidapi.com' 
const options = {
    
    url:`${BaseUrl}/`,
    params: {
    
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'caa2ac1ee4mshfffa4001cccb463p10e030jsn76bfe73b6122',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });



 export const fetchApi = async(url)=>{
    try {
      const {data}= await  axios.get(`${BaseUrl}/${url}`,options)
      return data
        
    } catch (error) {
        console.log(error)
    }

  }