import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Filter from "./Components/Filter/Filter";
import {UI} from "./Components/UI";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <UI>
        <Filter />
        <Products />
      </UI>
    </div>
  );
};

export default App;
