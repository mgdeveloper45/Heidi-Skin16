import React, { useState } from 'react'
import { useEffect} from 'react'
import Menu from '../Components/Menu'
import { allCategories } from '../utils/rawData'
// 

const SalonServices = () => {
    const [categories, setCategories] = useState([]);
    
   useEffect(() => {
       setCategories(allCategories)
   }, [])
    return (
        <div>
            {categories.map((category, idx)=> (
                <Menu category={category}/>
                 
            ))}    
        </div>
    )
}

export default SalonServices
