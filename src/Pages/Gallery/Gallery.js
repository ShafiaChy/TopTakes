import React, { useState, useEffect } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import "./Gallery.css";
import SinglePicture from "./SinglePicture";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);
  console.log(pictures);
  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);
  // useEffect(() => {
  // 	async function fetchMyAPI() {
  // 	  let response = await fetch('https://my-photography-server-shafiachy.vercel.app/gallery')
  // 	  response = await response.json()
  // 	  setPictures(response)
  // 	}
  // }, [])

  return (
    <div>
      <Navigation></Navigation>
      <h1 className="text-center text-white py-5">Gallery</h1>

      <div className="section">
        <div className="container flex_div ">
          {pictures.map((picture) => (
            <SinglePicture key={picture._id} picture={picture}></SinglePicture>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
