import React from "react";
import { Link } from "react-router-dom";

const Attributes = () => {
  const attributes = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Get your food delivered in minutes!",
      image: "/handtohand.jpg",
      link: "/delivery",
    },
    {
      id: 2,
      title: "Fresh Ingredients",
      description: "Quality ingredients for every dish.",
      image: "/wrap.jpg",
      link: "/ingredients",
    },
    {
      id: 3,
      title: "Best Offers",
      description: "Save big with our best deals.",
      image: "/deals.jpg",
      link: "/offers",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <div className="row justify-content-center">
        {attributes.map((attr) => (
          <div key={attr.id} className="col-md-3 col-sm-6">
            <div className="card text-white bg-primary mb-3" style={{ width: "14rem" }}>
              <img
                src={attr.image}
                className="card-img-top"
                alt={attr.title}
                style={{ height: "130px", objectFit: "cover" }} // Reduce image height
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "0.9rem" }}>{attr.title}</h5>
                <p className="card-text" style={{ fontSize: "0.8rem" }}>{attr.description}</p>
                <Link to={attr.link} className="btn btn-light btn-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attributes;
