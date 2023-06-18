import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Booking.css";
import SingleBooking from "./SingleBooking";
import SingleBookingThree from "./SingleBookingThree";
import SingleBookTwo from "./SingleBookTwo";

const Booking = () => {
  const [photos, setPhotos] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [addons, setAddOns] = useState([]);
  const { user, logOut, admin } = useAuth();

  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/cinemas")
      .then((res) => res.json())
      .then((data) => setCinemas(data));
  }, []);
  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/addons")
      .then((res) => res.json())
      .then((data) => setAddOns(data));
  }, []);
  return (
    <div className="bg-white">
      <div className=" bg-white pb-5">
        <div style={{ backgroundColor: "black" }} className="pb-5">
          <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>

          <div>
            <button
              style={{ backgroundColor: "black" }}
              class="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </button>
            <div
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div class="offcanvas-header">
                <h3 class="offcanvas-title" id="offcanvasScrollingLabel">
                  Top Takes
                </h3>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <Link className="text-decoration-none text-dark" to="/home">
                  <h6>Home</h6>
                </Link>
                <Link className="text-decoration-none text-dark" to="/gallery">
                  <h6>Gallery</h6>
                </Link>
                <Link className="text-decoration-none text-dark" to="/booking">
                  <h6>Booking</h6>
                </Link>

                {user.email && (
                  <div>
                    {!admin && (
                      <NavDropdown
                        title="Dashboard"
                        id="offcanvasNavbarDropdown2"
                      >
                        <Link
                          className="text-dark text-decoration-none ms-3 px-3"
                          to="/cart"
                        >
                          My Cart
                        </Link>

                        <hr />
                        <Link
                          className="text-dark text-decoration-none ms-3 px-3"
                          to="/addreview"
                        >
                          Add Review
                        </Link>
                        <hr />
                        <Link
                          className="text-dark text-decoration-none ms-3 px-3"
                          to="/cart"
                        >
                          Payment
                        </Link>
                      </NavDropdown>
                    )}

                    {admin && (
                      <NavDropdown
                        title="Dashboard"
                        id="offcanvasNavbarDropdown2"
                      >
                        <Link
                          className="text-dark text-decoration-none ms-3 px-3"
                          to="/cart"
                        >
                          Manage All Orders
                        </Link>
                        <hr />
                        <Link
                          className="text-dark text-decoration-none ms-3 px-3"
                          to="/cart"
                        >
                          Add Picture
                        </Link>
                        <hr />
                        <Link
                          className="text-dark text-decoration-none ms-3 px-3"
                          to="/admin"
                        >
                          Make Admin
                        </Link>
                      </NavDropdown>
                    )}
                  </div>
                )}
              </div>
              <h5
                className="text-dark ms-2 mb-2 mt-2"
                style={{ textShadow: "1px 1px rgb(83, 80, 80)" }}
              >
                {user.displayName}
              </h5>
              {user.email ? (
                <div className="d-flex">
                  <button
                    style={{ backgroundColor: "black", color: "white" }}
                    className="rounded ms-2 my-2 border-0 py-2 px-3  py-sm-2 px-sm-3"
                    onClick={logOut}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  style={{ backgroundColor: "black" }}
                  className="btn w-25 ms-2 my-3 text-white"
                >
                  Login
                </Link>
              )}
            </div>
            <h1
              style={{ backgroundColor: "black" }}
              className="text-center text-white py-5"
            >
              Packages
            </h1>
          </div>
        </div>

        <div class="container bootstrap snippets bootdeys">
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center mx-3 my-4 text-muted fs-1">PHOTOGRAPHY</p>
          </div>
          <div className="row">
            <div class="w-100 row row-cols-1 row-cols-md-3  content-card">
              {photos.map((photo) => (
                <SingleBooking key={photo.key} photo={photo}></SingleBooking>
              ))}
            </div>
          </div>
        </div>
        <div class="container bootstrap snippets bootdeys">
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center mx-3 my-4 text-muted fs-1">CINEMATOGRAPHY</p>
          </div>
          <div className="row">
            <div class="w-100 row row-cols-1 row-cols-md-3   content-card">
              {cinemas.map((cinema) => (
                <SingleBookingThree
                  key={cinema.key}
                  cinema={cinema}
                ></SingleBookingThree>
              ))}
            </div>
          </div>
        </div>
        <div class="container bootstrap snippets bootdeys">
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center mx-3 my-4 text-muted fs-1">ADD-ONS</p>
          </div>

          <div class="w-100 row row-cols-1 row-cols-md-3 content-card">
            {addons.map((addon) => (
              <SingleBookTwo key={addon.key} addon={addon}></SingleBookTwo>
            ))}
          </div>
        </div>
        {/* <div class="col-md-4 col-sm-6 content-card">
                
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                        <div class="content">
                            <h6 class="category">Best cards</h6>
                            <h4 class="title"><a href="#">Green Card</a></h4>
                            <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                        <div class="content">
                            <h6 class="category">Best cards</h6>
                            <h4 class="title"><a href="#">Yellow Card</a></h4>
                            <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                        <div class="content">
                            <h6 class="category">Best cards</h6>
                            <h4 class="title"><a href="#">Brown Card</a></h4>
                            <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                        <div class="content">
                            <h6 class="category">Best cards</h6>
                            <h4 class="title"><a href="#">Purple Card</a></h4>
                            <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                        <div class="content">
                            <h6 class="category">Best cards</h6>
                            <h4 class="title"><a href="#">Orange Card</a></h4>
                            <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div> 
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Booking;
