import React from "react";
import { Carousel } from "react-bootstrap";
import slideOne from "../../../Images/slideOne.gif";
import slideTwo from "../../../Images/People_In_the_Landscape_03.jpg";
import slideThree from "../../../Images/People_In_the_Landscape_02.jpg";
import slideFour from "../../../Images/People_In_the_Landscape_01.jpg";

const Banner = () => {
  return (
    <div style={{ backgroundColor: "black" }} className="d-flex mx-auto  py-5">
      <Carousel fade className="banner container">
        <Carousel.Item style={{ height: "600px" }}>
          <img className="d-block w-100" src={slideThree} alt="First slide" />
          <Carousel.Caption>
            <h3>Capturing Moments in Time</h3>
            <p>
              Immerse yourself in the art of photography as we freeze moments in
              time, transforming the ordinary into the extraordinary.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img className="d-block w-100" src={slideTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Capturing Moments in Time</h3>
            <p>
              Immerse yourself in the art of photography as we freeze moments in
              time, transforming the ordinary into the extraordinary.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img className="d-block w-100" src={slideOne} alt="Third slide" />

          <Carousel.Caption>
            <h3>Capturing Moments in Time</h3>
            <p>
              Immerse yourself in the art of photography as we freeze moments in
              time, transforming the ordinary into the extraordinary.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img className="d-block w-100" src={slideFour} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
