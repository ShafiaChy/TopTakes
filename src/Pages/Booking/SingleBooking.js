import React from "react";
import useAuth from "../../Hooks/useAuth";

const SingleBooking = (props) => {
  const { name, price, photographer, duration, number, card } = props.photo;
  const { user } = useAuth();

  const handleOrder = (name, price) => {
    const data = { name, price };
    data.email = user.email;
    data.status = "Pending";
    data.category = "Photography";
    fetch("https://my-photography-server-shafiachy.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Successfully added to the cart");
        }
      });
  };

  return (
    <div class="card-big-shadow">
      <div
        class="card card-just-text"
        data-background="color"
        data-color={card}
        data-radius="none"
      >
        <div class="content bg-dark" style={{ height: 400 }}>
          <h6 class="category text-center my-2">{name}</h6>
          <h4 class="title text-decoration-underline text-center my-2">
            Tk {price}/-
          </h4>
          <ul>
            <li>Photographer: {photographer}</li>
            <li>Event duration: {duration} hours</li>
            <li>Number of pictures: {number}</li>
          </ul>
          <button
            onClick={() => handleOrder(name, price)}
            className="btn btn-link text-white d-flex mx-auto my-4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
