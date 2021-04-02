import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import OrderList from "../OrderList/OrderList";

const Checkout = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      {orders.length === 0 && (
        <div className="d-flex align-items-center spinner-style">
          <Spinner animation="grow" />
        </div>
      )}
      {
        <div>
          <h3 className="text-center">
            We will send {orders.length} Books to your address From Our Cave!
          </h3>
          <div className="container">
            {orders.map((order) => (
              <OrderList key={order._id} order={order} />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Checkout;
