import React from "react";

const ToyCard = ({ toy }) => {
  const { name, desc, photoURL, price, rating } = toy;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <p className="font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
