import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/Content'




const Sidebar = ({selectedcategory,SetselectedCategory}) => 
 (
    <Stack direction='row' sx={{flexDirection:{md:'column'},height:{md:'95%',sx:'auto'},overflowY:'auto'}} >
      {categories.map((category)=>(
        <button className="category-btn" 
        onClick={()=>SetselectedCategory(category.name)}
        
        style={{background:category.name===selectedcategory && '#fC1503',color:'black'}}
        key={category.name}>
            <span style={{color:category.name===selectedcategory?"white":"red",marginRight:'15px'}}>{category.icon}</span>
            <span>{category.name}</span>
        </button>
      ))}
    </Stack>
    
  )


export default Sidebar