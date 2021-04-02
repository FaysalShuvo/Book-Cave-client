import React from "react";
import "./BookCards.css";
import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const BookCards = ({ book }) => {
  const { _id, name, author, price, imageURL } = book;
  const history = useHistory();

  const showOrder = (id) => {
    const url = `/order/${id}`;
    history.push(url);
  };
  return (
    <div className="col-md-3 text-center mt-3 ">
      <Card className="p-3" style={{ width: "18rem", minHeight: "35rem" }}>
        <Card.Img className="card-img" variant="top" src={imageURL} alt="..." />
        <h1>{name}</h1>
        <p>author name: {author}</p>
        <div className="row">
          <div className="col-md-6">
            <h2>{price}$</h2>
          </div>
          <div className="col-md-6">
            <Button onClick={() => showOrder(_id)} variant="primary">
              BUY NOW
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookCards;
