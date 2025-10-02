import React from "react";
import Payment from "./Payment";

export default function PlaceCard({ place }) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={place.image} alt={place.name} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{place.name}</h3>
        <p className="card-desc">{place.description}</p>
        <div className="card-meta">
          <span className="rating">★ {place.rating}</span>
          <span className="duration">{place.duration}</span>
        </div>
        <div className="card-bottom">
          <div className="price">
            <span className="amount">{place.price.currency} {place.price.amount}</span>
          </div>
          <button className="btn-primary">Book Now</button>
          
        </div>
      </div>
    
    </article>
    
  );
}
