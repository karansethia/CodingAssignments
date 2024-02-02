import React from "react";
import {Nav, NavItems, AccDetails, Logo, AccImg, AccId} from "./NavElements";
import logo from "../../assets/logo.png";
import accimg from "../../assets/acimage.png";

const Navbar = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <NavItems>
        <AccImg src={accimg} />
        <AccId>Karan</AccId>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
