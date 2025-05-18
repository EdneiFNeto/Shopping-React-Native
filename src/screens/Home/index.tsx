
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Title } from './style'
import ProductComponent from '../../components/Product';
import produtcsFake from '../../assets/products.json';
import { Product } from '../../model/Product';

function Home() : React.JSX.Element {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function products() {
            console.log('Carregando produtos', produtcsFake);
            setProducts(produtcsFake);
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