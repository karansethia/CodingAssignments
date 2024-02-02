import React, {useState} from "react";
import {
  FilterContainer,
  FilterHead,
  FilterLabel,
  FilterRadio,
  FilterRange,
  Range,
  RangeContainer,
  FilterForm,
} from "./FilterElements";
import {ProductActions} from "../../store";
import {useDispatch} from "react-redux";

const Filter = (props) => {
  const dispatch = useDispatch();
  const handleClick = (e, category) => {
    if (e.target.checked) {
      console.log(`${category} added`);
      dispatch(ProductActions.addCategory(category));
      dispatch(ProductActions.restoreCurrent());
    } else {
      console.log(`${category} removed`);
      dispatch(ProductActions.removeCategory(category));
    }
  };
  return (
    <FilterContainer>
      <FilterHead>Price</FilterHead>
      <FilterLabel>
        <FilterRange
          type="range"
          min="0"
          max="20000"
          defaultValue="20000"
          onClick={(e) => {
            dispatch(ProductActions.updateRange(e.target.value));
          }}
        />
        <RangeContainer>
          <Range>0</Range>
          <Range>20000</Range>
        </RangeContainer>
      </FilterLabel>
      <FilterHead>Category</FilterHead>
      <FilterForm>
        <FilterLabel>
          <FilterRadio
            type="checkbox"
            id="men"
            name="men"
            onClick={(e) => handleClick(e, "men")}
          />{" "}
          Men
        </FilterLabel>
        <FilterLabel>
          <FilterRadio
            type="checkbox"
            id="women"
            name="women"
            onClick={(e) => handleClick(e, "women")}
          />
          {"  "}Women
        </FilterLabel>
        <FilterLabel>
          <FilterRadio
            type="checkbox"
            id="tshirt"
            name="tshirt"
            onClick={(e) => handleClick(e, "tshirt")}
          />
          {"  "}Tshirt
        </FilterLabel>
        <FilterLabel>
          <FilterRadio
            type="checkbox"
            id="top"
            name="top"
            onClick={(e) => handleClick(e, "top")}
          />
          {"  "}Top
        </FilterLabel>
        <FilterLabel>
          <FilterRadio
            type="checkbox"
            id="suit"
            name="suit"
            onClick={(e) => handleClick(e, "suit")}
          />
          {"  "}Suit
        </FilterLabel>
        <FilterLabel>
          <FilterRadio
            type="checkbox"
            id="sarees"
            name="sarees"
            onClick={(e) => handleClick(e, "sarees")}
          />
          {"  "}Sarees
        </FilterLabel>
      </FilterForm>
    </FilterContainer>
  );
};

export default Filter;
