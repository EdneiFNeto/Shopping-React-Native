
import React from 'react';
import { Container, Title, Description, Image, Price } from './style';

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

function ProductComponent(product: Product) : React.JSX.Element {
  return (
    <Container>
      <Title>{ product.name }</Title>
      <Description>{ product.description }</Description>
      <Image source={{ uri: product.image }} />
      <Price>{ product.price }</Price>
    </Container>
  )
}

export default ProductComponent;