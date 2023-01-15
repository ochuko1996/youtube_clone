import {useEffect} from 'react'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = 'New'
const SideBar = () => {
  return (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'}
        }}
    >
        {categories.map((category)=>(
            <button 
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#Fc1503',
                    color: 'white'
                }}
            >
               <span style={{
                color: category.name === selectedCategory ? 'white' :  'red', marginRight: '15px'}}>
                {category.icon}
               </span>
               <span>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default SideBar