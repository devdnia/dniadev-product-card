import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';


describe('ProducTitle', () =>{

    test('Debe de mostrar el compomente correctamente con el título personalizado', () =>{

        const wrapper = renderer.create(
            <ProductTitle  title="Título personalizado" />
        )
        console.log(wrapper.toJSON() );
    })
})
