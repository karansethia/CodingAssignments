import {styled} from "styled-components";

export const ProductsList = styled.div`
  width: 90%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 40px;
  justify-content: space-evenly;
  margin-right: 5rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const PageButton = styled.button`
  background-color: blueviolet;
  font-size: 0.7rem;
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
`;

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export const PageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 3rem 0rem;
`;
