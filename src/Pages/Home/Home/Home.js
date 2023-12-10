import React from "react";
import Reviews from "../Reviews/Reviews";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
