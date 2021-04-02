import React, { useEffect, useState } from "react";
import AllBooks from "../AllBooks/AllBooks";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("https://calm-island-19056.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>We Have {allBooks.length} Books In Our Store</h1>
      </div>
      {allBooks.map((allbook) => (
        <AllBooks key={allbook._id} allbook={allbook} />
      ))}
    </>
  );
};

export default ManageBooks;
