import React from "react";

const restaurantData = [
  {
    id: 1,
    name: "KFC",
    image: "/kfc.jpg",
    cuisine: "Burger",
    rating: "3.9",
    price: 100,
    deliveryTime: 29,
    discount: 50,
  },
  {
    id: 2,
    name: "Pista House Bakery",
    image: "/pista-house.jpg",
    cuisine: "Bakery, Desserts, Sandwiches",
    rating: "4.3",
    price: 350,
    deliveryTime: 38,
    discount: 50,
  },
  {
    id: 3,
    name: "Cream Stone Ice Cream",
    image: "/cream-stone.jpg",
    cuisine: "Ice Cream",
    rating: "4.4",
    price: 100,
    deliveryTime: 25,
    discount: 50,
  },
  {
    id: 4,
    name: "Hotel Shadab",
    image: "/hotel-shadab.jpg",
    cuisine: "North Indian, Mughlai, Kebab",
    rating: "4.1",
    price: 500,
    deliveryTime: 25,
    discount: 50,
  },
  {
    id: 5,
    name: "Iqbal Cafe",
    image: "/iqbal-cafe.jpg",
    cuisine: "Hyderabadi, Biryani",
    rating: "4.3",
    price: 150,
    deliveryTime: 21,
    discount: 50,
  },
  {
    id: 6,
    name: "Pizza Hut",
    image: "/pizza-hut.jpg",
    cuisine: "Pizza, Pasta, Italian",
    rating: "4.1",
    price: 200,
    deliveryTime: 43,
    discount: 30,
  },
];

const Restaurants = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Food Delivery Restaurants</h2>
      <div className="row">
        {restaurantData.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={restaurant.image}
                className="card-img-top"
                alt={restaurant.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="text-muted">{restaurant.cuisine}</p>
                <div className="d-flex justify-content-between">
                  <span className="badge bg-success">{restaurant.rating} ⭐</span>
                  <span className="text-muted">₹{restaurant.price} for one</span>
                </div>
                <p className="text-muted mt-2">{restaurant.deliveryTime} min</p>
                {restaurant.discount && (
                  <span className="badge bg-primary">{restaurant.discount}% OFF</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
