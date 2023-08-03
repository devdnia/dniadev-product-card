# Dniadev-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Iván Pérez 

### Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } 'dniadev-product-card';
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
