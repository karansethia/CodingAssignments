import {styled} from "styled-components";
import {motion} from "framer-motion";

export const ProductContainer = styled(motion.div)`
  width: 12rem;
  height: 17rem;
  background-color: #eeeeee;
  border: 1px solid blueviolet;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImg = styled.img`
  display: block;
  width: 100%;
  height: 12rem;
  overflow: hidden;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  object-position: top;
  object-fit: cover;

  border-bottom: 1px solid blueviolet;
`;
export const ProductTitle = styled.div`
  font-size: 0.7rem;
  text-transform: capitalize;
  color: #565656;
  font-weight: 500;
  text-align: center;
  margin: 5px 0px;
`;
export const ProductPrice = styled.div`
  font-size: 1rem;
  color: #565656;
  font-weight: 500;
  text-align: center;
  font-size: 0.8rem;
  margin: 5px;
`;

export const ProductBtn = styled.button`
  background-color: blueviolet;
  font-size: 0.7rem;
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
`;
