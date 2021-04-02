import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import "../BookCards/BookCards.css";

const Order = () => {
  const { _id } = useParams();
  const [book, setBook] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://calm-island-19056.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  const found = book.find((b) => b._id === _id);
  const { name, author, price, imageURL } = found || {};

  const handleCheckOut = () => {
    const newOrder = { ...loggedInUser, orderTime: new Date(), ...found };
    delete newOrder._id;
    const url = `https://calm-island-19056.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert(
            " Ordered Placed Successfully! Go to checkout tab for your order lists"
          );
        }
      });
  };
  return (
    <>
      {found === undefined ? (
        <div className="d-flex align-items-center spinner-style">
          <Spinner animation="grow" />
        </div>
      ) : (
        <div className="container mt-5">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{name}</td>
                <td>{author}</td>
                <td>1</td>
                <td>{price}$</td>
              </tr>
            </tbody>
          </Table>
          <div className="text-center">
            <Button onClick={handleCheckOut}>Check Out</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
