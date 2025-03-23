import React from "react";

const FoodCategories = () => {
  const categories = [
    { id: 1, name: "Biryani", image: "/biryani.jpg" },
    { id: 2, name: "Pizza", image: "/pizza.jpg" },
    { id: 3, name: "Burger", image: "/burger.jpg" },
    { id: 4, name: "Shawarma", image: "/wrap.jpg" },
    { id: 5, name: "kfc", image: "/kfc.jpg" },
    { id: 6, name: "Pasta", image: "/pasta.jpg" },
    { id: 7, name: "Salad", image: "/salad.jpg" },
    { id: 8, name: "Indian Thali", image: "/indianthali.jpg" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Food Categories</h2>
      <div className="row">
        {categories.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center shadow-sm">
              <img
                src={item.image}
                className="card-img-top mx-auto d-block"
                alt={item.name}
                style={{ width: "80px", height: "80px", marginTop: "15px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
