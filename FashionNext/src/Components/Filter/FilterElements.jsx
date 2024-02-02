import {styled} from "styled-components";

export const FilterContainer = styled.div`
  width: 15rem;
  max-width: 205px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 2rem 2rem 1rem 5rem;
  background-color: #e9e9e9;
  padding: 1rem;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 10rem;
    margin: 0.5rem;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024) {
    align-items: center;
  }
`;

export const FilterHead = styled.h3`
  font-size: 1rem;
  color: #838383;
  font-weight: 400;
`;
export const FilterLabel = styled.label`
  width: 100%;
  font-size: 0.8rem;
  color: #595959;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const FilterRadio = styled.input``;
export const FilterRange = styled.input`
  width: 100%;
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Range = styled.p`
  font-size: 0.6rem;
  color: #8f8f8f;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    /* display: block; */
  }
`;
