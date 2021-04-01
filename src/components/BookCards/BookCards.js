import React from "react";
import "./BookCards.css";
import { Button, Card } from "react-bootstrap";

const BookCards = ({ book }) => {
  const { name, author, price, imageURL } = book;
  console.log(book);
  return (
    <div className="col-md-3 text-center mt-3 ">
      <Card className="p-3" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={imageURL} alt="..." />
        <h1>{name}</h1>
        <p>author name: {author}</p>
        <div className="row">
          <div className="col-md-6">
            <h2>{price}$</h2>
          </div>
          <div className="col-md-6">
            <Button variant="primary">BUY NOW</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookCards;
