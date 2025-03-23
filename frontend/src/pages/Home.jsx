import React from "react";
import Attributes from "../component/Attributes";
import FoodCategories from "../component/foodcategories";
import Restaurants from "../component/Restaurents";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <div>
        <h1 align="center">Welcome to Home Page</h1>
        <img
          src="foodmain.jpg"
          alt="imagesource"
          style={{ display: "block", margin: "0 auto", width: "80%", maxWidth: "1200px" }}
        />
      </div>
      <Attributes />
      <FoodCategories/>
      <Restaurants/>
      
    </>
  );
};

export default Home;
