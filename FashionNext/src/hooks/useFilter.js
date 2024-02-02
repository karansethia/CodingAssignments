// import { useSelector, useDispatch } from "react-redux";

const useFilter = (products, filterCategory, filterRange) => {
let filteredProducts = [];
  if (filterCategory.length > 0) {
    for (const cat of filterCategory) {
      for (const prod of products) {
        if (prod.category.indexOf(cat) != -1) {
          console.log(prod);
          const doesExist = filteredProducts.find((existingProd) => {
            if (existingProd.id === prod.id) {
              return true;
            } else {
              return false;
            }
          });
          if (!doesExist) {
            filteredProducts.push(prod);
          }
        }
      }
    }
  } else {
    filteredProducts = products;
  }
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= filterRange
  );
  return {filteredProducts: filteredProducts}

}
export default useFilter;