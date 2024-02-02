import React from "react";
import {
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductTitle,
  ProductBtn,
} from "./ProductElements";

const Product = ({title, image, price}) => {
  return (
    <>
      <ProductContainer layout>
        <ProductImg src={image} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
        <ProductBtn>Add to Cart</ProductBtn>
      </ProductContainer>
    </>
  );
};

export default Product;
