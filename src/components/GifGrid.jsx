import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { usefetchGifs } from '../hooks/usefetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = usefetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}