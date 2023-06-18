import { Rating, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Review.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    fetch("https://my-photography-server-shafiachy.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="review-layout py-5">
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input
        type="radio"
        name="position"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <main id="carousel">
        {reviews.map((review) => (
          <div className="item">
            <div className="container">
              <h3 className="mt-4 text-white text-center text-decoration-underline">
                {review.name}
              </h3>
              <p className="text-white">{review.review}</p>
              <div className="d-flex justify-content-center bg-dark">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.rate}
                    precision={0.5}
                    readOnly
                  />
                </Stack>{" "}
                <small style={{ color: "white", textShadow: "none" }}>
                  ({review.rate})
                </small>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Reviews;
