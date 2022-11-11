

import { GifItem } from './GifItem';
import {usefetchGifs} from '../hooks/usefetchGifs'
//creacion nuevo componente
//llama la categoria dividiendolas por titulo y enumerandolos en listas del 1 al 10


export const GifGrid = ({category}) => {

  const {images, isLoading}= usefetchGifs( category);





 
 
  return (
    <>
    <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
        


      }
    
      <div className='card-grid'>
        {
            images.map( (image) => (

              <GifItem
               key={image.id}
               {...image}
              
               
               />
            )
            )


        }

      <li></li>
    

      </div>
  
    </>
  )
}
