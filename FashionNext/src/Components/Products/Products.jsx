import React, {useState} from "react";
import {
  ProductsList,
  PageButton,
  ProductsListContainer,
  PageButtonContainer,
} from "./ProductsElements";
import Product from "../Product/Product";
import {useDispatch, useSelector} from "react-redux";
import useFilter from "../../hooks/useFilter";
import {ProductActions} from "../../store";

const Products = (props) => {
  const products = useSelector((state) => state.productList);
  const filterCategory = useSelector((state) => state.filterCategory);
  const filterRange = useSelector((state) => state.filterRange);
  console.log(filterRange);
  console.log(filterCategory);
  // let filteredProducts = [];
  // if (filterCategory.length > 0) {
  //   for (const cat of filterCategory) {
  //     for (const prod of products) {
  //       if (prod.category.indexOf(cat) != -1) {
  //         console.log(prod);
  //         const doesExist = filteredProducts.find((existingProd) => {
  //           if (existingProd.id === prod.id) {
  //             return true;
  //           } else {
  //             return false;
  //           }
  //         });
  //         if (!doesExist) {
  //           filteredProducts.push(prod);
  //         }
  //       }
  //     }
  //   }
  // } else {
  //   filteredProducts = products;
  // }
  // filteredProducts = filteredProducts.filter(
  //   (product) => product.price <= filterRange
  // );

  const {filteredProducts} = useFilter(products, filterCategory, filterRange);

  // const [current, setCurrent] = useState(1);
  const current = useSelector((state) => state.current);
  const dispatch = useDispatch();
  const dataPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / dataPerPage);
  const lastIndex = current * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const showProducts = filteredProducts.slice(firstIndex, lastIndex);
  const pageNumbering = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbering.push(i + 1);
  }

  const previousHandler = () => {
    if (current !== 1) {
      dispatch(ProductActions.setPrevCurrent());
    }
  };
  const nextHandler = () => {
    if (current !== totalPages) {
      dispatch(ProductActions.setNextCurrent());
    }
  };

  return (
    <ProductsListContainer>
      <ProductsList>
        {showProducts.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </ProductsList>
      <PageButtonContainer>
        <PageButton onClick={previousHandler}>Previous</PageButton>
        <PageButton onClick={nextHandler}>Next</PageButton>
      </PageButtonContainer>
    </ProductsListContainer>
  );
};

export default Products;
