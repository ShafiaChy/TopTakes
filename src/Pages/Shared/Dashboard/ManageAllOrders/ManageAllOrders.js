import React, { useState, useEffect } from "react";
import Navigation from "../../Navigation/Navigation";
import "./ManageAllOrders.css";
import ShowAllOrders from "./ShowAllOrders";
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <>
      <Navigation></Navigation>
      <div style={{ minHeight: 300 }} className="bg-light pt-4 ">
        <h1 className="bg-dark text-center text-white py-5 mt-2">
          Clients Orders
        </h1>
        <table className="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price/Tk</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <ShowAllOrders key={order.key} order={order}></ShowAllOrders>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageAllOrders;
