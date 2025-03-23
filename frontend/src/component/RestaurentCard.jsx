import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="col-md-4 mb-4">
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
  );
};

export default RestaurantCard;
