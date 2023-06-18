import React from "react";

import useAuth from "../../Hooks/useAuth";

const SingleBookTwo = (props) => {
  const { name, price, card } = props.addon;
  const { user } = useAuth();
  const handleOrder = (name, price) => {
    const data = { name, price };
    data.status = "Pending";
    data.email = user.email;
    data.category = "Add-Ons";
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
    <div class="card-big-shadow ">
      <div
        class="card card-just-text"
        data-background="color"
        data-color={card}
        data-radius="none"
      >
        <div class="content bg-dark">
          <h6 class="category text-center my-2">{name}</h6>
          <h4 class="title text-decoration-underline text-center my-2">
            Tk {price}/-
          </h4>
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

export default SingleBookTwo;
