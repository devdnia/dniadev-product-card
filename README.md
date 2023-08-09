# Dniadev-Product-Card

Este es un paquete para React para crear una tarjeta de productos con la funcionalidad de incrementar o decrementar las unidades que se desean. 

![ProductCart](./assets/imageExample.jpg)


### Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'dniadev-product-card';
```


```
                <ProductCard
                    product={ product } 
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }


                </ProductCard>
```                
