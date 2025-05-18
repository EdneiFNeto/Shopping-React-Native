
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Title } from './style'
import ProductComponent, { Product } from '../../components/Product';
// import produtcsFake from '../../assets/products.json';


function Home() : React.JSX.Element {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function products() {
            // setProducts(produtcsFake);
        } 

        products();
    }, [])

    return (
        <Container>
            <Title>Home</Title>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    ProductComponent({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        description: item.description,
                        image: item.image
                    })
                )}
            />
        </Container>
    )
}

export default Home;