import React from "react";

const ShowAllOrders = (props) => {
  const { _id, email, name, category, price, status } = props.order;

  //approve an order
  const handleShipped = (id, status) => {
    const data = { status };
    const url = `https://my-photography-server-shafiachy.vercel.app/orders/${id}`;

    data.status = "Shipped";
    console.log(data.status);

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Order got Shipped!");

          window.location.reload();
        }
      });
  };

  const handleDelete = (id) => {
    const result = window.confirm("Do you want to delete?");
    if (result) {
      const url = `https://my-photography-server-shafiachy.vercel.app/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            window.location.reload();
          }
        });
    }
  };
  return (
    <tr>
      <td data-column="Email">{email}</td>
      <td data-column="Product Name">{name}</td>
      <td data-column="Category">{category}</td>
      <td data-column="Price">{price}</td>
      <td data-column="Status">{status}</td>
      <td data-column="Approve">
        <button
          onClick={() => handleShipped(_id, status)}
          className="btn btn-dark text-white"
        >
          Approve
        </button>
      </td>
      <td data-column="Remove">
        <button onClick={() => handleDelete(_id)} className="d-flex mx-auto">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ShowAllOrders;
