import { renderHook, waitFor } from '@testing-library/react';
import { usefetchGifs } from '../../src/hooks/usefetchGifs';


describe('Pruebas en el kook usefetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => usefetchGifs('Obiwan') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => usefetchGifs('Obiwan') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
                
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});