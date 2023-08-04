import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from './data/products';



describe('ProductImage', () =>{

    test('Debe mostrar la URL de la image', () =>{

        const wrapper = renderer.create(
            <ProductImage img='url/imagen' className='class-image'/>,
        )
        expect( wrapper.toJSON()).toMatchSnapshot();
    }),

    test('Debe de mostrar el compomente con la URL de la imagen', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 } >
                {
                    () => (
                        <ProductImage img={ product2.img }/>
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON()).toMatchSnapshot();

    })

})