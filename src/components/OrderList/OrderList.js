import React from "react";
import { Table } from "react-bootstrap";

const OrderList = ({ order }) => {
  const { author, name, price, orderTime } = order;
  
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Order Time</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{author}</td>
            <td>{new Date(orderTime).toDateString("dd/MM/yyyy")}</td>
            <td>1</td>
            <td>{price}$</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default OrderList;
