import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand><strong>ShopOnline</strong></MDBNavbarBrand>
        <span>
          <Link to="/"><strong>All Products</strong> </Link>
        </span>
        <MDBBtn color="secondary">
          <Link to="/cart"><strong>Cart({totalQuantity})</strong></Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}