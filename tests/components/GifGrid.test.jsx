import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { usefetchGifs } from '../../src/hooks/usefetchGifs';

jest.mock('../../src/hooks/usefetchGifs');


describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Obiwan';

    test('debe de mostrar el loading inicialmente', () => {

        usefetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Obiwan',
                url: 'https://localhost/Obiwan.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        usefetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
        


    });


});