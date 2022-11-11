

import { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


  const [categories, setCategories] = useState([ 'obiwan']);



  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory)) return;
    
    setCategories([ newCategory, ...categories ]);
}
  return (
   <>

            
            <h1>Primera aplicacion React!</h1>
            
           <AddCategory
         
            onNewCategory ={(value)=> onAddCategory(value)}
            />


           {/*  //validar la key */}
              {
              
                categories.map( (category)  => (

                <GifGrid key={ category } 
                        category={ category }/>
                ))


              } 
              
     


  

   </>
  )
}
//aUcvCvPTBktfX7Uot61C1aJVmvfjhJao
