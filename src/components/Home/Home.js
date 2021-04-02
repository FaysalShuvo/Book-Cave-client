import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BookCards from "../BookCards/BookCards";
import "./Home.css";
const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div className="row">
      {books.length === 0 && (
        <div className="d-flex justify-content-center align-items-center spinner-style">
          <Spinner animation="grow" />
        </div>
      )}
      {books.map((book) => (
        <BookCards key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Home;
