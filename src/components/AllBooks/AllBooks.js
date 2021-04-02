/* eslint-disable no-restricted-globals */
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const AllBooks = ({ allbook }) => {
  const { _id, name, author, price } = allbook || {};

  const deleteBook = (event, id) => {
    const url = `http://localhost:5000/delete/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("delete");
      });
  };
  return (
    <>
      <Navbar className="mt-2" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">{name}</Nav.Link>
          <Nav.Link href="#features">{author}</Nav.Link>
          <Nav.Link href="#pricing">{price}$</Nav.Link>
        </Nav>
        <Button onClick={() => deleteBook(event, _id)} variant="danger">
          Delete
        </Button>
      </Navbar>
    </>
  );
};

export default AllBooks;
