import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="m-5">
      <MDBContainer>
        <MDBRow className="mb-2">
          {items.map((item) => (
            <MDBCol key={item.id} size="lg">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText><p>Price: PKR {item.price}</p></MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}