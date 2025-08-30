import React from "react";
import { Container } from "reactstrap";
import OrderForm from "./OrderForm";


export default function OrderPage({ onOrderSaved }) {
  return (
    <section id="order">
      <Container>
        <h2 className="order-title">Posution Absolute Acı Pizza</h2>
         <OrderForm onOrderSaved={onOrderSaved} />
      </Container>
    </section>
  );
}
      