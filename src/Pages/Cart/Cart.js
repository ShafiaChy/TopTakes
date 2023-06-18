import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import "./Cart.css";
import SingleCart from "./SingleCart";

const Cart = () => {
  const [carts, setCart] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const singleProduct = carts.filter((cart) => cart.email == user.email);
  let subtotal = 0;
  let total = 0;
  let vat = 0;
  console.log(singleProduct);
  if (singleProduct[0]?.price) {
    for (const price in singleProduct) {
      subtotal = subtotal + singleProduct[price].price;
    }
    vat = 500;
    total = subtotal + vat;
  }

  return (
    <div className="body">
      <Navigation></Navigation>
      <div className="px-4 px-lg-0">
        <div className="container text-white py-5 text-center">
          <h1 className="display-4 my-3">My Cart</h1>
        </div>

        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-6 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>

                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    {user.email ? (
                      <tbody>
                        {singleProduct.map((single) => (
                          <SingleCart
                            key={single._id}
                            single={single}
                          ></SingleCart>
                        ))}
                      </tbody>
                    ) : (
                      <tbody>
                        <p>Empty Cart</p>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      {singleProduct && <strong>Tk {subtotal}/-</strong>}
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Vat</strong>
                      {singleProduct && <strong>Tk {vat}/-</strong>}
                    </li>

                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">
                        {singleProduct && <strong>Tk {total}/-</strong>}
                      </h5>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-dark rounded-pill py-2 btn-block"
                  >
                    Procceed to checkout
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://img.collegedekhocdn.com/media/img/careers/photographer.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
