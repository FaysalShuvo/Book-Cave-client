import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddBooks = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      author: data.author,
      price: data.price,
      imageURL: imageURL,
    };

    console.log(eventData);

    const url = `https://calm-island-19056.herokuapp.com/addBook`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side", res));
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "ef749bef8c71305d48bb97c4339f42a1");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <br /> <label>Add Book Name</label> <br />
          <input name="name" defaultValue="New Book" ref={register} />
          <br /> <label>Add Author Name</label> <br />
          <input name="author" defaultValue="Author Name" ref={register} />
          <br />
          <label>Add Book Price</label> <br />
          <input
            className="mb-2"
            name="price"
            defaultValue="00"
            ref={register}
          />
          <br />
          <input
            name="exampleRequired"
            type="file"
            onChange={handleImageUpload}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddBooks;
