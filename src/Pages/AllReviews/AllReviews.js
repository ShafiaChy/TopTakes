import React, { useState, useEffect } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import "./AllReviews.css";
import SingleReview from "./SingleReview";
const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "black" }} className="py-5">
        <h1 className="text-center text-white py-5 bg-dark">Client Reviews</h1>
        <div class="container contain mt-5">
          {reviews.map((review) => (
            <SingleReview key={review._id} review={review}></SingleReview>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllReviews;
