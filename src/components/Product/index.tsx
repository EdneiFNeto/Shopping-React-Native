
import React from 'react';
import { Container, Title, Description, Image, Price } from './style';
import { Product } from '../../model/Product';

function ProductComponent(product: Product) : React.JSX.Element {
  return (
    <Container>
      <Title>{ product.name }</Title>
      <Description>{ product.description }</Description>
      <Image source={{ uri: product.image }} />
      <Price>R$ { product.price }</Price>
    </Container>
  )
}

export default ProductComponent;